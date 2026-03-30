import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
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
    <html lang="en" className={cn("font-sans", inter.variable, syne.variable, dmSans.variable, jetbrainsMono.variable)}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
