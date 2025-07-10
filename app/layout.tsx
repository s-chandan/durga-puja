import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jai Mata Di',
  description: 'Jai Durga Maa',
  generator: 'Chandan Sharma',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
