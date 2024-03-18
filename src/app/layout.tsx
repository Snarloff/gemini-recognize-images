import '@/app/globals.css'

import { clsx } from 'clsx'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recognize Images using Gemini',
  description: 'Recognize Images using Gemini by Snarloff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={clsx(inter.className, 'min-h-screen w-screen antialiased bg-slate-100')}>{children}</body>
    </html>
  )
}
