"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

// Shared landing page component with reveal animations

interface ContentBlock {
  type: "title" | "stanza" | "tagline" | "brand-inline"
  text: string
  italic?: boolean
}

interface NoticedLandingProps {
  manifestoTitle: string
  content: ContentBlock[]
  ctaText: string
  videoUrl: string
  currentVersion: 1 | 2 | 3
  showRevealFooter?: boolean
  logoMoveAnimation?: boolean // Logo starts centered then moves to top
}

export function NoticedLanding({ 
  manifestoTitle, 
  content, 
  ctaText, 
  videoUrl, 
  currentVersion,
  showRevealFooter = true,
  logoMoveAnimation = false
}: NoticedLandingProps) {
  const [phase, setPhase] = useState<"brand" | "transition" | "content">("brand")
  const [revealStep, setRevealStep] = useState(0)

  useEffect(() => {
    const transitionTimer = setTimeout(() => setPhase("transition"), 2000)
    const contentTimer = setTimeout(() => setPhase("content"), 2500)

    return () => {
      clearTimeout(transitionTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  useEffect(() => {
    if (phase !== "content") return

    const hasTitle = manifestoTitle !== ""
    const totalSteps = content.length + (hasTitle ? 1 : 0) + 1 // +1 for title if exists, +1 for CTA
    const intervals: NodeJS.Timeout[] = []
    for (let i = 1; i <= totalSteps; i++) {
      intervals.push(setTimeout(() => setRevealStep(i), i * 150))
    }

    return () => intervals.forEach(clearTimeout)
  }, [phase, content.length, manifestoTitle])

  const getRevealStyle = (step: number) => ({
    opacity: revealStep >= step ? 1 : 0,
    transform: revealStep >= step ? "translateY(0)" : "translateY(12px)",
    transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
  })

  const hasTitle = manifestoTitle !== ""

  const renderContent = (block: ContentBlock, index: number) => {
    const step = index + (hasTitle ? 2 : 1) // Adjust step based on whether title exists

    if (block.type === "brand-inline") {
      return (
        <p 
          key={index} 
          className="mb-8 text-2xl md:text-3xl font-normal tracking-[0.08em]"
          style={getRevealStyle(step)}
        >
          {block.text}
        </p>
      )
    }

    return (
      <p
        key={index}
        className={`mb-8 ${block.italic ? "italic" : ""}`}
        style={getRevealStyle(step)}
        dangerouslySetInnerHTML={{ __html: block.text.replace(/\n/g, "<br />") }}
      />
    )
  }

  return (
    <div className="text-[#f5f5f5] lowercase tracking-wide">
      {/* Video Background - fixed so it shows behind reveal footer */}
      <div className="fixed inset-0 -z-20 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay - also fixed */}
      <div className="fixed inset-0 bg-black/45 -z-10" />

      {/* Phase 1: Centered Brand - always "noticed" */}
      {/* For logoMoveAnimation: logo stays visible and moves to top position */}
      {logoMoveAnimation ? (
        <div 
          className="fixed left-0 right-0 flex justify-center z-10 transition-all duration-700 ease-out"
          style={{ 
            top: phase === "brand" ? "50%" : "0",
            transform: phase === "brand" ? "translateY(-50%)" : "translateY(0)",
            paddingTop: phase === "brand" ? "0" : "40vh"
          }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.08em]">
            noticed
          </h1>
        </div>
      ) : (
        phase !== "content" && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-10 transition-opacity duration-500 ease-out"
            style={{ opacity: phase === "brand" ? 1 : 0 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.08em]">
              noticed
            </h1>
          </div>
        )
      )}

      {/* Hero Section - exactly 100vh */}
      <main 
        className="h-screen flex flex-col justify-center items-center px-6 text-center relative"
        style={{ 
          opacity: phase === "content" ? 1 : 0,
          transition: "opacity 0.3s ease-out",
          pointerEvents: phase === "content" ? "auto" : "none"
        }}
      >
        {/* Title - only render if exists and not using logoMoveAnimation */}
        {/* For logoMoveAnimation, the title is rendered by the fixed positioned element above */}
        {hasTitle && !logoMoveAnimation && (
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-10 tracking-[0.08em]"
            style={getRevealStyle(1)}
          >
            {manifestoTitle}
          </h1>
        )}
        
        {/* Spacer for logoMoveAnimation to push content down */}
        {logoMoveAnimation && (
          <div className="h-16 md:h-20" />
        )}

        <div className="max-w-xl text-lg md:text-xl leading-relaxed font-normal">
          {content.map((block, index) => renderContent(block, index))}
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-block px-8 py-3.5 text-base lowercase tracking-wider text-white no-underline rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-white/20 hover:border-white/35 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.25)]"
          style={getRevealStyle(content.length + (hasTitle ? 2 : 1))}
        >
          {ctaText}
        </a>
      </main>

      {/* Reveal Footer - sits below hero in normal document flow */}
      {showRevealFooter && (
      <footer className="relative h-20 flex items-end">
        {/* Gradient overlay - transparent at top to near-black at bottom */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.95) 100%)"
          }}
        />
        
        {/* Footer content */}
        <div className="relative z-10 w-full flex justify-between items-center px-6 md:px-8 py-5 text-sm">
          <div className="flex gap-6">
            <Link 
              href="/" 
              className={`no-underline transition-opacity duration-200 ${currentVersion === 1 ? "text-white" : "text-white/50 hover:text-white/80"}`}
            >
              version one
            </Link>
            <Link 
              href="/v2" 
              className={`no-underline transition-opacity duration-200 ${currentVersion === 2 ? "text-white" : "text-white/50 hover:text-white/80"}`}
            >
              version two
            </Link>
            <Link 
              href="/v3" 
              className={`no-underline transition-opacity duration-200 ${currentVersion === 3 ? "text-white" : "text-white/50 hover:text-white/80"}`}
            >
              version three
            </Link>
          </div>
          <Link 
            href="/faq" 
            className="no-underline text-white/50 hover:text-white/80 transition-opacity duration-200"
          >
            faq
          </Link>
        </div>
      </footer>
      )}
    </div>
  )
}
