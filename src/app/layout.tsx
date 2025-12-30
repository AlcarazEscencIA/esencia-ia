import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";



export const metadata: Metadata = {
  title: "Esencia IA | Experiencias Digitales",
  description: "Transformamos ideas en experiencias digitales con IA y diseño de vanguardia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`antialiased bg-black text-white selection:bg-primary/30`}
      >
        <SmoothScroll>
          <CustomCursor />
          {/* Global Background Video */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-black/70 z-10" /> {/* Dark Overlay for readability */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60"
            >
              <source src="/background-video-v2.mp4" type="video/mp4" />
            </video>
          </div>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
