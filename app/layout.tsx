import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-full bg-white'>
        <Navbar />
        <main className='container flex-grow px-4 py-8 mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
