"use client"

import { useEffect, useRef, useState } from "react"
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
  logoAlwaysVisible: boolean
}

export function NoticedLanding({ 
  manifestoTitle, 
  content, 
  ctaText, 
  videoUrl, 
  currentVersion,
  logoAlwaysVisible
}: NoticedLandingProps) {
  const [phase, setPhase] = useState<"brand" | "transition" | "content">("brand")
  const [revealStep, setRevealStep] = useState(0)
  const contentLength = content.length
  const hasManifestoTitle = manifestoTitle !== ""
  // Stable ref so effects never need logoAlwaysVisible in dep array
  const logoRef = useRef(logoAlwaysVisible)

  // Phase transitions
  useEffect(() => {
    if (logoRef.current) {
      // v1: skip splash, go straight to content after short delay
      const t = setTimeout(() => setPhase("content"), 100)
      return () => clearTimeout(t)
    }
    // v2, v3: show centered brand, then fade to content
    const t1 = setTimeout(() => setPhase("transition"), 2000)
    const t2 = setTimeout(() => setPhase("content"), 2500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, []) // intentionally empty — logoRef.current is stable

  // Content reveal stagger
  useEffect(() => {
    if (phase !== "content") return
    const hasTitle = hasManifestoTitle && !logoRef.current
    const totalSteps = contentLength + (hasTitle ? 1 : 0) + 1
    const startDelay = logoRef.current ? 400 : 0
    const t = setTimeout(() => {
      const timers: NodeJS.Timeout[] = []
      for (let i = 1; i <= totalSteps; i++) {
        timers.push(setTimeout(() => setRevealStep(i), i * 150))
      }
    }, startDelay)
    return () => clearTimeout(t)
  }, [phase, contentLength, hasManifestoTitle])

  const getRevealStyle = (step: number) => ({
    opacity: revealStep >= step ? 1 : 0,
    transform: revealStep >= step ? "translateY(0)" : "translateY(12px)",
    transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
  })

  const renderContent = (block: ContentBlock, index: number) => {
    const step = logoRef.current
      ? index + 1
      : index + (hasManifestoTitle ? 2 : 1)

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

  const isVisible = logoAlwaysVisible || phase === "content"

  return (
    <div className="min-h-screen text-[#f5f5f5] lowercase tracking-wide">

      {/* Video Background */}
      <div className="fixed inset-0 -z-20 bg-black">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/45 -z-10" />

      {/* Top gradient - all versions */}
      <div className="fixed top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />

      {/* Bottom gradient - all versions */}
      <div className="fixed bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none" />

      {/* v1: Logo as page header, always visible above content */}
      {logoAlwaysVisible && (
        <header className="fixed top-0 left-0 right-0 flex justify-center items-center pt-10 md:pt-14 z-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-[0.08em]">
            noticed
          </h1>
        </header>
      )}

      {/* v2, v3: Centered brand splash */}
      {!logoAlwaysVisible && phase !== "content" && (
        <div
          className="fixed inset-0 flex items-center justify-center z-20 transition-opacity duration-500 ease-out"
          style={{ opacity: phase === "brand" ? 1 : 0, pointerEvents: "none" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.08em]">
            noticed
          </h1>
        </div>
      )}

      {/* Main content - vertically centered in full viewport */}
      <main
        className="h-screen flex flex-col justify-center items-center px-6 text-center z-20 relative"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease-out",
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        {/* Title for v2/v3 */}
        {hasManifestoTitle && !logoAlwaysVisible && (
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-10 tracking-[0.08em]"
            style={getRevealStyle(1)}
          >
            {manifestoTitle}
          </h1>
        )}

        {/* Manifesto stanzas */}
        <div className="max-w-xl text-lg md:text-xl leading-relaxed font-normal">
          {content.map((block, index) => renderContent(block, index))}
        </div>

        {/* CTA — visually separated from manifesto, subtle hover only */}
        <a
          href="#"
          className="inline-block mt-12 px-8 py-3.5 text-base lowercase tracking-wider text-white no-underline rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] transition-colors duration-300 hover:bg-white/18 hover:border-white/30"
          style={getRevealStyle(contentLength + (logoAlwaysVisible ? 1 : (hasManifestoTitle ? 2 : 1)))}
        >
          {ctaText}
        </a>
      </main>

      {/* Footer links */}
      <footer className="fixed bottom-0 left-0 right-0 z-20">
        <div className="flex justify-between items-center px-6 md:px-8 py-5 text-sm">
          <div className="flex gap-6">
            {([1, 2, 3] as const).map((v) => (
              <Link
                key={v}
                href={v === 1 ? "/" : `/v${v}`}
                className={`no-underline transition-opacity duration-200 ${
                  currentVersion === v ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {`version ${["one", "two", "three"][v - 1]}`}
              </Link>
            ))}
          </div>
          <Link href="/faq" className="no-underline text-white/50 hover:text-white/80 transition-opacity duration-200">
            faq
          </Link>
        </div>
      </footer>
    </div>
  )
}
