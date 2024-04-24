import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar';
import TransitionProvider from '@/components/transitionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Apophis.InQtel',
  description: 'Apophis.InQtel',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
