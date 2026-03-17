"use client"

// Noticed teaser landing page with staged reveal animation
import { Cormorant_Garamond } from "next/font/google"
import { useEffect, useState } from "react"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
})

export default function NoticedLandingPage() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    // Stage 0: Logo visible immediately
    // Stage 1: First stanza (after 1.5s)
    // Stage 2: Second stanza (after 3s)
    // Stage 3: Third stanza (after 4.5s)
    // Stage 4: Fourth stanza / tagline (after 6s)
    // Stage 5: CTA button (after 7.5s)
    // Stage 6: Footer (after 8.5s)

    const timers = [
      setTimeout(() => setStage(1), 1500),
      setTimeout(() => setStage(2), 3000),
      setTimeout(() => setStage(3), 4500),
      setTimeout(() => setStage(4), 6000),
      setTimeout(() => setStage(5), 7500),
      setTimeout(() => setStage(6), 8500),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className={`${cormorant.className} min-h-screen text-[#f5f5f5] lowercase tracking-wide`}>
      {/* Video Background - using stock nature video as placeholder */}
      <div className="fixed inset-0 -z-20 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/45 -z-10" />

      {/* Main Content */}
      <main className="min-h-screen flex flex-col justify-center items-center px-6 py-16 pb-28 text-center">
        {/* Logo - always visible with fade in */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-normal mb-10 tracking-[0.08em] transition-opacity duration-1000 ease-out"
          style={{ opacity: 1 }}
        >
          noticed
        </h1>

        <div className="max-w-xl text-lg md:text-xl leading-relaxed font-normal">
          {/* Stanza 1 */}
          <p 
            className="mb-8 transition-all duration-1000 ease-out"
            style={{ 
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            artists have agents.
            <br />
            athletes have agents.
            <br />
            builders have linkedin and cold dms.
          </p>

          {/* Stanza 2 */}
          <p 
            className="mb-8 transition-all duration-1000 ease-out"
            style={{ 
              opacity: stage >= 2 ? 1 : 0,
              transform: stage >= 2 ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            noticed changes that.
          </p>

          {/* Stanza 3 */}
          <p 
            className="mb-8 transition-all duration-1000 ease-out"
            style={{ 
              opacity: stage >= 3 ? 1 : 0,
              transform: stage >= 3 ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            meet your personal networking agent.
            <br />
            learns what your goals are.
            <br />
            finds the best opportunities.
            <br />
            and advocates for you —<br />
            so you never have to.
          </p>

          {/* Stanza 4 - Tagline */}
          <p 
            className="italic mb-10 transition-all duration-1000 ease-out"
            style={{ 
              opacity: stage >= 4 ? 1 : 0,
              transform: stage >= 4 ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            focus on building.
            <br />
            let noticed handle the networking.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-block px-8 py-3.5 text-base lowercase tracking-wider text-white no-underline rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-500 hover:bg-white/20 hover:border-white/35 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.25)]"
          style={{ 
            opacity: stage >= 5 ? 1 : 0,
            transform: stage >= 5 ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          get early access
        </a>
      </main>

      {/* Footer */}
      <footer 
        className="fixed bottom-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-5 text-sm gap-4 md:gap-0 transition-opacity duration-1000 ease-out"
        style={{ opacity: stage >= 6 ? 1 : 0 }}
      >
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 order-1">
          <a href="#" className="text-[#f5f5f5] no-underline transition-opacity duration-200 hover:opacity-70">
            instagram
          </a>
          <a href="#" className="text-[#f5f5f5] no-underline transition-opacity duration-200 hover:opacity-70">
            tiktok
          </a>
          <a href="#" className="text-[#f5f5f5] no-underline transition-opacity duration-200 hover:opacity-70">
            contact
          </a>
          <a href="#" className="text-[#f5f5f5] no-underline transition-opacity duration-200 hover:opacity-70">
            faq
          </a>
        </nav>
        <div className="flex gap-6 items-center order-2">
          <a href="#" className="text-[#f5f5f5] no-underline transition-opacity duration-200 hover:opacity-70">
            careers
          </a>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  )
}
