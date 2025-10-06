import React from 'react';

// --- SVG Icons --- //
// Using inline SVGs to avoid external dependencies and ensure pixel-perfect rendering.

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
);

const EyeIcon = () => (
  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>

  </svg>
);

// @ts-ignore
const SocialIcon = ({ path }) => (
  <svg className="w-6 h-6 fill-current text-gray-500 hover:text-gray-800" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d={path} />
  </svg>
);

// --- Components --- //

const Header = () => {
  return (
    <header className="bg-[#F7F5F2] border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-wrap justify-between items-center py-3">
          <div className="flex items-center">
            <div className="flex items-center mr-8">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 mr-2">а</div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">аллея med</p>
                <p className="font-semibold text-gray-800 text-sm">аллея красоты</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-4 sm:mt-0">
            <div className="flex items-start mr-6 text-sm">
              <LocationIcon />
              <div>
                <p className="text-gray-800">ул. Некрасова, д. 45</p>
                <p className="text-gray-500">ул. Семьи Шамшиных, 90/5, офис 11</p>
              </div>
            </div>
            <div className="flex items-start text-sm">
              <PhoneIcon />
              <div>
                <p className="text-gray-800 font-semibold">+7(383) 310-10-02</p>
                <p className="text-gray-500 underline cursor-pointer">Перезвонить мне</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <button className="bg-[#8B7160] text-white py-2 px-6 rounded-lg text-sm">Записаться</button>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex justify-between items-center py-4 text-sm">
          <div className="hidden md:flex space-x-8 text-gray-700">
            <a href="#" className="hover:text-black">Услуги</a>
            <a href="#" className="hover:text-black">Цены</a>
            <a href="#" className="hover:text-black">Контакты</a>
            <a href="#" className="hover:text-black">Акции</a>
            <a href="#" className="hover:text-black">О центре</a>
            <a href="#" className="hover:text-black">Отзывы</a>
            <a href="#" className="hover:text-black">Специалисты</a>
            <a href="#" className="hover:text-black">Статьи</a>
          </div>
          <div className="flex items-center space-x-4">
            <SearchIcon />
            <MenuIcon />
            <EyeIcon />
          </div>
        </nav>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <div className="text-center py-20 md:py-32 bg-[#F7F5F2]">
      <h1 className="text-5xl md:text-7xl font-light text-gray-800">Аллея красоты х Москвичка</h1>
      <p className="mt-6 text-xl text-gray-600">Когда вкус и красота встречаются</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">Объединяем <span className="font-normal">лучшее</span> для Вас</h2>
      <p className="text-gray-600 max-w-3xl">
        Мы объединили гастробар «Москвичка» и клиники «Аллея красоты» и «Аллея Мед», чтобы
        подарить гостям больше, чем просто атмосферу и сервис. На одной странице — всё о нашем
        совместном проекте: от особых предложений до подарков и уникальных активностей
      </p>
    </div>
  );
};

const PartnersSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-12">О партнерах</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-blue-300 p-1">
          <div className="bg-gray-200 h-80 w-full mb-6">
            <img src="https://placehold.co/600x400/d1bfa7/FFFFFF?text=Team+Photo" alt="Аллея Красоты" className="w-full h-full object-cover"/>
          </div>
          <h3 className="text-2xl font-light mb-4">Аллея Красоты х Аллея Мед</h3>
          <p className="text-gray-600">
            Сеть клиник, где соединяются медицина, эстетика и забота. Современные технологии, опытные специалисты и широкий спектр услуг для вашей красоты и здоровья.
          </p>
        </div>
        <div className="border border-blue-300 p-1">
          <div className="bg-gray-200 h-80 w-full mb-6">
            <img src="https://placehold.co/600x400/333333/FFFFFF?text=Moskvichka" alt="Гастробар Москвичка" className="w-full h-full object-cover"/>
          </div>
          <h3 className="text-2xl font-light mb-4">Гастробар «Москвичка»</h3>
          <p className="text-gray-600">
            Атмосферное место с аутентичным уютом, авторской гастрономией, искусными коктейлями и уютной московской подачей. Здесь ценят вкус, настроение и стильный отдых.
          </p>
        </div>
      </div>
    </div>
  );
}

const BenefitsSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-12">Что вы получаете</h2>
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-normal mb-4">Скидка 10%</h3>
          <p className="text-gray-600">По промокоду <span className="font-semibold">«Москвичка»</span> на все услуги в клиниках «Аллея красоты» и «Аллея Мед». Действует до конца года</p>
        </div>
        <div>
          <h3 className="text-2xl font-normal mb-4">Именинники и гости</h3>
          <p className="text-gray-600">От гастробара получают <span className="font-semibold">подарочный сертификат</span> в «Москвичке»</p>
        </div>
        <div>
          <h3 className="text-2xl font-normal mb-4">Специальный «Коктейль красоты»</h3>
          <p className="text-gray-600">Закажите один и получите сертификат на услуги в «Аллее красоты» или «Аллее Мед»</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gray-300 h-64 border border-blue-300"><img src="https://placehold.co/400x300/a89280/FFFFFF?text=%" alt="Discount" className="w-full h-full object-cover"/></div>
        <div className="bg-gray-300 h-64 border border-blue-300"><img src="https://placehold.co/400x300/333333/FFFFFF?text=Lounge" alt="Lounge" className="w-full h-full object-cover"/></div>
        <div className="bg-gray-300 h-64 border border-blue-300"><img src="https://placehold.co/400x300/f0e6d4/FFFFFF?text=Cocktail" alt="Cocktail" className="w-full h-full object-cover"/></div>
      </div>
    </div>
  )
}

const HowItWorksSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">Как это работает?</h2>
      <p className="text-gray-600 text-lg">Просто при визите назовите промокод <span className="font-semibold">«Москвичка»</span> — и скидка ваша</p>
    </div>
  )
}

const DetailsSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-gray-200">
      <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-12">Подробная информация</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="font-semibold mb-8">Гастробар «Москвичка»</p>
          <div className="flex items-start mb-6">
            <LocationIcon />
            <div>
              <p className="font-semibold">ЖК Алмонд, Чаплыгина 39</p>
              <p className="text-gray-500">пн-вс 12:00 - 24:00</p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <PhoneIcon />
            <p className="font-semibold">+7 (929)-389-04-55</p>
            <div className="flex space-x-2 ml-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <button className="bg-[#8B7160] hover:bg-[#7a6252] text-white py-3 px-8 rounded-lg">Узнать больше о меню «Москвички»</button>
        </div>
        <div>
          <p className="font-semibold mb-8">Аллея Красоты/Аллея Мед</p>
          <div className="flex items-start mb-6">
            <LocationIcon />
            <div>
              <p className="font-semibold">ул. Семьи Шамшиных, 90/5, офис 11</p>
              <p className="text-gray-500">пн-пт 10:00 - 20:00, сб-вс 10:00 - 18:00</p>
            </div>
          </div>
          <div className="flex items-start mb-6">
            <LocationIcon />
            <div>
              <p className="font-semibold">ул. Некрасова, д. 45</p>
              <p className="text-gray-500">пн-пт 10:00 - 20:00, сб-вс 10:00 - 18:00</p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <PhoneIcon />
            <p className="font-semibold">+7(383) 310-10-02</p>
            <div className="flex space-x-2 ml-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <button className="bg-[#8B7160] hover:bg-[#7a6252] text-white py-3 px-8 rounded-lg">Посмотреть услуги клиник «Аллея»</button>
        </div>
      </div>
    </div>
  );
};


const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Footer */}
        <div className="flex flex-wrap justify-between items-center mb-10">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mr-2">а</div>
            <div>
              <p className="font-semibold text-sm">аллея med</p>
              <p className="font-semibold text-sm">аллея красоты</p>
            </div>
            <p className="ml-4 text-xs text-gray-400 border-l border-gray-600 pl-4">Клиники <br/>косметологии</p>
          </div>
          <div className="flex space-x-2 my-4 sm:my-0">
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          </div>
          <div className="text-3xl md:text-4xl font-light">+7 (918) 644-98-98</div>
          <button className="border border-gray-500 text-white py-2 px-6 rounded-lg text-sm hover:bg-gray-700">Записаться</button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm border-t border-gray-700 pt-10">
          <div className="lg:col-span-2">
            <div className="flex items-start mb-4">
              <LocationIcon />
              <div className="ml-2">
                <p className="font-semibold">г. Новосибирск</p>
                <p className="text-gray-400">ул. Семьи Шамшиных, 90/5, офис 11</p>
                <p className="text-gray-400">ул. Некрасова, д. 45</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div className="ml-2">
                <p className="font-semibold">Режим работы</p>
                <p className="text-gray-400">пн-пт 10:00 - 20:00, сб-вс 10:00 - 18:00</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <PhoneIcon />
              <div className="ml-2">
                <p className="font-semibold">+7(383) 310-10-02</p>
                <p className="text-gray-400 underline cursor-pointer">Перезвонить мне</p>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Способы оплаты:</p>
              <div className="flex space-x-2 items-center">
                <span className="text-lg font-bold">VISA</span>
                <div className="w-8 h-5 bg-gray-500"></div>
                <span className="text-lg font-bold">МИР</span>
              </div>
            </div>
          </div>

          <div className="md:col-start-3">
            <p className="font-semibold mb-4">О клинике</p>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:underline">Лицо</a></li>
              <li><a href="#" className="hover:underline">Тело</a></li>
              <li><a href="#" className="hover:underline">Подология</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Прайс</p>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:underline">Проблематика</a></li>
              <li><a href="#" className="hover:underline">Новости и акции</a></li>
              <li><a href="#" className="hover:underline">Контакты</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-4">О клинике</p>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:underline">Лицо</a></li>
              <li><a href="#" className="hover:underline">Тело</a></li>
              <li><a href="#" className="hover:underline">Подология</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Прайс</p>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:underline">Проблематика</a></li>
              <li><a href="#" className="hover:underline">Новости и акции</a></li>
              <li><a href="#" className="hover:underline">Контакты</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-xs text-gray-400 flex flex-wrap justify-between">
          <p>Лицензия №ЛО-77-01-013634 от 12.12.2016г.</p>
          <div className="space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:underline">Политика конфиденциальности</a>
            <a href="#" className="hover:underline">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


// --- Main App Component --- //

export default function App() {
  return (
    <div className="bg-[#F7F5F2] font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <BenefitsSection />
        <HowItWorksSection />
        <DetailsSection />
      </main>
      <Footer />
    </div>
  )
}
