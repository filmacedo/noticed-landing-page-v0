import { NoticedLanding } from "@/components/noticed-landing"

// Version 2: We hate networking
export default function Version2Page() {
  return (
    <NoticedLanding
      manifestoTitle="we hate networking."
      content={[
        {
          type: "stanza",
          text: "the awkward mixers. the name tags. the small talk.\nthe cold dms. the cringe posts. the personal brands."
        },
        {
          type: "stanza",
          text: "so we stopped trying to network\nand built a better way to get noticed."
        },
        {
          type: "stanza",
          text: "an agent that understands what we're looking for.\nfinds the right people and makes warm intros\nwhile we do the work we actually care about."
        },
        {
          type: "tagline",
          text: "noticed.\na personal agent that networks while you build.",
          italic: true
        }
      ]}
      ctaText="join the waitlist"
      videoUrl="https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_30fps.mp4"
      currentVersion={2}
    />
  )
}
