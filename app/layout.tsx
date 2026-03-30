import type { Metadata } from "next";
import { Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Olympus · Science Circle at UM6P",
  description: "Where Scientific Curiosity Meets Technical Execution. An academic and technical circle at UM6P.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-serif", lora.variable, jetbrainsMono.variable)}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
