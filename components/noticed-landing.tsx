"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface ContentBlock {
  type: "stanza" | "tagline"
  text: string
  italic?: boolean
}

interface NoticedLandingProps {
  content: ContentBlock[]
  ctaText: string
  videoUrl: string
  currentVersion: 1 | 2 | 3
}

export function NoticedLanding({ 
  content, 
  ctaText, 
  videoUrl, 
  currentVersion
}: NoticedLandingProps) {
  const [phase, setPhase] = useState<"brand" | "transition" | "content">("brand")
  const [revealStep, setRevealStep] = useState(0)
  const contentLength = content.length

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("transition"), 2000)
    const t2 = setTimeout(() => setPhase("content"), 2500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    if (phase !== "content") return
    const totalSteps = contentLength + 1
    for (let i = 1; i <= totalSteps; i++) {
      setTimeout(() => setRevealStep(i), i * 150)
    }
  }, [phase, contentLength])

  const getRevealStyle = (step: number) => ({
    opacity: revealStep >= step ? 1 : 0,
    transform: revealStep >= step ? "translateY(0)" : "translateY(12px)",
    transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
  })

  return (
    <div className="h-[100dvh] overflow-hidden text-[#f0ede8] lowercase" style={{ fontFamily: "var(--font-body-editorial)" }}>
      <div className="fixed inset-0 -z-20 bg-[#0a0a0a]">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      <div className="fixed inset-0 bg-[#0a0a0a]/45 -z-10" />

      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a]/80 to-transparent z-[5] pointer-events-none" />

      <header className="fixed top-0 left-0 right-0 z-30">
        <div className="flex justify-between items-center px-6 md:px-8 py-5">
          <Link 
            href="/" 
            className="no-underline text-[#a09a94] hover:text-[#f0ede8] transition-opacity duration-200 text-lg tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            noticed
          </Link>
          <a 
            href="https://x.com/noticedso" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="no-underline text-[#a09a94] hover:text-[#f0ede8] transition-opacity duration-200 text-sm font-medium"
            style={{ fontFamily: "var(--font-body-functional)" }}
          >
            follow
          </a>
        </div>
      </header>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent z-10 pointer-events-none" />

      {phase !== "content" && (
        <div
          className="fixed inset-0 flex items-center justify-center z-20 transition-opacity duration-500 ease-out"
          style={{ opacity: phase === "brand" ? 1 : 0, pointerEvents: "none" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.04em]" style={{ fontFamily: "var(--font-display)" }}>
            noticed
          </h1>
        </div>
      )}

      <main
        className="h-[100dvh] flex flex-col justify-center items-center px-6 text-center z-20 relative"
        style={{
          opacity: phase === "content" ? 1 : 0,
          transition: "opacity 0.3s ease-out",
          pointerEvents: phase === "content" ? "auto" : "none",
        }}
      >
        <div className="max-w-xl text-[16px] md:text-[20px] leading-[1.25] space-y-6" style={{ fontFamily: "var(--font-body-editorial)" }}>
          {content.map((block, index) => (
            <p
              key={index}
              className={block.italic ? "italic" : ""}
              style={getRevealStyle(index + 1)}
              dangerouslySetInnerHTML={{ __html: block.text.replace(/\n/g, "<br />") }}
            />
          ))}
        </div>

        <a
          href="#"
          className="inline-block mt-12 px-8 py-3 text-[16px] font-semibold normal-case tracking-normal no-underline rounded-full bg-[#f0ede8]/10 backdrop-blur-lg border border-[#f0ede8]/20 text-[#f0ede8] shadow-[0_4px_24px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(240,237,232,0.2)] transition-colors duration-300 hover:bg-[#f0ede8]/15 hover:border-[#f0ede8]/30"
          style={{ ...getRevealStyle(contentLength + 1), fontFamily: "var(--font-body-functional)" }}
        >
          {ctaText}
        </a>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-20">
        <div className="flex justify-between items-center px-6 md:px-8 py-5 text-sm font-medium" style={{ fontFamily: "var(--font-body-functional)" }}>
          <div className="flex gap-6">
            {([1, 2, 3] as const).map((v) => (
              <Link
                key={v}
                href={v === 1 ? "/" : `/v${v}`}
                className={`no-underline transition-opacity duration-200 ${
                  currentVersion === v ? "text-[#f0ede8]" : "text-[#a09a94] hover:text-[#f0ede8]"
                }`}
              >
                {`v${v}`}
              </Link>
            ))}
          </div>
          <div className="flex gap-6">
            <Link href="/brand" className="no-underline text-[#a09a94] hover:text-[#f0ede8] transition-opacity duration-200">
              brand
            </Link>
            <Link href="/faq" className="no-underline text-[#a09a94] hover:text-[#f0ede8] transition-opacity duration-200">
              faq
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
