import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfólios',
  description: 'Site para exibição de portfólios',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
        <Header />
        <main className="h-[calc(100vh-64px)] mt-16">{children}</main>
      </body>
    </html>
  )
}
