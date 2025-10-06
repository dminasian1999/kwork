import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Car, Wrench, Gauge, Hammer, Shield, Clock, Handshake, MapPin, Phone, Mail, User, Info, DollarSign, ListOrdered, ClipboardList } from 'lucide-react';

// --- Данные для сайта ---
const SITE_TITLE = 'Автосервис "Драйв"';
const TAGLINE = 'Надежный ремонт и обслуживание вашего автомобиля';

const SERVICES_DATA = [
  { id: '1', title: 'Диагностика двигателя', icon: Wrench, description: 'Полная компьютерная диагностика и профессиональный ремонт двигателей всех марок.' },
  { id: '2', title: 'Ремонт подвески', icon: Car, description: 'Восстановление и замена элементов ходовой части для комфорта и безопасности.' },
  { id: '3', title: 'Техническое обслуживание (ТО)', icon: Gauge, description: 'Плановая замена масла, фильтров и проверка всех систем по регламенту.' },
  { id: '4', title: 'Кузовной ремонт', icon: Hammer, description: 'Устранение вмятин, покраска и восстановление геометрии кузова после ДТП.' },
  { id: '5', title: 'Шиномонтаж и балансировка', icon: ListOrdered, description: 'Сезонная смена шин, ремонт проколов, точная балансировка колес.' },
  { id: '6', title: 'Заправка и ремонт кондиционеров', icon: ClipboardList, description: 'Проверка герметичности, заправка фреоном и ремонт климатических систем.' },
];

const ADVANTAGES_DATA = [
  { icon: Shield, text: 'Гарантия 1 год на все виды работ и запчасти.' },
  { icon: Clock, text: 'Быстрый ремонт — большинство работ за 2-4 часа.' },
  { icon: Handshake, text: 'Прозрачные цены без скрытых платежей. Согласование сметы.' },
];

const PRICE_LIST_DATA = [
  { service: 'Замена масла (с фильтром)', price: 'от 800 ₽' },
  { service: 'Компьютерная диагностика', price: 'от 1000 ₽' },
  { service: 'Диагностика ходовой части', price: 'от 500 ₽' },
  { service: 'Ремонт тормозной системы', price: 'от 1500 ₽' },
  { service: 'Замена свечей зажигания', price: 'от 400 ₽' },
  { service: 'Полный шиномонтаж (R16)', price: 'от 1800 ₽' },
];

const CONTACT_INFO = {
  address: 'г. Вашгород, ул. Автомобилистов, 10',
  phone1: '+7 (495) 123-45-67',
  phone2: '+7 (903) 987-65-43',
  email: 'info@autoservice-drive.ru',
};

// --- Вспомогательные Компоненты ---

// @ts-ignore
const CtaButton = ({ text, icon: Icon, onClick, href, className = '' }) => (
  <a
    href={href}
    onClick={onClick}
    className={`
      flex items-center justify-center space-x-2 px-6 py-3 text-lg font-semibold
      bg-orange-600 text-white rounded-xl shadow-lg hover:bg-orange-700
      transition duration-300 ease-in-out transform hover:scale-[1.02]
      focus:outline-none focus:ring-4 focus:ring-orange-500/50
      ${className}
    `}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </a>
);

// @ts-ignore
const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
    <Icon className="w-8 h-8 text-orange-600 mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// @ts-ignore
