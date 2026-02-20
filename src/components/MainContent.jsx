export default function MainContent() {
  const centerCards = [
    {
      icon: 'ri-heart-pulse-fill',
      title: '난임센터',
      description: '난임 전문 의료진과 최첨단 연구시설을 갖추고 당신의 소중한 꿈을 함께합니다.',
      link: '#',
      themeColor: 'blue' // Tailwind blue
    },
    {
      icon: 'ri-parent-fill',
      title: '산과센터',
      description: '산전 검사부터 출산까지, 아기와 엄마의 건강을 위한 맞춤형 진료를 제공합니다.',
      link: '#',
      themeColor: 'teal' // Tailwind teal
    },
    {
      icon: 'ri-women-fill',
      title: '부인과센터',
      description: '여성의 생애주기별 건강관리를 위한 전문적인 부인과 질환 치료를 약속합니다.',
      link: '#',
      themeColor: 'rose' // Tailwind rose
    },
    {
      icon: 'ri-stethoscope-fill',
      title: '검진센터',
      description: '정밀한 건강검진 시스템으로 여성질환의 조기 발견과 예방에 앞장섭니다.',
      link: '#',
      themeColor: 'indigo' // Tailwind indigo
    }
  ];

  return (
    <div className="bg-white">
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 px-2">
            <div>
              <p className="text-primary-600 font-bold tracking-widest text-sm mb-3 uppercase flex items-center">
                <span className="w-8 h-[2px] bg-primary-600 mr-3"></span>
                Medical Center
              </p>
              <h2 className="text-4xl lg:text-[42px] font-extrabold text-[#222] leading-tight">
                전문적이고 체계적인<br />
                <span className="">진료 시스템</span>을 소개합니다
              </h2>
            </div>
            <div className="hidden lg:block pb-2">
              <a href="#" className="flex items-center text-[#666] font-medium hover:text-primary-600 transition-colors group text-sm border-b border-transparent hover:border-primary-600 pb-1">
                전체 진료과 보기
                <i className="ri-arrow-right-line ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {centerCards.map((center, index) => (
              <a
                key={index}
                href={center.link}
                className="group relative bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-gray-200 overflow-hidden"
              >
                {/* Background Pattern on Hover - More subtle and professional, full card coverage */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Subtle Icon Background - Positioned absolutely for design flair */}
                <div className="absolute -right-4 -bottom-4 text-[120px] text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rotate-12">
                   <i className={center.icon}></i>
                </div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-gray-50 text-gray-500 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110`}>
                    <i className={`${center.icon} text-[28px]`}></i>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#222] mb-4 group-hover:text-primary-800 transition-colors">
                    {center.title}
                  </h3>
                  
                  <div className="w-10 h-[2px] bg-gray-200 mb-4 group-hover:bg-primary-600 transition-colors duration-300"></div>
                  
                  <p className="text-[15px] text-[#666] leading-relaxed break-keep font-medium group-hover:text-[#444] transition-colors">
                    {center.description}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center justify-end relative z-10">
                  <span className="text-xs font-bold text-gray-400 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    자세히 보기
                  </span>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-primary-600 group-hover:text-primary-600 transition-all duration-300 bg-white">
                    <i className="ri-arrow-right-line text-lg"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
