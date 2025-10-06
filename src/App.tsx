import React from 'react';
// Импортируем иконки для безопасности и чистоты
import {
  Droplets, Minimize, ShieldCheck, Truck, Zap, HeartHandshake, CheckCircle, XCircle,
  Clock, MapPin, Users, Video, QrCode, Lock, MessageSquare, Repeat2, ShoppingBag, Leaf, DollarSign
} from 'lucide-react';

// --- Стилистика: Усиленный Зеленый, Уют и Доверие ---

// Общие стили для кнопок CTA (Синий для Ozon, Фиолетовый для WB)
const ozonButtonClasses = "bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-xl shadow-cyan-300/60 transform hover:scale-[1.03] active:scale-[0.98] tracking-wider uppercase";
const wbButtonClasses = "bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-xl shadow-fuchsia-300/60 transform hover:scale-[1.03] active:scale-[0.98] tracking-wider uppercase";

// Стиль для темных заголовков (Глубокий зеленый)
const titleStyle = "text-4xl sm:text-5xl font-black text-green-900 leading-tight";
// Стиль для иконок в буллитах (Теплый розовый для контраста с зеленым фоном)
const bulletIconClasses = "w-7 h-7 text-pink-600 flex-shrink-0";
// Стиль для основного зеленого акцента (Яркий изумруд)
const primaryAccentClasses = "text-emerald-600";
// Стиль для фона Hero блока
const heroBackground = "bg-emerald-50";


// --- Данные для блоков ---

// Блок 1. Hero / Буллиты
const heroBullets = [
  { icon: Droplets, text: "Насадка всегда промывается в чистой воде" },
  { icon: ShieldCheck, text: "Безопасно для ребёнка (пол без микробов)" },
  { icon: HeartHandshake, text: "Гарантия 365 дней" },
];

// Блок 2. Боль аудитории (Pain Points)
const painPoints = [
  { icon: XCircle, text: "Микробы и грязь остаются на полу → малыш ползает и контактирует с бактериями" },
  { icon: Repeat2, text: "Приходится менять воду по несколько раз → усталость и раздражение" },
  { icon: Clock, text: "Уборка занимает слишком много времени → мама тратит силы вместо отдыха" },
];

// Блок 3. Выгоды и преимущества (Benefits)
const benefits = [
  { icon: Droplets, text: "Чистая вода при каждом полоскании" },
  { icon: ShieldCheck, text: "Безопасный пол для малыша и всей семьи" },
  { icon: Clock, text: "Уборка за 5 минут" },
  { icon: DollarSign, text: "Экономия времени и воды" },
  { icon: HeartHandshake, text: "Гарантия 365 дней" },
];

// Блок 4. Как работает система
const howItWorks = [
  { step: 1, text: "Чистая вода подается на швабру" },
  { step: 2, text: "Грязная вода стекает со швабры в отдельный отсек ведра" },
  { step: 3, text: "Автоматическое разделение чистой и грязной воды (Система AquaSplit)" },
];

// Блок 5. Социальное доказательство (Отзывы)
const testimonials = [
  "«Теперь я спокойно пускаю малыша на пол, зная, что он идеально чистый. Это бесценно!» - Анна, 29 лет.",
  "«Экономлю время, а уборка перестала быть мучением. Ведро делает всю грязную работу!» - Елена, 34 года.",
  "«Ведро реально промывает насадку, и не нужно руками трогать грязь. Чувство чистоты на 100%» - Мария, 27 лет.",
];

// Блок 7. FAQ
const faqData = [
  { q: "Подходит ли для ламината и плитки?", a: "Да, благодаря мягкой насадке из микрофибры и контролю влажности, швабра безопасна для всех типов напольных покрытий, включая ламинат, паркет и плитку." },
  { q: "Можно ли докупить насадки?", a: "Да, запасные насадки доступны для заказа на Ozon и Wildberries. Рекомендуем менять их раз в 3-6 месяцев для максимальной гигиены." },
  { q: "Как быстро доставите?", a: "Доставка осуществляется со склада маркетплейса (Ozon/WB) и обычно занимает от 1 до 3 рабочих дней в крупные города." },
  { q: "Какие размеры ведра?", a: "Размеры ведра: 24х39х19 см. Оно компактно поместится даже в небольшом санузле или кладовой." },
];

