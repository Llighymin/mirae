'use client';
import { useState } from 'react';

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: '공지사항', link: '#' },
    { title: '건강정보', link: '#' },
    { title: '언론보도', link: '#' },
    { title: '칭찬합니다', link: '#' }
  ];

  const notices = [
    { title: '2025년도 신규 간호사 채용 합격자 발표', date: '2024.11.15', isNew: true },
    { title: '본원 난임센터 확장 이전 안내', date: '2024.11.10', isNew: true },
    { title: '제 15회 미래와희망 난임 강좌 개최 안내', date: '2024.10.28', isNew: false },
    { title: '10월 진료 일정 및 휴진 안내', date: '2024.09.30', isNew: false },
    { title: '독감 예방접종 실시 안내', date: '2024.09.15', isNew: false }
  ];

  return (
    <section className="py-20 bg-[#f9f9f9] border-t border-[#eee]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Notice Board */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 h-full">
            <div className="flex items-center justify-between mb-8 border-b-2 border-primary-600 pb-4">
              <h2 className="text-2xl font-bold text-[#222]">
                미래와희망 <span className="text-primary-600">소식</span>
              </h2>
              <a href="#" aria-label="공지 추가" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white hover:border-transparent transition-all">
                <i className="ri-add-line"></i>
              </a>
            </div>

            {/* Tabs */}
            <div className="flex space-x-6 mb-6 border-b border-gray-100">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`pb-4 text-[17px] font-bold transition-all relative ${
                    activeTab === index 
                      ? 'text-primary-600' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab.title}
                  {activeTab === index && (
                    <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-primary-600"></span>
                  )}
                </button>
              ))}
            </div>

            {/* List */}
            <ul className="space-y-4">
              {notices.map((notice, index) => (
                <li key={index} className="flex items-center justify-between group">
                  <a href="#" className="flex items-center w-full overflow-hidden">
                    <span className={`w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 ${notice.isNew ? 'bg-primary-500' : 'bg-gray-300 group-hover:bg-primary-400 transition-colors'}`}></span>
                    <p className="text-[15px] text-[#444] group-hover:text-primary-600 group-hover:underline transition-all truncate pr-4 flex-1">
                      {notice.title}
                    </p>
                    {notice.isNew && (
                      <span className="text-[10px] font-bold text-white bg-red-500 px-1.5 py-0.5 rounded ml-2 flex-shrink-0">N</span>
                    )}
                  </a>
                  <span className="text-[13px] text-[#888] font-medium flex-shrink-0">{notice.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Promotional Banner / Video */}
          <div className="flex flex-col h-full space-y-6">
             {/* YouTube Link or Image Banner */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group h-full min-h-[240px]">
              <img 
                src="https://readdy.ai/api/search-image?query=warm%20doctor%20patient%20consultation%20hospital%20happy%20clean%20bright&width=800&height=500&seq=notice1&orientation=landscape" 
                alt="Hospital Promotion" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-3">
                  Youtube
                </span>
                <h3 className="text-white text-xl font-bold mb-2 leading-tight group-hover:text-primary-300 transition-colors">
                  난임, 포기하지 마세요.<br/>미래와희망이 함께합니다.
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                  수많은 난임 부부들에게 희망을 찾아준 기적의 이야기.
                  지금 바로 확인해보세요.
                </p>
                <div className="flex items-center text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                  <i className="ri-play-circle-line text-2xl mr-2"></i>
                  영상 보러가기
                </div>
              </div>
            </div>

            {/* Newsletter Subscription or Quick Link */}
            <div className="bg-[#2c3e50] rounded-xl p-8 flex items-center justify-between shadow-lg relative overflow-hidden group">
               <div className="absolute right-0 top-0 h-full w-1/2 bg-primary-600/10 transform skew-x-12 translate-x-12"></div>
               <div className="relative z-10">
                 <h3 className="text-lg font-bold text-white mb-1">뉴스레터 구독하기</h3>
                 <p className="text-primary-200 text-sm">건강한 임신과 출산을 위한 정보를 받아보세요.</p>
               </div>
               <button aria-label="뉴스레터 구독" className="relative z-10 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-400 transition-colors shadow-lg group-hover:scale-110">
                 <i className="ri-mail-send-line text-xl"></i>
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