const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-12 md:py-16 ${className}`}>
    <div className="container mx-auto px-4 max-w-7xl">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

// --- Страницы ---
// @ts-ignore

const ContactForm = ({ setActivePage }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', comment: '' });
  const [status, setStatus] = useState(''); // 'idle', 'loading', 'success', 'error'

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (status === "error") setStatus("idle") // Сброс ошибки при начале ввода
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!formData.phone) {
      setStatus('error');
      return;
    }
    setStatus('loading');

    // Имитация отправки формы (задержка 1.5 секунды)
    console.log('Отправка данных формы:', formData);
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', service: '', comment: '' }); // Очистка формы
    }, 1500);
  };

  const statusMessage = {
    idle: 'Оставьте заявку, и мы свяжемся с вами в течение 10 минут.',
    loading: 'Отправка заявки...',
    success: '✅ Заявка успешно отправлена! Ожидайте звонка.',
    error: '⚠️ Пожалуйста, укажите ваш номер телефона. Это обязательное поле.',
  };

  // @ts-ignore
  return (
    <Section id="contacts" title="Контакты и Запись">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Контактная информация */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Наши данные
          </h3>
          <p className="flex items-center space-x-3 text-gray-600 mb-3">
            <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0" />
            <span>{CONTACT_INFO.address}</span>
          </p>
          <p className="flex items-center space-x-3 text-gray-600 mb-3">
            <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
            <a
              href={`tel:${CONTACT_INFO.phone1}`}
              className="text-blue-600 hover:underline"
            >
              {CONTACT_INFO.phone1}
            </a>
          </p>
          <p className="flex items-center space-x-3 text-gray-600 mb-3">
            <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
            <a
              href={`tel:${CONTACT_INFO.phone2}`}
              className="text-blue-600 hover:underline"
            >
              {CONTACT_INFO.phone2}
            </a>
          </p>
          <p className="flex items-center space-x-3 text-gray-600 mb-6">
            <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-blue-600 hover:underline"
            >
              {CONTACT_INFO.email}
            </a>
          </p>

          <div className="bg-gray-100 p-4 rounded-xl shadow-inner">
            <h4 className="font-bold mb-2">На карте:</h4>
            {/* Имитация карты с placeholder-изображением */}
            <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-sm">
              <p className="p-2">Местоположение автосервиса на карте</p>
            </div>
          </div>
        </div>

        {/* Форма заявки */}
        <div className="bg-white p-6 rounded-xl shadow-2xl border border-orange-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-5">
            Записаться на ремонт
          </h3>
          <div
            className={`p-3 mb-4 rounded-lg text-sm font-medium ${status === "success" ? "bg-green-100 text-green-700" : status === "error" ? "bg-red-100 text-red-700" : "bg-blue-50 text-blue-600"}`}
          >
            {statusMessage[status]}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Иван"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (XXX) XXX-XX-XX"
                required
                className={`mt-1 block w-full border ${formData.phone || status !== "error" ? "border-gray-300" : "border-red-500"} rounded-lg shadow-sm p-3 focus:border-orange-500 focus:ring-orange-500`}
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700"
              >
                Выберите услугу
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:border-orange-500 focus:ring-orange-500 bg-white"
              >
                <option value="">-- Выберите из списка --</option>
                {SERVICES_DATA.map(s => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700"
              >
                Комментарий (описание проблемы)
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={3}
                value={formData.comment}
                onChange={handleChange}
                placeholder="Например: Стук в передней подвеске при повороте"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:border-orange-500 focus:ring-orange-500"
              ></textarea>
            </div>
            <CtaButton
              text={status === "loading" ? "Отправка..." : "Отправить заявку"}
              className="w-full"
              icon={undefined}
              onClick={undefined}
              href={undefined}
            />
          </form>
        </div>
      </div>
    </Section>
  )
};

/**
 * Страница Прайс
 */
const PricePage = () => (
  <Section id="price" title="Прайс-лист на популярные услуги">
    <div className="overflow-x-auto bg-white p-4 rounded-xl shadow-xl">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Услуга
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Цена от ...
          </th>
        </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {PRICE_LIST_DATA.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {item.service}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold text-orange-600">
              {item.price}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    <p className="text-center text-sm text-gray-500 mt-6">
      *Цены являются ориентировочными и могут меняться в зависимости от модели автомобиля и сложности работ. Точную стоимость уточняйте по телефону.
    </p>
  </Section>
);

/**
 * Страница О нас
 */
const AboutPage = () => (
  <Section id="about" title="О нас: Ваш надежный партнер в мире автосервиса">
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-2xl">
      <div className="md:flex md:space-x-8 items-start">
        <div className="mb-6 md:mb-0 md:w-1/2">
          {/* Фото/Имитация фото */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">

            <img
              src="https://placehold.co/600x400/0F172A/ffffff?text=Фото+нашего+автосервиса"
              alt="Автосервис"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Автосервис **"Драйв"** был основан в 2010 году командой энтузиастов, увлеченных автомобилями. Наша миссия — предоставлять высококачественные услуги по ремонту и обслуживанию, которые доступны каждому автовладельцу. Мы не просто чиним машины, мы заботимся о вашей безопасности и спокойствии на дороге.
          </p>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            В нашем распоряжении современное диагностическое оборудование и только сертифицированные запчасти. Каждый мастер имеет опыт работы более 7 лет и регулярно проходит повышение квалификации. Мы гарантируем честное ценообразование и строгое соблюдение сроков.
          </p>
          <ul className="text-gray-700 space-y-2 font-semibold">
            <li>✅ 10+ лет на рынке</li>
            <li>✅ Более 5000 довольных клиентов</li>
            <li>✅ Только оригинальные запчасти</li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
);

/**
 * Страница Услуги
 */
const ServicesPage = () => (
  <Section id="services" title="Все виды услуг для вашего автомобиля">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES_DATA.map(service => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
    <div className="text-center mt-10">
      <CtaButton
        text="Посмотреть Прайс-лист"
        onClick={() => (window.location.hash = "#/price")} // Используем хэш для навигации в SPA
        className="inline-flex"
        icon={undefined}
        href={undefined}
      />
    </div>
  </Section>
)

// @ts-ignore
const HomePage = ({ setActivePage }) => (
  <>
    {/* Герой-секция (CTA) */}
    <div className="bg-gray-900 text-white py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575231362095-2c8c6a51d451?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-30"></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
          {SITE_TITLE}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-md">
          {TAGLINE}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <CtaButton
            text="Записаться онлайн"
            onClick={() => setActivePage("contacts")}
            className="bg-orange-600 hover:bg-orange-700"
            icon={undefined}
            href={undefined}
          />
          <CtaButton
            text="Позвонить нам"
            href={`tel:${CONTACT_INFO.phone1}`}
            icon={Phone}
            className="bg-gray-700 hover:bg-gray-600"
            onClick={undefined}
          />
        </div>
      </div>
    </div>

    {/* Секция Услуги (3-6 плиток) */}
    <Section
      id="home-services"
      title="Наши основные услуги"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_DATA.slice(0, 4).map(service => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description.substring(0, 60) + "..."}
            icon={service.icon}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <CtaButton
          text="Посмотреть все услуги"
          onClick={() => setActivePage("services")}
          className="bg-blue-600 hover:bg-blue-700"
          icon={undefined}
          href={undefined}
        />
      </div>
    </Section>

    {/* Секция Преимущества */}
    <Section id="advantages" title="Почему выбирают нас">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {ADVANTAGES_DATA.map((adv, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-orange-600 transition duration-300 hover:shadow-2xl"
          >
            <adv.icon className="w-10 h-10 text-orange-600 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-700">{adv.text}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Секция Фото/Примеры работ */}
    <Section id="photos" title="Примеры наших работ" className="bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <PhotoPlaceholder text="Ремонт двигателя" />
        <PhotoPlaceholder text="Кузовные работы" />
        <PhotoPlaceholder text="Техобслуживание" />
        <PhotoPlaceholder text="Диагностика" />
      </div>
    </Section>

    {/* Финальный CTA */}
    <div className="bg-orange-600 py-12 text-center">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Готовы записаться или есть вопросы?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <CtaButton
            text="Записаться сейчас"
            onClick={() => setActivePage("contacts")}
            className="bg-white text-orange-600 hover:bg-gray-100"
            icon={undefined}
            href={undefined}
          />
          <CtaButton
            text="Позвонить"
            href={`tel:${CONTACT_INFO.phone1}`}
            icon={Phone}
            className="bg-gray-700 hover:bg-gray-600"
            onClick={undefined}
          />
        </div>
      </div>
    </div>
  </>
)

// @ts-ignore
const PhotoPlaceholder = ({ text }) => (
  <div className="relative overflow-hidden rounded-xl shadow-md h-32 md:h-48 group">

    <img
      src={`https://placehold.co/400x300/334155/ffffff?text=${text.replace(' ', '+')}`}
      alt={text}
      className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <p className="text-white text-lg font-bold">{text}</p>
    </div>
  </div>
);

