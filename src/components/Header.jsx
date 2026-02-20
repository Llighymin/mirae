'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: '병원안내', submenu: ['인사말', '스태프소개', '진료안내', '병원시설보기', '찾아오시는길', '공지사항', '보도자료', '제증명 발급안내'] },
    { title: '난임센터', submenu: ['난임센터안내', '난임이란', '난임증원인', '여성난임진단', '난임치료', '난임연구실', '난임관련질환', '내막증강요법', '보조요법', '난자냉동', '난임주사안내'] },
    { title: '습관성유산클리닉', submenu: ['습관성유산이란', '원인 및 진단', '치료방법'] },
    { title: '산과센터', submenu: ['산전정밀검사', '염색체이상진단', '습관성유산클리닉'] },
    { title: '부인과센터', submenu: ['난소난종클리닉', '고령임신클리닉', '폐경기클리닉', '질염클리닉', '부인암클리닉', '레이져내시경클리닉', '난관수종클리닉'] },
    { title: '착상전유전진단', submenu: ['착상전유전진단이란', '적응증', '검사방법'] },
    { title: '남성난임센터', submenu: ['비뇨기과클리닉', '배뇨장애클리닉', '성기능클리닉', '남성난임진단'] },
    { title: '상담센터', submenu: ['난임관련 상담', '부인비뇨기과 상담', '자주묻는 질문'] },
    { title: '커뮤니티', submenu: ['임신성공축하', '수술사례', '감사편지', '자유게시판', '행복사진첩', '의학칼럼', '에세이', '임신성공담'] }
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#f8f9fa] border-b border-[#e9ecef] hidden md:block">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-9">
            <div className="flex items-center space-x-6 text-[11px] text-[#666]">
              <span className="flex items-center cursor-pointer hover:text-primary-600 transition-colors">
                <i className="ri-hospital-line mr-1.5 text-[#999]"></i>
                병원소개
              </span>
              <span className="flex items-center cursor-pointer hover:text-primary-600 transition-colors">
                <i className="ri-map-pin-line mr-1.5 text-[#999]"></i>
                오시는길
              </span>
              <span className="flex items-center cursor-pointer hover:text-primary-600 transition-colors font-medium">
                <i className="ri-phone-fill mr-1.5 text-primary-500"></i>
                062-361-3344
              </span>
            </div>
            <div className="flex items-center divide-x divide-[#e9ecef] text-[11px] text-[#666]">
              <a href="#" className="px-3 hover:text-primary-600 transition-colors">로그인</a>
              <a href="#" className="px-3 hover:text-primary-600 transition-colors">회원가입</a>
              <div className="flex items-center px-3 space-x-1">
                <span className="font-bold text-[#333] cursor-pointer">KOR</span>
                <span className="text-[#e9ecef] mx-1">|</span>
                <span className="text-[#999] hover:text-[#333] cursor-pointer transition-colors">ENG</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md w-full border-b transition-all duration-300 ${isScrolled ? 'shadow-sm h-[70px] border-[#eee]' : 'h-[90px] border-transparent'}`}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 mr-8 lg:mr-12">
               {/* 
                  로고 이미지 경로가 확실하지 않으므로 텍스트로 대체하거나 placeholder 사용 권장
                  Use text logo temporarily if image fails, or use standard image tag
               */}
              <div className="flex items-center gap-2">
                 <img src="https://miraeheemang.com/images/index/logo.png" alt="미래와희망" className={`object-contain transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`} />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex flex-1 h-full items-center justify-center">
              <ul className="flex items-center h-full gap-1 2xl:gap-3">
                {menuItems.map((item, index) => (
                  <li 
                    key={index}
                    className="relative h-full flex items-center group"
                    onMouseEnter={() => setActiveMenu(index)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <a 
                      href="#" 
                      className={`px-3 py-2 text-[15px] 2xl:text-[16px] font-bold text-[#222] hover:text-primary-600 transition-colors relative z-10 flex items-center h-full whitespace-nowrap tracking-tight`}
                    >
                      {item.title}
                    </a>
                    
                    {/* Hover Decoration */}
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-[100%] left-1/2 -translate-x-1/2 min-w-[200px] bg-white border border-[#eee] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-b-lg overflow-hidden transition-all duration-200 z-0 origin-top ${
                      activeMenu === index 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="py-2 bg-white flex flex-col items-center">
                        {item.submenu.map((subItem, subIndex) => (
                          <a 
                            key={subIndex} 
                            href="#" 
                            className="block w-full px-5 py-2.5 text-[14px] text-[#555] hover:text-primary-600 hover:bg-[#f8f9fa] transition-colors font-medium text-center truncate"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-1 lg:space-x-3 ml-auto xl:ml-8 flex-shrink-0">
              {/* Search Icon */}
              <button className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-[#333] hover:bg-[#f8f9fa] transition-colors">
                <i className="ri-search-line text-xl"></i>
              </button>

              {/* View All Menu Button (Hamburger) - Desktop & Mobile */}
              <button 
                className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full hover:bg-[#f8f9fa] transition-colors group relative"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="전체 메뉴 보기"
              >
                <i className="ri-menu-line text-xl lg:text-2xl text-[#333] group-hover:text-primary-600 transition-colors"></i>
              </button>

              {/* Reserve Button */}
              <a href="#" className="hidden lg:flex items-center px-5 py-2.5 bg-[#2c3e50] text-white rounded-full text-sm font-bold hover:bg-[#1a252f] transition-all shadow-sm hover:shadow ml-2 group">
                <i className="ri-calendar-check-line mr-2 text-primary-200 group-hover:text-white transition-colors"></i>
                온라인 상담
              </a>
            </div>
          </div>
        </div>

      </header>
      
      {/* Full Screen Menu Overlay (Optional - for View All Button) */}
      {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-[9999] overflow-y-auto w-screen h-screen">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-6 flex-shrink-0">
                <img src="https://miraeheemang.com/images/index/logo.png" alt="Logo" className="h-10" />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-6 lg:gap-8 pb-20">
                  {menuItems.map((item, idx) => (
                    <div key={idx} className="space-y-4">
                      <h3 className="text-lg font-bold text-[#222] border-b-2 border-[#222] pb-2 mb-4">{item.title}</h3>
                      <ul className="space-y-3">
                        {item.submenu.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors text-sm font-medium block hover:translate-x-1 duration-200">
                              {sub}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      )}
    </>
  );
}
