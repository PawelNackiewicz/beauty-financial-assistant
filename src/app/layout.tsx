import { Footer } from '@/components/footer/Footer'
import { Navigation } from '../components/navigation/Navigation'
import './globals.css'
import { Nunito } from 'next/font/google'
import { NextAuthProvider } from "./providers";

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
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NextAuthProvider>
          <div className='w-screen min-h-screen flex flex-col justify-between items-center'>
            <Navigation />
            {children}
            <Footer />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
