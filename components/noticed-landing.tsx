"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

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
  logoAlwaysVisible?: boolean
}

export function NoticedLanding({ 
  manifestoTitle, 
  content, 
  ctaText, 
  videoUrl, 
  currentVersion,
  logoAlwaysVisible = false
}: NoticedLandingProps) {
  const [phase, setPhase] = useState<"brand" | "transition" | "content">("brand")
  const [revealStep, setRevealStep] = useState(0)

  useEffect(() => {
    if (logoAlwaysVisible) {
      const contentTimer = setTimeout(() => setPhase("content"), 500)
      return () => clearTimeout(contentTimer)
    }
    
    const transitionTimer = setTimeout(() => setPhase("transition"), 2000)
    const contentTimer = setTimeout(() => setPhase("content"), 2500)

    return () => {
      clearTimeout(transitionTimer)
      clearTimeout(contentTimer)
    }
  }, [logoAlwaysVisible])

  useEffect(() => {
    if (phase !== "content") return

    const hasTitle = manifestoTitle !== "" && !logoAlwaysVisible
    const totalSteps = content.length + (hasTitle ? 1 : 0) + 1
    const intervals: NodeJS.Timeout[] = []
    for (let i = 1; i <= totalSteps; i++) {
      intervals.push(setTimeout(() => setRevealStep(i), i * 150))
    }

    return () => intervals.forEach(clearTimeout)
  }, [phase, content.length, manifestoTitle, logoAlwaysVisible])

  const getRevealStyle = (step: number) => ({
    opacity: revealStep >= step ? 1 : 0,
    transform: revealStep >= step ? "translateY(0)" : "translateY(12px)",
    transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
  })

  const hasTitle = manifestoTitle !== ""

  const renderContent = (block: ContentBlock, index: number) => {
    const step = logoAlwaysVisible ? index + 1 : index + (hasTitle ? 2 : 1)

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
    <div className="min-h-screen text-[#f5f5f5] lowercase tracking-wide">
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

      <div className="fixed inset-0 bg-black/45 -z-10" />

      {!logoAlwaysVisible && phase !== "content" && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-10 transition-opacity duration-500 ease-out"
          style={{ opacity: phase === "brand" ? 1 : 0 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.08em]">
            noticed
          </h1>
        </div>
      )}

      <main 
        className="min-h-screen flex flex-col justify-center items-center px-6 pb-20 text-center relative"
        style={{ 
          opacity: logoAlwaysVisible ? 1 : (phase === "content" ? 1 : 0),
          transition: "opacity 0.3s ease-out",
          pointerEvents: phase === "content" || logoAlwaysVisible ? "auto" : "none"
        }}
      >
        {hasTitle && (
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-10 tracking-[0.08em]"
            style={logoAlwaysVisible ? { opacity: 1 } : getRevealStyle(1)}
          >
            {manifestoTitle}
          </h1>
        )}

        <div className="max-w-xl text-lg md:text-xl leading-relaxed font-normal">
          {content.map((block, index) => renderContent(block, index))}
        </div>

        <a
          href="#"
          className="inline-block px-8 py-3.5 text-base lowercase tracking-wider text-white no-underline rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-white/20 hover:border-white/35 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.25)]"
          style={getRevealStyle(content.length + (logoAlwaysVisible ? 1 : (hasTitle ? 2 : 1)))}
        >
          {ctaText}
        </a>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center px-6 md:px-8 py-5 text-sm">
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
      </footer>
    </div>
  )
}
