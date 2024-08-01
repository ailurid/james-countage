import "@/styles/globals.css"
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'James Countage',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
