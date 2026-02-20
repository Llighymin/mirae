import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickMenu from '@/components/QuickMenu';
import MainContent from '@/components/MainContent';
import NoticeBoard from '@/components/NoticeBoard';
import ConsultationSection from '@/components/ConsultationSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickMenu />
      
      <div className="space-y-0">
        <MainContent />
        <NoticeBoard />
        <ConsultationSection />
      </div>
      
      <Footer />
    </div>
  );
}
