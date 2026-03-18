export default function ConsultationSection() {
  const items = [
    {
      icon: 'ri-calendar-check-fill',
      title: '예약 문의',
      desc: '원하시는 시간에\n빠르게 예약하세요',
      link: '#',
      bg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'ri-kakao-talk-fill',
      title: '카카오톡 상담',
      desc: '진료시간 내\n실시간 상담 가능',
      link: '#',
      bg: 'bg-yellow-50',
      iconColor: 'text-yellow-900'
    },
    {
      icon: 'ri-stethoscope-fill',
      title: '의료진 소개',
      desc: '분야별 전문의를\n소개합니다',
      link: '#',
      bg: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: 'ri-map-pin-2-fill',
      title: '오시는 길',
      desc: '편안하게 방문하실 수\n있도록 안내합니다',
      link: '#',
      bg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 relative bg-[#f1f5f9]">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#f9f9f9]"></div>
      
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {items.map((item, index) => (
              <a 
                key={index} 
                href={item.link}
                className="group relative p-10 hover:bg-[#f8f9fa] transition-colors duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Icon Background Circle */}
                <div className={`w-20 h-20 rounded-full ${item.bg} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                  <i className={`${item.icon} text-3xl ${item.iconColor}`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-[#222] mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#444] leading-relaxed whitespace-pre-line text-[15px] font-medium group-hover:text-[#222]">
                  {item.desc}
                </p>

                {/* Arrow Icon that appears on hover */}
                <span className="absolute bottom-6 right-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-primary-400">
                  <i className="ri-arrow-right-line text-2xl"></i>
                </span>
                
                {/* Bottom Border Animation using pseudo-element logic via existing tailwind classes? 
                    Let's use a simple div instead for clarity 
                */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Banner Section below cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="#" aria-label="진료시간 안내 자세히 보기" className="bg-[#2c3e50] rounded-2xl p-8 flex items-center justify-between text-white shadow-lg group hover:shadow-xl transition-all overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-2">진료시간 안내</h4>
                <p className="text-gray-300 mb-4 text-sm">평일 09:00 ~ 18:00 / 토요일 09:00 ~ 13:00</p>
                <span className="inline-block border border-white/30 rounded-full px-4 py-1 text-xs text-gray-200 group-hover:bg-white group-hover:text-[#2c3e50] transition-colors">자세히 보기</span>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
                <i className="ri-time-line text-3xl"></i>
              </div>
              <i className="ri-time-line text-[150px] absolute -right-4 -bottom-8 text-white/5 rotate-12 group-hover:rotate-0 transition-all duration-500"></i>
            </a>

            <a href="#" aria-label="지도 보기" className="bg-primary-600 rounded-2xl p-8 flex items-center justify-between text-white shadow-lg group hover:shadow-xl transition-all overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-2">찾아오시는 길</h4>
                <p className="text-primary-100 mb-4 text-sm">광주광역시 서구 상무대로 771 3층</p>
                <span className="inline-block border border-white/30 rounded-full px-4 py-1 text-xs text-primary-100 group-hover:bg-white group-hover:text-primary-600 transition-colors">지도 보기</span>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
                <i className="ri-map-pin-line text-3xl"></i>
              </div>
              <i className="ri-map-pin-line text-[150px] absolute -right-4 -bottom-8 text-white/5 rotate-12 group-hover:rotate-0 transition-all duration-500"></i>
            </a>
          </div>
      </div>
    </section>
  );
}
