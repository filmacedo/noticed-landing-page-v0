"use client"

// noticed landing page - two phase animation
import { Cormorant_Garamond } from "next/font/google"
import { useEffect, useState } from "react"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
})

export default function NoticedLandingPage() {
  // Phase 1: Brand centered on screen
  // Phase 2: Brand fades out, then full content appears with brand at top
  const [phase, setPhase] = useState<"brand" | "transition" | "content">("brand")

  useEffect(() => {
    // Show brand centered for 2 seconds
    const transitionTimer = setTimeout(() => setPhase("transition"), 2000)
    // After fade out (0.5s), show full content
    const contentTimer = setTimeout(() => setPhase("content"), 2500)

    return () => {
      clearTimeout(transitionTimer)
      clearTimeout(contentTimer)
    }
  }, [])

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

      {/* Phase 2: Full Content */}
      <main 
        className="min-h-screen flex flex-col justify-center items-center px-6 py-16 pb-28 text-center transition-opacity duration-700 ease-out"
        style={{ 
          opacity: phase === "content" ? 1 : 0,
          pointerEvents: phase === "content" ? "auto" : "none"
        }}
      >
        {/* Logo at top of content */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-10 tracking-[0.08em]">
          noticed
        </h1>

        <div className="max-w-xl text-lg md:text-xl leading-relaxed font-normal">
          {/* Stanza 1 */}
          <p className="mb-8">
            artists have agents.
            <br />
            athletes have agents.
            <br />
            builders have linkedin and cold dms.
          </p>

          {/* Stanza 2 */}
          <p className="mb-8">
            noticed changes that.
          </p>

          {/* Stanza 3 */}
          <p className="mb-8">
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
          <p className="italic mb-10">
            focus on building.
            <br />
            let noticed handle the networking.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-block px-8 py-3.5 text-base lowercase tracking-wider text-white no-underline rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-white/20 hover:border-white/35 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.25)]"
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
