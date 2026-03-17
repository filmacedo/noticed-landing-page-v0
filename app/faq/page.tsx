"use client"

import { useState } from "react"
import Link from "next/link"

const faqs = [
  {
    question: "what is noticed?",
    answer: "A personal networking agent for builders. You tell it what you're looking for — investors, clients, hires — and it works your network quietly to make the right connections happen."
  },
  {
    question: "who is it for?",
    answer: "Builders. Founders, operators, engineers — anyone who'd rather be heads-down creating than working a room. If you've ever thought \"I should be networking more but I'd rather not,\" this is for you."
  },
  {
    question: "how does it work?",
    answer: "You get your own agent. It learns what you're looking for, maps the opportunities already hiding in your network, and surfaces the right people at the right time. No cold outreach. No performative posting. Just the connections that matter."
  },
  {
    question: "why is it different?",
    answer: "noticed isn't just a chatbot. It's an agent that represents you, not just an assistant. It doesn't wait for you to ask. It goes out, finds the right people, and opens doors on your behalf."
  },
  {
    question: "when does it launch?",
    answer: "We're onboarding the first cohort soon. Join the waitlist and you'll be the first to know."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5] lowercase tracking-wide">
      {/* Back Button */}
      <div className="px-6 md:px-8 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-white no-underline rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-white/20 hover:border-white/35"
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
      <main className="px-6 md:px-8 pt-8 pb-28 max-w-2xl">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-12 leading-tight">
          frequently<br />
          asked <span className="italic">questions</span>
        </h1>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 pb-6">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left bg-transparent border-none cursor-pointer p-0 text-[#f5f5f5] lowercase tracking-wide"
              >
                <span className="text-lg font-medium">{faq.question}</span>
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
                <p className="text-base text-white/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center px-6 md:px-8 py-5 text-sm bg-black">
        <div className="flex gap-6">
          <Link 
            href="/" 
            className="no-underline text-white/50 hover:text-white/80 transition-opacity duration-200"
          >
            version one
          </Link>
          <Link 
            href="/v2" 
            className="no-underline text-white/50 hover:text-white/80 transition-opacity duration-200"
          >
            version two
          </Link>
          <Link 
            href="/v3" 
            className="no-underline text-white/50 hover:text-white/80 transition-opacity duration-200"
          >
            version three
          </Link>
        </div>
        <Link 
          href="/faq" 
          className="no-underline text-white transition-opacity duration-200"
        >
          faq
        </Link>
      </footer>
    </div>
  )
}
