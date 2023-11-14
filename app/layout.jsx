import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'sbector',
  description: 'contemporary art producer and creative programer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}