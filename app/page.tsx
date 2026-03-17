import { NoticedLanding } from "@/components/noticed-landing"

// Version 1: Too good to go unnoticed
export default function Version1Page() {
  return (
    <NoticedLanding
      manifestoTitle="noticed"
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
      videoUrl="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
      currentVersion={1}
    />
  )
}
