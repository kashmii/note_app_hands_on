import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Header from './Header';

import './globals.css'

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
})

export const metadata: Metadata = {
  title: 'Next.js Awesome Memo App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/* 3. ページやレイアウトの内容を表示 */}
      <body className={NotoSansJP.className}>
        {/* 7. 共通ヘッダー */}
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
