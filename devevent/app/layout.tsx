import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "DevEvent is a platform for developers to share their events",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen font-schibsted-grotesk antialiased`}>
      import LightRays from './LightRays';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <div className="absolute">
    raysOrigin="top-center-offset"
    raysColor="#00ffff"
    raysSpeed={0.5}
    lightSpread={0.9}
    rayLength={1.4}
    followMouse={true}
    mouseInfluence={0.02}
    noiseAmount={0.1}
    distortion={0.01}
    className="custom-rays"
  />
  </div>
</div>
        {children}
      </body>
    </html>
  );
}
