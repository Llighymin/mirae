/**
 * 사이트 공통 메타데이터 유틸리티
 * 각 페이지에서 generateMetadata() 또는 metadata export를 통해 사용
 */

export const siteConfig = {
  name: '미래와희망 산부인과',
  shortName: '미래와희망',
  url: 'https://miraeheemang.com',
  description:
    '광주 서구 소재 난임 전문 산부인과. 시험관아기, 난임검사, 초음파 난관조영술, 남성난임, 정밀정액검사, 습관성유산, 특수미세수정 전문 의료기관',
  keywords: [
    '광주 난임 산부인과',
    '미래와희망 산부인과',
    '시험관아기',
    '난임검사',
    '난임치료',
    '습관성유산',
    '착상전유전진단',
    '남성난임',
    '광주 산부인과',
    '임신',
  ],
  ogImage: 'https://miraeheemang.com/images/index/og-image.png',
  locale: 'ko_KR',
};

/**
 * 페이지별 메타데이터를 생성하는 헬퍼 함수
 * @param {object} options - 페이지 전용 메타데이터 옵션
 * @param {string} options.title - 페이지 타이틀 (레이아웃의 template에 따라 자동 포맷됨)
 * @param {string} options.description - 페이지 설명
 * @param {string[]} options.keywords - 추가 키워드 (기본 키워드에 병합)
 * @param {string} options.path - 페이지 경로 (예: '/about')
 * @param {string} options.ogImage - 페이지 고유 OG 이미지 (기본값: 공통 이미지)
 * @returns {import('next').Metadata}
 */
export function createMetadata({
  title,
  description,
  keywords = [],
  path = '/',
  ogImage,
} = {}) {
  const pageUrl = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;
  const mergedKeywords = [...new Set([...siteConfig.keywords, ...keywords])];

  return {
    title,
    description: description || siteConfig.description,
    keywords: mergedKeywords,
    openGraph: {
      title,
      description: description || siteConfig.description,
      url: pageUrl,
      type: 'website',
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description || siteConfig.description,
      images: [image],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}