// --- Основной Компонент Приложения ---

const App = () => {
  // Использование хэша URL для управления страницами (SPA routing simulation)
  const getPageFromHash = useCallback(() => {
    const hash = window.location.hash.replace('#/', '');
    const validPages = ['home', 'services', 'price', 'about', 'contacts'];
    return validPages.includes(hash) ? hash : 'home';
  }, []);

  const [activePage, setActivePage] = useState(getPageFromHash);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Обновление страницы при изменении хэша
    const handleHashChange = () => setActivePage(getPageFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [getPageFromHash]);

  const navigate = (page: React.SetStateAction<string>) => {
    window.location.hash = `/${page}`
    setActivePage(page)
    setIsMenuOpen(false)
  }

  const renderPage = () => {
    switch (activePage) {
      case 'services':
        return <ServicesPage />;
      case 'price':
        return <PricePage />;
      case 'about':
        return <AboutPage />;
      case 'contacts':
        return <ContactForm setActivePage={navigate} />;
      case 'home':
      default:
        return <HomePage setActivePage={navigate} />;
    }
  };

  const menuItems = [
    { name: 'Главная', page: 'home' },
    { name: 'Услуги', page: 'services' },
    { name: 'Прайс', page: 'price' },
    { name: 'О нас', page: 'about' },
    { name: 'Контакты', page: 'contacts' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Подключение Tailwind CSS */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* SEO-мета для демонстрации */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{SITE_TITLE} - {TAGLINE}</title>
      <meta name="description" content="Полный спектр услуг автосервиса: диагностика, ремонт двигателей, подвески, кузовной ремонт. Быстро, качественно, с гарантией." />

      {/* Шапка/Навигация */}
      <header className="sticky top-0 z-50 bg-gray-900 shadow-xl">
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center py-4">
          {/* Логотип */}
          <div
            className="text-2xl font-extrabold text-orange-600 cursor-pointer hover:text-orange-500 transition"
            onClick={() => navigate('home')}
          >
            {SITE_TITLE.toUpperCase()}
          </div>

          {/* Меню для Desktop */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map(item => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                className={`text-lg font-medium py-2 transition duration-300 ${
                  activePage === item.page
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-300 hover:text-orange-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA на Desktop */}
          <a
            href={`tel:${CONTACT_INFO.phone1}`}
            className="hidden md:block px-4 py-2 text-sm font-semibold bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
          >
            {CONTACT_INFO.phone1}
          </a>

          {/* Кнопка Меню для Mobile */}
          <button
            className="md:hidden text-gray-300 hover:text-orange-400 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Меню */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } bg-gray-800`}
        >
          <nav className="flex flex-col p-4 space-y-2">
            {menuItems.map(item => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                className={`text-left text-lg font-medium p-3 rounded-lg transition duration-300 ${
                  activePage === item.page
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-orange-400'
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href={`tel:${CONTACT_INFO.phone1}`}
              className="mt-4 block w-full text-center px-4 py-3 text-lg font-bold bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              <Phone className="w-5 h-5 inline mr-2" /> Позвонить
            </a>
          </nav>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Футер */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-lg font-bold text-orange-600 mb-2">{SITE_TITLE}</p>
          <p className="text-sm mb-4">
            {CONTACT_INFO.address}
            <br />
            <a href={`tel:${CONTACT_INFO.phone1}`} className="hover:text-orange-400 transition">{CONTACT_INFO.phone1}</a> | <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-400 transition">{CONTACT_INFO.email}</a>
          </p>
          <nav className="space-x-4 mb-4">
            {menuItems.map(item => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                className="text-sm hover:text-orange-400 transition"
              >
                {item.name}
              </button>
            ))}
          </nav>
          <p className="text-xs mt-6">&copy; {new Date().getFullYear()} {SITE_TITLE}. Все права защищены. </p>
          <p className="text-xs text-gray-600 mt-1">
            *Требуется SSL и SEO-оптимизация (мета-теги, чистая структура) для PageSpeed 90+.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
