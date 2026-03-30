'use client'

import { useEffect, useRef } from 'react'

interface LissajousCanvasProps {
  opacity?: number
  color?: string
  trailColor?: string
  interactive?: boolean
  className?: string
}

export function LissajousCanvas({
  opacity = 1,
  color = '#2D6BE4',
  trailColor = 'rgba(235,245,251,0.04)',
  interactive = false,
  className = '',
}: LissajousCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const deltaRef = useRef(0)
  const mouseInfluenceRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas CSS background to transparent
    canvas.style.background = 'transparent'

    const resizeObserver = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      // Clear canvas explicitly on resize
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    })
    resizeObserver.observe(canvas)

    // Initial size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Explicit initial clear — prevents default opaque bg flash
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Mouse influence for interactive mode
    let mouseHandler: ((e: MouseEvent) => void) | null = null
    if (interactive && canvas.parentElement) {
      mouseHandler = (e: MouseEvent) => {
        const rect = canvas.parentElement!.getBoundingClientRect()
        const nx = (e.clientX - rect.left) / rect.width  // 0 to 1
        mouseInfluenceRef.current = (nx - 0.5) * 0.8      // -0.4 to 0.4
      }
      canvas.parentElement.addEventListener('mousemove', mouseHandler)
    }

    function draw() {
      const w = canvas!.width
      const h = canvas!.height
      if (w === 0 || h === 0) {
        animRef.current = requestAnimationFrame(draw)
        return
      }

      const cx = w / 2
      const cy = h / 2
      const A = w * 0.40
      const B = h * 0.40
      const a = 3
      const b = 2

      ctx!.clearRect(0, 0, w, h)

      ctx!.beginPath()
      ctx!.strokeStyle = color
      ctx!.lineWidth = 1.2
      ctx!.globalAlpha = opacity * 0.75

      const delta = deltaRef.current + mouseInfluenceRef.current

      for (let i = 0; i <= 3000; i++) {
        const t = (i / 3000) * Math.PI * 2
        const x = cx + A * Math.sin(a * t + delta)
        const y = cy + B * Math.sin(b * t)
        if (i === 0) {
          ctx!.moveTo(x, y)
        } else {
          ctx!.lineTo(x, y)
        }
      }
      ctx!.stroke()
      ctx!.globalAlpha = 1

      deltaRef.current += 0.003
      
      animRef.current = requestAnimationFrame(draw)
    }
    
    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      resizeObserver.disconnect()
      if (mouseHandler && canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', mouseHandler)
      }
    }
  }, [opacity, color, interactive])

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className}`}
    />
  )
}

