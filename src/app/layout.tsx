import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../ui/reset.scss';
import './globals.scss';

const inter = Inter({
  weight: ['300', '400', '500', '700', '800', '900'],
  // style: ['normal', 'italic'], @TODO: Fix 'italic' which missed in type defenitions
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
