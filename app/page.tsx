"use client"

import { Cormorant_Garamond } from "next/font/google"
import { useEffect, useState } from "react"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
})

export default function NoticedLandingPage() {
  const [phase, setPhase] = useState<"brand" | "transition" | "content">("brand")
  const [revealStep, setRevealStep] = useState(0)

  useEffect(() => {
    // Phase 1: Show brand centered for 2 seconds
    const transitionTimer = setTimeout(() => setPhase("transition"), 2000)
    // Phase 2: After fade out (0.5s), show content
    const contentTimer = setTimeout(() => setPhase("content"), 2500)

    return () => {
      clearTimeout(transitionTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  // Staggered reveal for content - triggers when phase becomes "content"
  useEffect(() => {
    if (phase !== "content") return

    // Reveal each block with 150ms stagger (total ~1.2s for 8 steps)
    const intervals: NodeJS.Timeout[] = []
    for (let i = 1; i <= 8; i++) {
      intervals.push(setTimeout(() => setRevealStep(i), i * 150))
    }

    return () => intervals.forEach(clearTimeout)
  }, [phase])

  const getRevealStyle = (step: number) => ({
    opacity: revealStep >= step ? 1 : 0,
    transform: revealStep >= step ? "translateY(0)" : "translateY(12px)",
    transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
  })

  return (
    <div className={`${cormorant.className} min-h-screen text-[#f5f5f5] lowercase tracking-wide`}>
      {/* Video Background */}
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

      {/* Phase 1: Centered Brand */}
      {phase !== "content" && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-10 transition-opacity duration-500 ease-out"
          style={{ opacity: phase === "brand" ? 1 : 0 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.08em]">
            noticed
          </h1>
        </div>
      )}

      {/* Phase 2: Full Content with staggered reveal */}
      <main 
        className="min-h-screen flex flex-col justify-center items-center px-6 py-16 pb-28 text-center"
        style={{ 
          opacity: phase === "content" ? 1 : 0,
          transition: "opacity 0.3s ease-out",
          pointerEvents: phase === "content" ? "auto" : "none"
        }}
      >
        {/* Step 1: Logo */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-normal mb-10 tracking-[0.08em]"
          style={getRevealStyle(1)}
        >
          noticed
        </h1>

        <div className="max-w-xl text-lg md:text-xl leading-relaxed font-normal">
          {/* Step 2: Stanza 1 */}
          <p className="mb-8" style={getRevealStyle(2)}>
            artists have agents.
            <br />
            athletes have agents.
            <br />
            builders have linkedin and cold dms.
          </p>

          {/* Step 3: Stanza 2 */}
          <p className="mb-8" style={getRevealStyle(3)}>
            noticed changes that.
          </p>

          {/* Step 4: Stanza 3 */}
          <p className="mb-8" style={getRevealStyle(4)}>
            meet your personal networking agent.
            <br />
            learns what your goals are.
            <br />
            finds the best opportunities.
            <br />
            and advocates for you —<br />
            so you never have to.
          </p>

          {/* Step 5: Tagline */}
          <p className="italic mb-10" style={getRevealStyle(5)}>
            focus on building.
            <br />
            let noticed handle the networking.
          </p>
        </div>

        {/* Step 6: CTA Button */}
        <a
          href="#"
          className="inline-block px-8 py-3.5 text-base lowercase tracking-wider text-white no-underline rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-white/20 hover:border-white/35 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.25)]"
          style={getRevealStyle(6)}
        >
          get early access
        </a>
      </main>

      {/* Footer - always visible */}
      <footer className="fixed bottom-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-5 text-sm gap-4 md:gap-0">
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
