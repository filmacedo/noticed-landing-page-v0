"use client"

import { NoticedLanding } from "@/components/noticed-landing"

export default function Version2Page() {
  return (
    <NoticedLanding
      manifestoTitle="we hate networking."
      content={[
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
          text: "an agent that understands what you're looking for\nfinds the right people and makes the warm intro\nwhile we do the work we actually care about"
        },
        {
          type: "tagline",
          text: "noticed.\na personal agent that networks while you build.",
          italic: false
        }
      ]}
      ctaText="join the waitlist"
      videoUrl="https://videos.pexels.com/video-files/36244255/36244255-uhd_2560_1440_30fps.mp4"
      currentVersion={2}
      logoAlwaysVisible={false}
    />
  )
}
