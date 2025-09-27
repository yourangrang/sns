import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {MSWProvider} from "@/app/_component/MSWComponent";
import AuthSession from "@/app/_component/AuthSession";

if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.NODE_ENV !== 'production' && process.env.NEXT_PUBLIC_MSW_ENABLED !== 'false') {
  const { server } = require('@/mocks/http')
  server.listen()
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'P. 파도를 보내보세요 / P',
  description: 'padotaki.com',
}

type Props = {
  children: React.ReactNode,
};
export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWProvider>
          <AuthSession>
            {children}
          </AuthSession>
        </MSWProvider>
      </body>
    </html>
  )
}