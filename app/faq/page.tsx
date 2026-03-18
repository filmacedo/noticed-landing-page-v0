"use client"

import { useState } from "react"
import Link from "next/link"

const faqs = [
  {
    question: "what is noticed?",
    answer: "a personal networking agent for builders. you tell it what you're looking for — investors, clients, hires — and it works your network quietly to make the right connections happen."
  },
  {
    question: "who is it for?",
    answer: "builders. founders, operators, engineers — anyone who'd rather be heads-down creating than working a room. if you've ever thought \"i should be networking more but i'd rather not,\" this is for you."
  },
  {
    question: "how does it work?",
    answer: "you get your own agent. it learns what you're looking for, maps the opportunities already hiding in your network, and surfaces the right people at the right time. no cold outreach. no performative posting. just the connections that matter."
  },
  {
    question: "why is it different?",
    answer: "noticed isn't just a chatbot. it's an agent that represents you, not just an assistant. it doesn't wait for you to ask. it goes out, finds the right people, and opens doors on your behalf."
  },
  {
    question: "when does it launch?",
    answer: "we're onboarding the first cohort soon. join the waitlist and you'll be the first to know."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0ede8] lowercase flex flex-col items-center">

      {/* Back Button - liquid glass */}
      <div className="w-full max-w-xl px-6 md:px-0 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-[15px] font-semibold normal-case no-underline rounded-full bg-[#f0ede8]/10 backdrop-blur-lg border border-[#f0ede8]/20 text-[#f0ede8] shadow-[0_4px_24px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(240,237,232,0.2)] transition-colors duration-300 hover:bg-[#f0ede8]/15 hover:border-[#f0ede8]/30"
          style={{ fontFamily: "var(--font-body-functional)" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          back
        </Link>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-xl px-6 md:px-0 pt-10 pb-28" style={{ fontFamily: "var(--font-body-editorial)" }}>

        {/* Title - single line, selective italic */}
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-normal mb-12 leading-tight tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          frequently asked <span className="italic">questions</span>
        </h1>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left bg-transparent border-none cursor-pointer p-0 text-[#f0ede8] lowercase"
              >
                <span className="text-lg font-medium" style={{ fontFamily: "var(--font-body-editorial)" }}>
                  {faq.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base text-[#8a8580] leading-relaxed normal-case">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-20">
        <div className="flex justify-between items-center px-6 md:px-8 py-5 text-sm font-medium" style={{ fontFamily: "var(--font-body-functional)" }}>
          <div className="flex gap-6">
            {([1, 2, 3] as const).map((v) => (
              <Link
                key={v}
                href={v === 1 ? "/" : `/v${v}`}
                className="no-underline text-[#8a8580] hover:text-[#f0ede8] transition-opacity duration-200"
              >
                {`v${v}`}
              </Link>
            ))}
          </div>
          <div className="flex gap-6">
            <Link href="/fonts" className="no-underline text-[#8a8580] hover:text-[#f0ede8] transition-opacity duration-200">
              fonts
            </Link>
            <Link href="/faq" className="no-underline text-[#f0ede8]">
              faq
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
