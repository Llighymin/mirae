'use client';

export default function Hero() {
  const scrollToMain = () => {
    const el = document.getElementById('main-content');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[600px] lg:h-[800px] bg-gray-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        >
          {/* 무료 스톡 비디오 샘플 (병원/의료/clean 관련 느낌) */}
          <source
            src="https://d21utfn33skkhq.cloudfront.net/media/culiver/7dd8ceb1c0684b599666250fae7f2eb9.mp4"
            type="video/mp4"
          />
          <track kind="captions" src="/captions/hero-ko.vtt" srcLang="ko" label="한국어 자막" default />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for Text Readability - slightly heavier for video */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20"></div>
      </div>

      <div className="relative z-20 h-full max-w-[1280px] mx-auto px-4 lg:px-8 flex items-center">
        <div className="max-w-3xl text-white pt-16">
          <div className="inline-flex items-center space-x-3 mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <span className="w-12 h-[2px] bg-primary-400"></span>
            <span className="text-primary-300 font-bold tracking-[0.2em] text-sm uppercase">Mirae & Heemang Hospital</span>
          </div>
          
          <h1 className="text-5xl lg:text-[72px] font-bold leading-[1.1] mb-8 whitespace-pre-line opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] tracking-tight">
            새 생명의 시작을<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-400">함께합니다</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-300 mb-12 leading-relaxed max-w-xl whitespace-pre-line opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] font-light">
            미래와희망 산부인과는 난임 전문 의료진과<br/>
            최첨단 시설로 여러분의 소중한 꿈을 응원합니다.
          </p>
          
          <div className="flex items-center space-x-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
            <a href="#" className="px-10 py-4 bg-primary-600/90 backdrop-blur-sm text-white text-lg font-bold rounded-full hover:bg-primary-500 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center group border border-transparent hover:border-primary-400">
              온라인 상담 바로가기
              <i className="ri-arrow-right-line ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a href="#" aria-label="동영상 재생" className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary-900 transition-all group">
              <i className="ri-play-fill text-xl group-hover:scale-110 transition-transform pl-1"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button onClick={scrollToMain} aria-label="아래로 스크롤" className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-white/50 flex flex-col items-center animate-bounce hover:text-white transition-colors">
        <span className="text-[10px] tracking-[0.3em] mb-3 uppercase font-medium">Scroll Down</span>
        <i className="ri-arrow-down-line text-xl"></i>
      </button>
    </section>
  );
}
