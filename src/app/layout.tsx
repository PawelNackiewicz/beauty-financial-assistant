import { Footer } from '@/components/footer/Footer'
import { Navigation } from '../components/navigation/Navigation'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin-ext'],
  weight: ['400', '700']
})

export const metadata = {
  title: 'Asystent finansowy Twojego salonu',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className='w-screen h-screen flex flex-col justify-between items-center'>
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
