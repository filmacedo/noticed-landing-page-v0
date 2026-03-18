"use client"

import { NoticedLanding } from "@/components/landing"

export default function Version1Page() {
  return (
    <NoticedLanding
      content={[
        {
          type: "stanza",
          text: "you build more than you talk."
        },
        {
          type: "stanza",
          text: "you're too focused to network\ntoo proud to beg for attention\ntoo good to go unnoticed."
        },
        {
          type: "stanza",
          text: "so we built a personal agent\nthat works as hard as you do."
        },
        {
          type: "stanza",
          text: "noticed\nfinds the right people\nand makes warm intros\nwhile you stay in the zone."
        }
      ]}
      ctaText="get early access"
      videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15370643_1280_720_30fps-VuqMj6LtVWVtmBUVChkUOMSW6xLR02.mp4"
      currentVersion={1}
    />
  )
}
