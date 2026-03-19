"use client"

import { NoticedLanding } from "@/components/landing"

export default function Version4Page() {
  return (
    <NoticedLanding
      content={[
        {
          type: "stanza",
          text: "how to get noticed?"
        },
        {
          type: "stanza",
          text: "you let the work speak for itself\nbut the market rarely listens"
        },
        {
          type: "stanza",
          text: "you shouldn't have to shout to be seen"
        },
        {
          type: "stanza",
          text: "noticed is a personal agent\nthat turns your best work into warm intros"
        },
        {
          type: "stanza",
          text: "stop networking\nstart getting noticed"
        }
      ]}
      ctaText="get early access"
      videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15370704_1280_720_30fps-wGmLxOmDmHKtTJjIbGgiAc7v2snSIK.mp4"
      currentVersion={4}
    />
  )
}
