"use client"

import { NoticedLanding } from "@/components/landing"

export default function Version2Page() {
  return (
    <NoticedLanding
      content={[
        {
          type: "stanza",
          text: "networking was designed for extroverts.\nthe happy hours. the cold emails. the cringe posts."
        },
        {
          type: "stanza",
          text: "what if there was a better way to get noticed?"
        },
        {
          type: "stanza",
          text: "imagine a personal agent that networks for you.\nno events. no apps. no feeds."
        },
        {
          type: "stanza",
          text: "it learns what you're building,\nquietly watches your network,\nand makes the perfect intros."
        },
        {
          type: "stanza",
          text: "it's called noticed,\nyour personal networking agent."
        }
      ]}
      ctaText="get early access"
      videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15370695_1280_720_30fps-f20PN4aSwtYX8A5R72bj2EBkmMA4JF.mp4"
      currentVersion={2}
    />
  )
}
