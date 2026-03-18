import type { Metadata } from "next"
// Build: 2.1 - brand update with new colors
import { Instrument_Serif, Newsreader, Instrument_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Display / wordmark
const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display"
})

// Body (editorial) - landing page, manifesto, blog
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body-editorial"
})

// Body (functional) + UI - buttons, nav, forms
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body-functional"
})

export const metadata: Metadata = {
  title: 'noticed',
  description: 'Your personal networking agent. Focus on building. Let noticed handle the networking.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${newsreader.variable} ${instrumentSans.variable} antialiased bg-[#0a0a0a] text-[#f0ede8]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
