"use client"

import { NoticedLanding } from "@/components/landing"

export default function Version1Page() {
  return (
    <NoticedLanding
      content={[
        {
          type: "stanza",
          text: "the loudest people in the room\nare rarely the most talented."
        },
        {
          type: "stanza",
          text: "they're just comfortable performing."
        },
        {
          type: "stanza",
          text: "the best founders, engineers, designers —\nthey're heads-down building."
        },
        {
          type: "stanza",
          text: "too busy to post.\ntoo proud to beg for intros.\ntoo good to go unnoticed."
        }
      ]}
      ctaText="get noticed first"
      videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15370643_1280_720_30fps-VuqMj6LtVWVtmBUVChkUOMSW6xLR02.mp4"
      currentVersion={1}
    />
  )
}
