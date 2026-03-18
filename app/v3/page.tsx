"use client"

import { NoticedLanding } from "@/components/noticed-landing"

export default function Version3Page() {
  return (
    <NoticedLanding
      content={[
        {
          type: "stanza",
          text: "artists have agents. actors have agents.\neven houses have agents to promote them."
        },
        {
          type: "stanza",
          text: "you deserve one too."
        },
        {
          type: "stanza",
          text: "meet noticed.\nyour personal networking agent."
        },
        {
          type: "stanza",
          text: "learns what your goals are,\nfinds the best opportunities,\nand advocates for you —\nso you don't have to."
        },
        {
          type: "stanza",
          text: "you focus on building.\nnoticed handles the networking."
        }
      ]}
      ctaText="get early access"
      videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15370587_1280_720_30fps-l3xEyED5JpUHDeNy3R0inufLJzvmmv.mp4"
      currentVersion={3}
    />
  )
}
