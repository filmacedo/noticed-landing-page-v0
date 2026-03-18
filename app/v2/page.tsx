"use client"

import { NoticedLanding } from "@/components/landing"

export default function Version2Page() {
  return (
    <NoticedLanding
      content={[
        {
          type: "stanza",
          text: "we hate networking."
        },
        {
          type: "stanza",
          text: "the name tags.\nthe cringe posts.\nthe cold dms."
        },
        {
          type: "stanza",
          text: "so we stopped trying to network\nand built a better way to get noticed."
        },
        {
          type: "stanza",
          text: "an agent that understands what you're looking for\nfinds the right people and makes the warm intro\nwhile you do the work you actually care about"
        },
        {
          type: "stanza",
          text: "noticed.\na personal agent\nthat networks while you build."
        }
      ]}
      ctaText="join the waitlist"
      videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15370695_1280_720_30fps-f20PN4aSwtYX8A5R72bj2EBkmMA4JF.mp4"
      currentVersion={2}
    />
  )
}
