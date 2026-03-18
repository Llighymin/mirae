import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/metadata'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
})

/**
 * 사이트 전체 기본(base) 메타데이터
 * 각 페이지에서 metadata 또는 generateMetadata를 export하면 이 값을 덮어씁니다.
 */
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - 시험관아기 난임치료 전문`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - 시험관아기 난임치료 전문`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - 시험관아기 난임치료 전문`,
    description: siteConfig.description,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
      </head>
      <body>
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only absolute left-2 top-2 z-[9999] bg-white text-sm px-3 py-2 rounded shadow">콘텐츠로 건너뛰기</a>
        {children}
      </body>
    </html>
  )
}
