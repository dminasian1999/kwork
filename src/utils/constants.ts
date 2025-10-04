import payment from "../images/payment-img.jpg"
import { AddressT, NavItemT } from "./types.ts"
import logo from '../utils/images/logo/logo.png'
import bgHero from '../utils/images/bgHero.jpg'
import bgHero2 from '../utils/images/bgHero2.jpg'
import bag from '../utils/images/icons/bag.png'
import dress from '../utils/images/icons/dress.png'
import location from '../utils/images/icons/location.png'
import switchUser from '../utils/images/icons/switchUser.png'
import dress2 from '../utils/images/icons/dress2.png'
import cat1img from '../utils/images/каталог1.jpg'
import cat2img from '../utils/images/каталог2.jpg'
import cat3img from '../utils/images/каталог3.jpg'
import sample1 from '../utils/images/exaples/exaple1.jpg'
import sample2 from '../utils/images/exaples/exaple2.jpg'
import sample3 from '../utils/images/exaples/exaple3.jpg'
import sample4 from '../utils/images/exaples/exaple4.jpg'
import read1 from '../utils/images/exaples/ready1.jpg'
import read2 from '../utils/images/exaples/ready2.jpg'
import read3 from '../utils/images/exaples/ready3.jpg'
import icon1 from '../utils/images/icons/whatsApp.png'
import icon2 from '../utils/images/icons/telegram.png'
import icon3 from '../utils/images/icons/vk.png'
import map from '../utils/images/exaples/map.png'
import hero3 from '../utils/images/hero3.png'
// ====== Assets ======

export const logoImg = logo;
export const bagIcon = bag;
export const dressIcon = dress;
export const locationIcon = location;
export const switchUserIcon = switchUser;
export const dress2Icon = dress2;
export const bgHeroImg = bgHero;
export const bgHero2Img = bgHero2;
export const cat1 = cat1img;
export const cat2 = cat2img;
export const cat3 = cat3img;
export const ex1 = sample1;
export const ex2 = sample2;
export const ex3 = sample3;
export const ex4 = sample4;
export const readyImg1 = read1;
export const readyImg2 = read2;
export const readyImg3 = read3;
export const mapImg = map;
export const hero3Img = hero3;

export const icons = [
  { label: "wh", imageUrl:icon1, alt: "w" },
  { label: "t", imageUrl: icon2, alt: "t" },
  { label: "vk", imageUrl: icon3, alt: "vk" },
]


export const categoryTiles = [
  { label: "Одежда", imageUrl:ex1, alt: "Одежда" },
  { label: "Обувь", imageUrl: ex2, alt: "Обувь" },
  { label: "Аксессуары", imageUrl: ex3, alt: "Аксессуары" },
  { label: "Сумки", imageUrl: ex3, alt: "Сумки" },
  {
    label: "Для вечеринок",
    imageUrl: "/path/to/img5.jpg",
    alt: "Для вечеринок",
  },
]
export const rentalItems = [
  { title: "Тренч looks", price: "7 900 ₽",img: cat1 },
  { title: "Тренч looks", price: "7 900 ₽" ,img: cat2},
  { title: "Тренч looks", price: "7 900 ₽" ,img: cat3},
]
export const readyItems = [
  { title: "ШУБА ИЗ ЭКО МЕХА", price: "7 900 ₽",img: readyImg1 },
  { title: "ШУБА ИЗ ЭКО МЕХА", price: "7 900 ₽" ,img: readyImg2},
  { title: "ШУБА ИЗ ЭКО МЕХА", price: "7 900 ₽" ,img: readyImg3},
]

export const features = [
  {
    iconClass: bagIcon,
    title: "Большой каталог",
    subtitle: "1000+ изделий",
  },
  {
    iconClass: dressIcon,
    title: "Быстро готовы сделать",
    subtitle: "изделие на заказ",
  },
  {
    iconClass: locationIcon,
    title: "Приходите в наш шоурум",
    subtitle: "все померить",
  },
  {
    iconClass: switchUserIcon,
    title: "Стилист онлайн или оффлайн",
    subtitle: "может составить ваш лучший лук",
  },
  {
    iconClass: dress2Icon,
    title: "Вы всегда можете подобрать себе",
    subtitle: "образ в каталоге образов",
  },
]

export const navItems: NavItemT[] = [
  { title: "Каталог", route: "Каталог" },
  { title: "Пошив", route: "Пошив" },
  { title: "Образы", route: "Образы" },
]

