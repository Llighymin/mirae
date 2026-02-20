import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
})

export const metadata = {
  title: '광주 난임 산부인과 미래와희망 산부인과 - 시험관아기 난임치료 전문',
  description: '광주 서구 소재 난임 전문 산부인과. 시험관아기, 난임검사, 초음파 난관조영술, 남성난임, 정밀정액검사, 습관성유산, 특수미세수정 전문 의료기관',
  keywords: '광주 난임 산부인과, 미래와희망 산부인과, 시험관아기, 난임검사, 난임치료, 습관성유산, 착상전유전진단, 남성난임',
  openGraph: {
    title: '광주 난임 산부인과 미래와희망 산부인과',
    description: '광주 서구 소재 난임 전문 산부인과. 시험관아기, 난임검사, 초음파 난관조영술, 남성난임, 정밀정액검사, 습관성유산, 특수미세수정 전문 의료기관',
    url: 'https://miraeheemang.com/',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
