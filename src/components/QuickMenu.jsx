'use client';

export default function QuickMenu() {
  const quickMenuItems = [
    { icon: 'ri-hospital-line', title: '병원안내', subtitle: 'Hospital Guide', link: '#' },
    { icon: 'ri-heart-pulse-line', title: '난임센터', subtitle: 'Fertility Center', link: '#' },
    { icon: 'ri-user-heart-line', title: '의료진소개', subtitle: 'Medical Team', link: '#' },
    { icon: 'ri-calendar-check-line', title: '온라인 상담', subtitle: 'Online Consultation', link: '#' },
    { icon: 'ri-map-pin-2-line', title: '오시는길', subtitle: 'Location', link: '#' },
    { icon: 'ri-phone-line', title: '전화상담', subtitle: '062-361-3344', link: 'tel:062-361-3344' }
  ];

  return (
    <section className="relative z-20 -mt-10 lg:-mt-16 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 lg:p-4">
          <div className="grid grid-cols-3 lg:grid-cols-6 divide-x divide-gray-100">
            {quickMenuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group flex flex-col items-center justify-center py-6 px-2 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer first:rounded-l-lg last:rounded-r-lg"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 mb-3 shadow-inner group-hover:shadow-lg group-hover:scale-110">
                  <i className={`${item.icon} text-2xl`}></i>
                </div>
                <div className="text-center">
                  <span className="block text-[15px] font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-0.5">
                    {item.title}
                  </span>
                  <span className="block text-[11px] text-gray-400 font-medium tracking-wide uppercase group-hover:text-primary-400 transition-colors">
                    {item.subtitle}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
