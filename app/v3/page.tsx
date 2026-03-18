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
          text: "builders deserve one too."
        },
        {
          type: "brand-inline",
          text: "noticed"
        },
        {
          type: "stanza",
          text: "your personal networking agent."
        },
        {
          type: "stanza",
          text: "learns what your goals are. finds the best opportunities.\nand advocates for you — so you never have to."
        },
        {
          type: "tagline",
          text: "you focus on building.\nnoticed handles the networking.",
          italic: true
        }
      ]}
      ctaText="get early access"
      videoUrl="https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4"
      currentVersion={3}
      logoAlwaysVisible={false}
    />
  )
}
