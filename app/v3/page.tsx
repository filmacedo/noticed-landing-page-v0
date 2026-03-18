"use client"

import { NoticedLanding } from "@/components/noticed-landing"

export default function Version3Page() {
  return (
    <NoticedLanding
      manifestoTitle=""
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
          text: "noticed.\nyour personal networking agent."
        },
        {
          type: "stanza",
          text: "learns what your goals are,\nfinds the best opportunities,\nand advocates for you —\nso you don't have to."
        },
        {
          type: "tagline",
          text: "you focus on building.\nnoticed handles the networking.",
          italic: false
        }
      ]}
      ctaText="get early access"
      videoUrl="https://videos.pexels.com/video-files/36244308/36244308-uhd_2560_1440_30fps.mp4"
      currentVersion={3}
      logoAlwaysVisible={false}
    />
  )
}
