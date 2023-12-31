import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'sbector',
  description: 'contemporary art producer and creative programer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`bg-zinc-900 text-gray-50 ${inter.className}`}>
      <body>
          {children}
      </body>
    </html>
  )
}