export const countries = [
  "Albania",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Aruba (Isle)",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Azores (Isles)",
  "Bahamas (Isles)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Benin",
  "Bermuda (Isles)",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cote d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominican Republic",
  "Ecuador",
  "El Salvador",
  "Estonia",
  "Ethiopia",
  "French Guiana",
  "Gabon",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Great Britain and Northern Ireland",
  "Greenland (see Denmark)",
  "Guadeloupe",
  "Guam (Isle)",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Ireland",
  "Italy",
  "Jamaica",
  "Netherlands",
  "Netherlands Antilles (see Curaçao)",
  "South Africa",
  "Tajikistan",
  "Tibet (see China PR)",
  "Togo",
  "Turkmenistan",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "Uruguay",
  "USA",
  "Uzbekistan",
  "Vanuatu (Isles)",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Zambia",
  "Zimbabwe",
]
// ====== Collections ======

export const baseUrl = "http://localhost:8080"
// export const baseUrl = "https://shrek-back.onrender.com";

export const baseUrlUsers = baseUrl + "/users"

export const createToken = (login: string, password: string) =>
  `Basic ${window.btoa(`${login}:${password}`)}`

// ====== Admin Info ======
export const adminInfo = {
  username: "admin",
  firstName: "Jewelry",
  lastName: "Admin",
  phone: "+9725858585",
  address: "Old City, Jerusalem, Israel",
  city: "Israel",
  email: "sevan@gmail.com",
}

// ====== Defaults & Timers ======
export const defaultPic = ""
export const periodMinute = 10000 * 60 // 10 hours

// ====== Materials ======
export const allMaterials = [
  "Wood",
  "Metal",
  "Plastic",
  "Glass",
  "Stone",
  "Ceramic",
  "Textile",
  "Leather",
  "Paper",
  "Gold",
  "Silver",
  "Bronze",
  "Copper",
  "Iron",
  "Steel",
  "Marble",
  "Concrete",
  "Clay",
  "Wool",
  "Cotton",
  "Silk",
  "Bamboo",
  "Porcelain",
]

// ====== Categories with Types ======
export const categories = [
  {
    title: "Ceramics",
    imageUrl:
      "https://c7.alamy.com/comp/CXD46G/romanian-traditional-pottery-on-display-for-sale-CXD46G.jpg",
    route: "ceramics",
    types: [
      {
        title: "Tiles, name-tiles & coasters",
        route: "tiles",
        icon: "fa fa-th-large",
      },
      { title: "Biblical tiles", route: "biblical-tiles", icon: "fa fa-book" },
      {
        title: "Tables, murals & borders",
        route: "tables-murals-borders",
        icon: "fa fa-border-style",
      },
      { title: "Armenian", route: "armenian", icon: "fa fa-flag" },
      { title: "Judaica", route: "judaica", icon: "fa fa-star-of-david" },
      { title: "Bowls", route: "bowls", icon: "fa fa-bowl-rice" },
      { title: "Pomegranates", route: "pomegranates", icon: "fa fa-apple-alt" },
      { title: "Vases", route: "vases", icon: "fa fa-wine-bottle" },
      {
        title: "Assorted Pottery",
        route: "assorted-pottery",
        icon: "fa fa-shapes",
      },
      { title: "Mugs", route: "mugs", icon: "fa fa-mug-hot" },
      { title: "Hangings", route: "hangings", icon: "fa fa-image" },
      { title: "Spoon rests", route: "spoon-rests", icon: "fa fa-spoon" },
    ],
  },
  {
    title: "Jewelry",
    imageUrl: "https://e-com-front-nine.vercel.app/assets/jewelry-BLreq-ud.jpg",
    route: "jewelry",
    icon: "fa fa-gem",
    types: [
      { title: "Rings", route: "jewelry/rings", icon: "fa fa-ring" },
      { title: "Necklaces", route: "jewelry/necklaces", icon: "fa fa-link" },
      { title: "Earrings", route: "jewelry/earrings", icon: "fa fa-circle" },
      { title: "Bracelets", route: "jewelry/bracelets", icon: "fa fa-bars" },
    ],
  },
  {
    title: "Religious",
    imageUrl:
      "https://thumbs.dreamstime.com/b/interesting-collection-bronze-items-silvering-gilding-green-patina-weapons-doorknobs-bells-dishes-production-different-235851117.jpg",
    route: "religious",
    types: [
      { title: "Crosses", route: "religious/crosses", icon: "fa fa-cross" },
      { title: "Icons", route: "religious/icons", icon: "fa fa-image" },
      {
        title: "Prayer Books & Bibles",
        route: "religious/books",
        icon: "fa fa-book",
      },
      {
        title: "Incense, Oils & Prayer Items",
        route: "religious/incense-oils",
        icon: "fa fa-fire",
      },
      {
        title: "Church Crafts",
        route: "religious/church-crafts",
        icon: "fa fa-church",
      },
      {
        title: "Brochures & Prayers",
        route: "religious/brochures",
        icon: "fa fa-scroll",
      },
      {
        title: "Candles",
        route: "religious/candles",
        icon: "fa fa-candle-holder",
      },
      {
        title: "Pilgrimage Souvenirs",
        route: "religious/pilgrimage-souvenirs",
        icon: "fa fa-walking",
      },
      {
        title: "Saint Figurines",
        route: "religious/saint-figurines",
        icon: "fa fa-user-nurse",
      },
      {
        title: "Religious Jewelry",
        route: "religious/jewelry",
        icon: "fa fa-gem",
      },
    ],
  },
  {
    title: "Souvenirs",
    imageUrl:
      "https://cdn.sanity.io/images/hqzqrzyr/production-icelolly/5c799fe6328b06f295de4ecfe5daf032d2c3083e-4000x2667.jpg?rect=0,482,4000,1704&w=1080&h=460&q=70&fit=crop&auto=format&dpr=2",
    route: "souvenirs",
    types: [
      { title: "Keychains", route: "souvenirs/keychains", icon: "fa fa-key" },
      {
        title: "Postcards & Magnets",
        route: "souvenirs/postcards-magnets",
        icon: "fa fa-paperclip",
      },
      {
        title: "Mini Statues",
        route: "souvenirs/mini-statues",
        icon: "fa fa-chess-knight",
      },
      { title: "Tiles", route: "souvenirs/tiles", icon: "fa fa-border-all" },
      {
        title: "Gift Packaging",
        route: "souvenirs/gift-packaging",
        icon: "fa fa-box",
      },
      {
        title: "Personal Accessories",
        route: "souvenirs/personal-accessories",
        icon: "fa fa-user",
      },
      {
        title: "Holy Water, Oils & Scents",
        route: "souvenirs/holy-scents",
        icon: "fa fa-leaf",
      },
      {
        title: "Games & Gift Sets",
        route: "souvenirs/gift-sets",
        icon: "fa fa-gift",
      },
      {
        title: "Booklets & Guides",
        route: "souvenirs/guides",
        icon: "fa fa-map",
      },
      {
        title: "Home Décor",
        route: "souvenirs/home-decor",
        icon: "fa fa-home",
      },
    ],
  },
]
export const sizeOptions = [
  { name: "XS", value: "XS" },
  { name: "S", value: "S" },
  { name: "M", value: "M" },
  { name: "L", value: "L" },
  { name: "XL", value: "XL" },
  { name: "Custom…", value: "custom" },
]
export const LABELS: Record<keyof AddressT, string> = {
  fullName: "Full Name",
  street: "Street Address",
  city: "City",
  state: "State / Region",
  zipCode: "Postal Code",
  country: "Country",
  phone: "Phone Number",
}