// Основной компонент приложения
const App = () => {

  // Компонент для CTA кнопок
  const MarketPlaceButtons = () => (
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
      <a href="#ozon" className={ozonButtonClasses}>
        🛒 Заказать на Ozon
      </a>
      <a href="#wb" className={wbButtonClasses}>
        🛒 Заказать на Wildberries
      </a>
    </div>
  );

  return (
    // Общий фон: мягкий, пастельный градиент с уклоном в зеленый/мятный
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-mint-50 font-sans text-gray-700">

      {/* Header (Блок 9: Юр. информация) */}
      <header className="flex justify-between items-center max-w-6xl mx-auto py-4 px-4 sm:px-8 text-sm text-gray-500">
        <h1 className="text-3xl font-extrabold text-green-700 tracking-wider">
          CLEAN.AI
        </h1>
        <div className="hidden sm:block">
          <a href="#contacts" className="hover:text-green-600 mr-4 transition duration-200">Контакты</a>
          <a href="#policy" className="hover:text-green-600 transition duration-200">Политика конфиденциальности</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto pb-16 px-4 sm:px-8">

        {/* 🟢 Блок 1. Первый экран (Hero-блок) */}
        <section className="pt-8 pb-16">
          <div className={`rounded-[3rem] shadow-2xl p-6 sm:p-12 lg:flex lg:items-center lg:space-x-12 ${heroBackground}`}>

            {/* Текстовый контент */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className={`${titleStyle} mb-4`}>
                🧼 Обезопасьте ребенка от микробов на полу за <span className="text-pink-600">5 минут</span>
              </h2>
              <p className="text-xl text-gray-700 italic font-medium mb-8">
                Швабра, которая промывается только чистой водой при каждом полоскании
              </p>

              {/* Буллиты */}
              <ul className="space-y-4 mb-10">
                {heroBullets.map((bullet, index) => (
                  <li key={index} className="flex items-center space-x-4 text-xl font-semibold text-gray-800">
                    <bullet.icon className={bulletIconClasses} />
                    <span>{bullet.text}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-2xl font-bold text-green-700 mb-4">
                [Заказать со скидкой]
              </h4>
              <MarketPlaceButtons />
            </div>

            {/* Визуал продукта (Placeholder) */}
            <div className="lg:w-1/2 flex justify-center items-center p-4">
              <div className="w-full max-w-md h-72 sm:h-96 bg-white rounded-3xl flex flex-col items-center justify-center p-6 shadow-xl border-4 border-dashed border-green-300 relative">
                <Users className="w-16 h-16 text-green-500 mb-4"/>
                <p className="text-center font-semibold text-gray-700">
                  [Фото: улыбающаяся мама и малыш, играющий на чистом полу]
                </p>
                <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
                  НОВЫЙ УРОВЕНЬ ЧИСТОТЫ
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🟢 Блок 2. Боль аудитории */}
        <section className="py-12">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-4">
            Обычная швабра не моет пол, а только разводит грязь.
          </h3>
          <p className="text-center text-xl text-gray-700 mb-12">
            Почему это опасно для вашего малыша?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-red-400 hover:shadow-xl transition duration-200">
                <div className="flex items-center space-x-3 text-lg font-medium text-gray-800">
                  <point.icon className="w-7 h-7 text-red-500 flex-shrink-0" />
                  <span className="text-red-700 font-bold tracking-tight">Проблема {index + 1}</span>
                </div>
                <p className="mt-4 text-gray-700">{point.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl italic text-gray-800 mt-12 p-6 bg-white rounded-xl shadow-md max-w-5xl mx-auto border-l-4 border-pink-400">
            Мы создали систему, которая решает эти проблемы и дарит маме больше свободного времени для семьи и **100% уверенности** в чистоте.
          </p>
        </section>

        {/* 🟢 Блок 3. Выгоды и преимущества */}
        <section className="py-12">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-10">
            5 ключевых преимуществ для чистоты и безопасности:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl shadow-lg text-center border-b-4 border-emerald-400 transform hover:shadow-xl hover:-translate-y-1 transition duration-200">
                <benefit.icon className={`w-8 h-8 ${primaryAccentClasses} mx-auto mb-3`} />
                <p className="text-md font-bold text-gray-800 tracking-tight">{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 💡 Блок 4. Как работает система + Видеообзор */}
        <section className="py-12">
          <h3 className={`${titleStyle} text-center mb-10`}>
            💡 Как работает система <span className={primaryAccentClasses}>AquaSplit</span>
          </h3>
          <div className="lg:flex lg:space-x-12">

            {/* Инфографика */}
            <div className="lg:w-1/2 space-y-6 mb-10 lg:mb-0">
              {howItWorks.map((stepData, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-xl border-l-8 border-emerald-500 hover:shadow-2xl transition duration-200">
                  <span className="text-4xl font-black text-pink-500 flex-shrink-0">{stepData.step}.</span>
                  <p className="text-lg font-semibold text-gray-700">{stepData.text}</p>
                </div>
              ))}
            </div>

            {/* Видеообзор Placeholder */}
            <div className="lg:w-1/2">
              <div className="w-full h-72 sm:h-80 bg-gray-200 rounded-2xl flex flex-col items-center justify-center shadow-2xl relative border-4 border-gray-300">
                <Video className="w-12 h-12 text-gray-500 mb-2"/>
                <p className="text-center font-semibold text-gray-600">
                  [Встроенное видео: демонстрация ведра и разделения воды]
                </p>
                <button className="absolute bottom-4 bg-emerald-500 text-white font-semibold text-sm px-6 py-2 rounded-full hover:bg-emerald-600 transition shadow-md">
                  Смотреть видеообзор
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 💡 Обновленный CTA-блок после «Как работает система» */}
        <section className={`py-16 rounded-[3rem] shadow-2xl mt-12 border-t-8 border-pink-500 ${heroBackground}`}>
          <h3 className="text-4xl font-black text-center text-green-900 mb-4">
            ✨ Сделайте ваш дом безопаснее уже сегодня!
          </h3>
          <p className="text-center text-xl text-gray-700 mb-10">
            Здоровый малыш и свободное время мамы — в одном простом решении.
          </p>

          {/* Офферы */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10">
            <div className="flex items-center space-x-3 text-gray-800 bg-yellow-100 p-3 rounded-full shadow-md">
              <QrCode className="w-6 h-6 text-orange-500" />
              <span className="font-bold">🔑 Промокод -10% на Ozon (только 72 часа!)</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-800 bg-indigo-100 p-3 rounded-full shadow-md">
              <Truck className="w-6 h-6 text-indigo-500" />
              <span className="font-bold">🚚 Быстрая доставка с Wildberries</span>
            </div>
          </div>

          {/* Кнопки */}
          <MarketPlaceButtons />

          {/* Эмоциональный акцент (Placeholder) */}
          <div className="flex justify-center mt-12">
            <div className="w-full max-w-sm h-48 bg-white rounded-xl flex items-center justify-center border-4 border-dashed border-green-300">
              <HeartHandshake className="w-10 h-10 text-pink-500" />
              <span className="ml-4 text-green-700 font-semibold">Чистота = Спокойствие.</span>
            </div>
          </div>
        </section>

        {/* 💡 Блок 5. Социальное доказательство (Отзывы) */}
        <section className="py-12">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-10">
            Что говорят мамы: Отзывы покупателей
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((text, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-xl border-t-8 border-yellow-300 italic transform hover:scale-[1.02] transition duration-200">
                <MessageSquare className="w-7 h-7 text-yellow-500 mb-3" />
                <p className="text-gray-700 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 💡 Блок 6. Гарантии и доверие */}
        <section className="py-12 bg-white rounded-3xl shadow-inner p-8 border-2 border-emerald-100">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-10">
            Гарантии и Доверие — мы заботимся о вас
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="p-4 bg-green-50 rounded-xl">
              <Lock className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-1">100% гарантия возврата</h4>
              <p className="text-gray-600">Если система вас не устроит, мы вернем деньги в течение 14 дней. Без лишних вопросов.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl">
              <Repeat2 className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-1">Постгарантийное обслуживание</h4>
              <p className="text-gray-600">Бесплатно отправим запчасть в случае поломки даже после окончания годовой гарантии.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl">
              <HeartHandshake className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-1">Клиентская поддержка 24/7</h4>
              <p className="text-gray-600">Наша служба заботы о клиентах всегда на связи. Пишите нам в любое время.</p>
            </div>
          </div>
        </section>

        {/* 💡 Блок 7. FAQ */}
        <section className="py-12">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-10">
            Ответы на популярные вопросы
          </h3>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-pink-300">
                <p className="font-bold text-gray-900 mb-1">
                  Q: {item.q}
                </p>
                <p className="text-gray-700">
                  A: {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 💡 Блок 8. CTA (повтор оффера) */}
        <section className={`py-16 rounded-b-[3rem] shadow-2xl mt-12 text-center border-t-8 border-emerald-500 ${heroBackground}`}>
          <h3 className="text-4xl font-black text-center text-green-900 mb-6">
            ✨ Начните уборку чистой водой уже сегодня ✨
          </h3>

          <div className="flex justify-center space-x-6 mb-8">
            <div className="flex items-center space-x-2 text-gray-800 bg-yellow-100 px-4 py-2 rounded-full shadow-inner">
              <QrCode className="w-5 h-5 text-orange-500" />
              <span className="text-lg font-bold">Промокод -10% на Ozon (только 72 часа!)</span>
            </div>
          </div>

          <MarketPlaceButtons />
        </section>

      </main>

      {/* 💡 Блок 9. Footer (дополнительная информация) */}
      <footer className="mt-12 text-center py-8 bg-green-800 text-green-100">
        <div className="max-w-6xl mx-auto text-sm px-4 sm:px-8">
          <p className="mb-2 font-semibold">ООО "КЛИН.АИ" | ОГРН 123456789</p>
          <p className="mb-4">Москва, ул. Чистоты, д. 5, офис 101 | <a href="tel:+74950000000" className="hover:underline">8 (495) 000-00-00</a></p>

          <div className="space-x-4 flex justify-center flex-wrap">
            <a id="contacts" href="#" className="hover:text-white transition duration-200">Контакты</a>
            <a id="policy" href="#" className="hover:text-white transition duration-200">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition duration-200">Договор оферты</a>
          </div>
          <p className="mt-6 text-xs opacity-70">
            &copy; {new Date().getFullYear()} CLEAN.AI. Все права защищены.
            <br/>
            *Данные о доставке и промокоде носят ознакомительный характер.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
