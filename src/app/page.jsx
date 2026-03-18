import { createMetadata } from '@/lib/metadata';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickMenu from '@/components/QuickMenu';
import MainContent from '@/components/MainContent';
import NoticeBoard from '@/components/NoticeBoard';
import ConsultationSection from '@/components/ConsultationSection';
import Footer from '@/components/Footer';

export const metadata = createMetadata({
  title: '광주 난임 산부인과 미래와희망 산부인과',
  description: '광주 서구 소재 난임 전문 산부인과. 시험관아기, 난임검사, 초음파 난관조영술, 남성난임, 정밀정액검사, 습관성유산, 특수미세수정 전문 의료기관',
  keywords: ['광주 서구 산부인과', '시험관아기 광주', '광주 난임병원'],
  path: '/',
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <QuickMenu />

        <div className="space-y-0">
          <MainContent />
          <NoticeBoard />
          <ConsultationSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
