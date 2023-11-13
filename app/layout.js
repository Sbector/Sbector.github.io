import './globals.css'
export const metadata = {
  title: 'sbector',
  description: 'contemporary art producer and creative programer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