export const allColors = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Green", value: "green" },
  { name: "Black", value: "black" },
  { name: "White", value: "white" },
  { name: "Yellow", value: "yellow" },
  { name: "Orange", value: "orange" },
  { name: "Purple", value: "purple" },
  { name: "Brown", value: "brown" },
  { name: "Gray", value: "gray" },
  { name: "Beige", value: "beige" },
  { name: "Pink", value: "pink" },
  { name: "Gold", value: "gold" },
  { name: "Silver", value: "silver" },
  { name: "Ivory", value: "ivory" },
  { name: "Cyan", value: "cyan" },
  { name: "Teal", value: "teal" },
  { name: "Olive", value: "olive" },
  { name: "Maroon", value: "maroon" },
  { name: "Navy", value: "navy" },
  { name: "Turquoise", value: "turquoise" },
  { name: "Coral", value: "coral" },
  { name: "Lavender", value: "lavender" },
  { name: "Mint", value: "mintcream" },
  { name: "Charcoal", value: "#36454F" },
  { name: "Sand", value: "#C2B280" },
  { name: "Other", value: "other" },
]

export const initialUser = {
  id: "user-123",
  name: "Иван Петров",
  // Статусы: 'reader', 'premium', 'admin', 'author', 'emitter'
  status: "reader",
  premiumEndDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Премиум на 3 дня
  isPremium: false,
  favorites: [1, 5, 8], // ID постов
}

