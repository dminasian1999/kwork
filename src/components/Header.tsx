import React, { useState } from 'react';
import { Menu, MapPin, Phone, Search, Eye, ChevronDown } from 'lucide-react';
import { JSX } from "react/jsx-runtime"

// Data for navigation links
const navLinks = [
  "Услуги",
  "Цены",
  "Контакты",
  "Акции",
  "Специалисты",
  "Статьи",
]

// Custom icon component for social media (VK and Telegram)
const VKSvg = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.75 3.31 8.72 7.7 9.87l-.03-2.19c-1.63-.3-2.67-1.42-3-1.92-.09-.13-.16-.21-.2-.22-.27-.24-.54-.33-.8-.33-.52 0-.98.3-1.29.83-.2.35-.38.74-.35 1.15.02.3.17.58.42.72.24.13.5.21.78.25 1.5.2 2.76-.84 3.75-2.26 1.12-1.63 2.1-3.69 2.1-5.63 0-.64-.13-1.07-.38-1.42-.5-.72-1.25-1.12-2.14-1.12-.5 0-.9.2-1.25.6-.25.3-.44.7-.56 1.1-.12.55-.2 1.05-.28 1.5-.1.52-.3 1.1-.9 1.25-.13.04-.26.04-.4 0-.6-.15-.8-1.05-.8-1.25s.15-.43.3-.6c.15-.17.38-.3.65-.4.27-.1.57-.15.8-.18 0-.4-.05-.8-.13-1.2-.2-1.05-.8-1.85-2.1-2.2-.67-.18-1.32-.27-1.98-.27-1.6 0-3 .5-4.14 1.5-1.07.96-1.74 2.3-1.74 3.82 0 1.9.9 3.6 2.3 4.9.45.4.8.7 1.1 1.25 1.1 1.7 2.45 2.8 4.2 3.38 1.2.4 2.4.6 3.6.6 2.4 0 4.5-.6 6.3-1.7 1.8-1.1 3.1-2.8 3.7-4.8.2-1.1.3-2.2.3-3.3 0-2.4-.6-4.5-1.8-6.3-1.2-1.8-2.8-3.1-4.8-3.7-1.1-.2-2.2-.3-3.3-.3s-2.2.1-3.3.3c-2 .6-3.7 1.9-4.8 3.7-1.1 1.8-1.7 3.9-1.7 6.3 0 2.4.6 4.5 1.7 6.3s2.8 3.1 4.8 3.7c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3 2-.6 3.7-1.9 4.8-3.7 1.1-1.8 1.7-3.9 1.7-6.3zM12 21.92c-5.46 0-9.92-4.46-9.92-9.92S6.54 2.08 12 2.08s9.92 4.46 9.92 9.92-4.46 9.92-9.92 9.92z" />
  </svg>
)

const TelegramSvg = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.33 7.55l-2.84 6.78c-.2.47-.85.59-1.28.27l-1.97-1.48-1.26 1.12c-.17.15-.41.17-.61.05l-.33-.2c-.17-.1-.23-.33-.14-.5l.8-2.63L7.7 9.87c-.4-.44-.32-1.14.16-1.5l8.1-3.66c.45-.2 1.05.07 1.17.58.07.3-.1.6-.37.74l-8.3 4.16.03.01.07.03c.17.1.38.1.58-.02l.62-.33 5.4-3.37c.45-.28 1.05-.03 1.13.48.05.25-.08.5-.3.65z" />
  </svg>
)


// @ts-ignore
const HeaderInfoBlock = ({ icon: Icon, title, subtitle, className = '' }) => (
  <div className={`flex items-start space-x-2 text-sm ${className}`}>
    <Icon className="w-5 h-5 mt-0.5 text-gray-500" />
    <div>
      <div className="text-gray-900 font-semibold">{title}</div>
      <div className="text-gray-500 text-xs whitespace-nowrap">{subtitle}</div>
    </div>
  </div>
);

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define colors based on the image palette
  const accentColor = 'bg-[#7d4847]'; // Brown/Mauve for CTA
  const textColor = 'text-[#7d4847]';
  const logoColor = 'bg-[#b69f8c]'; // Muted gold/beige for logo circle

  return (
    <header className="w-full font-['Inter']">
      {/* ========================================
        1. Top Contact & CTA Bar
        ========================================
      */}
      <div className="border-b border-gray-100 py-3 px-4 md:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo Section (Left) */}
          <div className="flex items-center space-x-3 min-w-max">
            <div className={`w-10 h-10 ${logoColor} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
              a
            </div>
            <div className="flex flex-col text-sm leading-tight">
              <span className="font-semibold text-gray-700">Аллея мед,</span>
              <span className="font-bold text-gray-900 text-base">Аллея красоты</span>
            </div>
          </div>

          {/* Info Blocks (Center) */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 lg:space-x-12 flex-grow justify-center md:justify-start md:ml-10">
            <HeaderInfoBlock
              icon={MapPin}
              title="ул. Некрасова, д. 45"
              subtitle="ул. Самых Шаших, 90/5, офис 11"
            />
            <HeaderInfoBlock
              icon={Phone}
              title="+7 (383) 310-10-02"
              subtitle={<a href="#" className={`underline hover:${textColor}/80`}>Перезвонить мне</a>}
              className="mt-3 sm:mt-0"
            />
          </div>

          {/* CTA & Social (Right) */}
          <div className="flex items-center space-x-4 min-w-max">
            <button className={`${accentColor} text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-[#6a3c3b] transition duration-200`}>
              Записаться
            </button>
            <div className="flex space-x-2">
              <VKSvg className={`w-6 h-6 ${textColor} hover:text-gray-700 transition duration-150 cursor-pointer`} />
              <TelegramSvg className={`w-6 h-6 ${textColor} hover:text-gray-700 transition duration-150 cursor-pointer`} />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
        2. Main Navigation Bar
        ========================================
      */}
      <nav className="py-2 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Primary Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className={`py-2 px-1 hover:${textColor} transition duration-150 relative group`}
              >
                {link}
                {/* Optional: Add a dropdown indicator for "Услуги" if it has sub-items */}
                {link === 'Услуги' && <ChevronDown className="w-3 h-3 inline ml-1 align-sub" />}
                {/* Active Link Indicator (based on image) */}
                {link === 'Услуги' && <span className={`absolute bottom-0 left-0 w-full h-0.5 ${accentColor}`}></span>}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" />
          </button>


          {/* Utility Icons (Right) */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
            <Eye className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />

            {/* Show Menu Icon on desktop next to Utilities */}
            <Menu className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 hidden md:block" />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-2 border-t border-gray-100 pt-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ========================================
        3. Placeholder Content (Main Headline)
        ========================================
      */}
      <main className="max-w-3xl mx-auto text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Аллея красоты x Москвичка
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Когда вкус и красота встречаются
        </p>
      </main>
    </header>
  );
};

export default App;
