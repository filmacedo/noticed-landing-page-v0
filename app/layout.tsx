import type { Metadata } from "next"
import { Cormorant_Garamond } from "next/font/google"
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant"
});

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
      <body className={`${cormorant.className} antialiased`} style={{
        color: '#f5f5f5',
        textTransform: 'lowercase',
        letterSpacing: '0.02em',
        background: '#000'
      }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
