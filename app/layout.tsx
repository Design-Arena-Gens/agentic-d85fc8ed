import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Toyota Auris 2014 - Менеджер',
  description: 'Управління та відстеження Toyota Auris 2014 1.8 Hybrid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}
