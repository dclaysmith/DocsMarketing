import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import { VemetricScript } from '@vemetric/react'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - OyDocs',
    default: 'OyDocs - Accounting made simple for small businesses',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <VemetricScript token="3GLNtycGwUcfaQo3" />

        {children}
      </body>
    </html>
  )
}
