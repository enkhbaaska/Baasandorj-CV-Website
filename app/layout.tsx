import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Baasandorj Enkhjargal | CV',
  description: 'British–Mongolian Computer Science with AI student at the University of York, with prior undergraduate study in Physics at the University of Leeds. Experience in machine learning, computational physics and software development through academic and industry projects. From producing analytical reports for Mongolia’s leading digital banking platform, MBank, to building independent projects in satellite monitoring, NLP and sign language recognition. Freelance church organist and former Organ Scholar at Leeds Cathedral.',
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en"  data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
