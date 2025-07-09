import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientRoot from './ClientRoot'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "SKSM Trade - Professional Trading Signals",
  description: "Get real-time trading signals from expert analysts in crypto and forex markets",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} font-sans antialiased`}>
          <ClientRoot>
            {children}
          </ClientRoot>
        </body>
      </html>
    </ClerkProvider>
  )
}