export const mockPosts = [
  {
    id: 1,
    title: "Обзор рынка: Итоги квартала",
    excerpt: "Ключевые события и тренды...",
    content: "Полный анализ основных отраслей...",
    isPremium: false,
    comments: ["Отлично!"],
    image: "https://placehold.co/400x200/4c7c8c/ffffff?text=Общий+Пост",
  },
  {
    id: 2,
    title: 'Анализ "Компании А" (Премиум)',
    excerpt: "Детальный разбор финансовой модели...",
    content: "Эксклюзивные прогнозы и оценка...",
    isPremium: true,
    comments: [],
    image: "https://placehold.co/400x200/d97706/ffffff?text=Премиум+Анализ",
  },
  {
    id: 3,
    title: "Что такое мультипликаторы?",
    excerpt: "Простое объяснение основных понятий...",
    content: "Определение P/E, EV/EBITDA и их применение.",
    isPremium: false,
    comments: ["Полезно!", "Спасибо."],
    image:
      "https://placehold.co/400x200/10b981/ffffff?text=Образовательный+Пост",
  },
  {
    id: 4,
    title: "Текущая структура портфеля",
    excerpt: "Разбор активов и стратегии...",
    content: "Подробное описание текущих позиций и обоснование.",
    isPremium: true,
    comments: [],
    image: "https://placehold.co/400x200/b91c1c/ffffff?text=Премиум+Портфель",
  },
  {
    id: 5,
    title: "Влияние инфляции на S&P 500",
    excerpt: "Как защитить свой капитал...",
    content: "Исторический анализ и актуальные стратегии.",
    isPremium: false,
    comments: [],
    image: "https://placehold.co/400x200/6b7280/ffffff?text=Рынок",
  },
  {
    id: 6,
    title: "Админ-пост (только для демонстрации)",
    excerpt: "Этот пост виден всем, но создан админом.",
    content: "Демонстрационный пост для проверки ролей.",
    isPremium: false,
    comments: [],
    image: "https://placehold.co/400x200/5b21b6/ffffff?text=Demo+Admin",
  },
  {
    id: 7,
    title: "Премиум-пост от Автора",
    excerpt: "Эксклюзивный материал от нашего автора.",
    content: "Очень важный и ценный материал.",
    isPremium: true,
    comments: [],
    image: "https://placehold.co/400x200/eab308/ffffff?text=Авторский+контент",
  },
  {
    id: 8,
    title: 'Обзор "Компании B" (Премиум)',
    excerpt: "Детальный разбор финансовой модели...",
    content: "Эксклюзивные прогнозы и оценка...",
    isPremium: true,
    comments: [],
    image: "https://placehold.co/400x200/0369a1/ffffff?text=Премиум+B",
  },
]

export const mockMultipliers = [
  {
    id: 1,
    company: "TechNova",
    pe: 25.5,
    evEbitda: 18.2,
    roe: 0.15,
    description: "Крупная IT-компания с высокими темпами роста.",
  },
  {
    id: 2,
    company: "GlobalBank",
    pe: 12.1,
    evEbitda: 7.9,
    roe: 0.08,
    description: "Один из крупнейших банков региона, стабильные дивиденды.",
  },
  {
    id: 3,
    company: "EnergyPro",
    pe: 8.9,
    evEbitda: 5.5,
    roe: 0.12,
    description: "Энергетический гигант, чувствительный к ценам на сырье.",
  },
  {
    id: 4,
    company: "MediLife",
    pe: 45.0,
    evEbitda: 30.1,
    roe: 0.22,
    description: "Биотехнологическая компания, высокая P/E из-за перспектив.",
  },
]
export const mockHistoricalData = [
  {
    id: 1,
    title: "Кризис 2008 года: Как выжили банки",
    content:
      "Текст о финансовом кризисе и мерах поддержки банковского сектора.",
    graphs: [
      "https://placehold.co/600x300/f87171/ffffff?text=График+кризиса+2008",
    ],
  },
  {
    id: 2,
    title: "Влияние COVID-19 на e-commerce",
    content: "Текст о резком росте онлайн-торговли и логистических проблемах.",
    graphs: [
      "https://placehold.co/600x300/34d399/ffffff?text=График+e-commerce+2020",
    ],
  },
  {
    id: 3,
    title: "Долгосрочные тренды в энергетике",
    content: "Анализ перехода на возобновляемые источники энергии.",
    graphs: [
      "https://placehold.co/600x300/60a5fa/ffffff?text=График+Энергетика",
    ],
  },
]
export const mockFairPrices = [
  {
    id: 1,
    company: "TechNova",
    fairPrice: 150.0,
    currentPrice: 150.5,
    description: "Цена близка к справедливой.",
  },
  {
    id: 2,
    company: "GlobalBank",
    fairPrice: 55.0,
    currentPrice: 53.2,
    description: "Недооценена на 3.2%.",
  },
  {
    id: 3,
    company: "EnergyPro",
    fairPrice: 85.0,
    currentPrice: 88.0,
    description: "Переоценена на 3.5%.",
  },
  {
    id: 4,
    company: "MediLife",
    fairPrice: 200.0,
    currentPrice: 200.0,
    description: "Цена соответствует справедливой.",
  },
]
export const mockPortfolio = [
  { company: "TechNova", share: 40 },
  { company: "GlobalBank", share: 25 },
  { company: "EnergyPro", share: 20 },
  { company: "Cash", share: 15 },
]

export const subscriptionPrices = {
  "1m": 1990,
  "3m": 4990,
  "6m": 8990,
  "12m": 14990,
}








