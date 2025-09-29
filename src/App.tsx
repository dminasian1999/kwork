import React, { useCallback, useEffect, useMemo, useState } from "react"
import "./index.css"
import {
  initialUser,
  mockFairPrices,
  mockHistoricalData,
  mockMultipliers,
  mockPortfolio,
  mockPosts,
  subscriptionPrices,
} from "./utils/constants"
import AdminPanel from "./components/AdminPanel.tsx"
import AuthModal from "./components/AuthModal.tsx"
import HistoricalPage from "./components/HistoricalPage.tsx"
import PostsPage from "./components/PostsPage.tsx"
import FairPricesPage from "./components/FairPricesPage.tsx"
import PieChartNav from "./components/PieChartNav.tsx"
import Tooltip from "./components/Tooltip.tsx"
import PortfolioPage from "./components/PortfolioPage.tsx"
import StorePage from "./components/StorePage.tsx"
import ProfilePage from "./components/ProfilePage.tsx"


export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [user, setUser] = useState(initialUser)
  const [posts, setPosts] = useState(mockPosts)
  const [fairPrices, setFairPrices] = useState(mockFairPrices)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [adminPriceInput, setAdminPriceInput] = useState(
    subscriptionPrices["1m"],
  )
  const [adminStatusInput, setAdminStatusInput] = useState(user.status)
  const [message, setMessage] = useState("") // Для сообщений пользователю

  // Проверка статуса подписки
  useEffect(() => {
    const checkPremium = () => {
      const now = Date.now()
      const end = user.premiumEndDate.getTime()
      const isPremium =
        user.status === "premium" ||
        user.status === "admin" ||
        user.status === "author" ||
        user.status === "emitter" ||
        end > now

      // Обновляем статус только если он изменился
      if (user.isPremium !== isPremium) {
        setUser(u => ({ ...u, isPremium }))
      }
    }

    checkPremium()
    // Проверка каждую минуту
    const intervalId = setInterval(checkPremium, 60000)
    return () => clearInterval(intervalId)
  }, [user.premiumEndDate, user.status, user.isPremium])

  // Симуляция обновления данных P5 раз в час
  useEffect(() => {
    const updateCurrentPrices = () => {
      setFairPrices(prevPrices =>
        prevPrices.map(item => ({
          ...item,
          // Имитация небольшой случайной флуктуации, как будто "подтянулись" данные
          currentPrice: parseFloat(
            (item.currentPrice * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2),
          ),
        })),
      )
      setMessage(
        `[Система] Цены обновлены (имитация внешнего источника) в ${new Date().toLocaleTimeString()}`,
      )
    }

    updateCurrentPrices() // Первичное обновление
    const intervalId = setInterval(updateCurrentPrices, 3600000) // 1 час
    // Для демо - можно поставить 60000 (1 минута)
    // const intervalId = setInterval(updateCurrentPrices, 60000);

    return () => clearInterval(intervalId)
  }, [])

  // Установка статуса премиум для проверки
  const setPremiumForDemo = durationInDays => {
    const newEndDate = new Date(
      Date.now() + durationInDays * 24 * 60 * 60 * 1000,
    )
    setUser(u => ({
      ...u,
      status: "premium",
      premiumEndDate: newEndDate,
      isPremium: true,
    }))
    setMessage(
      `Премиум-статус активирован на ${durationInDays} дней! (Имитация оплаты)`,
    )
    setCurrentPage("profile")
  }

  // --- Навигация и роли ---
  const navigate = useCallback(pageId => {
    setCurrentPage(pageId)
    window.scrollTo(0, 0)
  }, [])

  const isAdminOrAbove = user.status === "admin"
  const isAuthorOrAbove =
    isAdminOrAbove || user.status === "author" || user.status === "emitter"
  const isAuthenticated = user.id !== "guest" // Простая проверка авторизации

  const navItems = [
    { id: "home", name: "Главная", requiresAuth: false },
    { id: "multipliers", name: "Мультипликаторы", requiresAuth: false },
    { id: "historical", name: "Исторические данные", requiresAuth: false },
    { id: "posts", name: "Посты", requiresAuth: false },
    {
      id: "fairPrices",
      name: "Справедливые цены",
      requiresAuth: user.isPremium,
    },
    { id: "portfolio", name: "Текущий портфель", requiresAuth: user.isPremium },
    { id: "store", name: "Магазин", requiresAuth: false },
    { id: "profile", name: "Профиль", requiresAuth: true },
  ].filter(item => item.id !== "profile" || isAuthenticated) // Профиль виден только авторизованным

  // --- Компонент: Header ---
  const Header = () => (
    <header className="bg-gray-900 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-extrabold text-indigo-400 mb-2 md:mb-0">
          GEN IMAGE
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4 text-sm font-medium">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`px-3 py-1.5 rounded-lg transition duration-200 
                ${currentPage === item.id ? "bg-indigo-600 text-white shadow-lg" : "text-gray-300 hover:bg-gray-700"}
                ${item.requiresAuth && !user.isPremium ? "opacity-50 cursor-not-allowed" : ""}
              `}
              disabled={
                item.requiresAuth &&
                !user.isPremium &&
                item.id !== "fairPrices" &&
                item.id !== "portfolio"
              }
            >
              {item.name}
              {item.requiresAuth && !user.isPremium && (
                <span className="ml-1 text-xs">🔒</span>
              )}
            </button>
          ))}
          {!isAuthenticated && (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition duration-200"
            >
              Войти
            </button>
          )}
        </nav>
      </div>
    </header>
  )

  // --- Компонент: Footer ---
  const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-700 mt-12 py-6">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p className="text-sm mb-2">
          <span className="font-bold text-red-500">Дисклеймер:</span> Все
          материалы предоставлены исключительно в информационных целях и не
          являются инвестиционной рекомендацией.
        </p>
        <a
          href="#documents"
          className="text-indigo-400 hover:text-indigo-300 text-sm transition duration-200"
        >
          Политика конфиденциальности и Условия использования
        </a>
      </div>
    </footer>
  )

  // --- Страница 1: Главная (Home) ---
  const HomePage = () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-white mb-6">
        Аналитический Портал "GEN IMAGE"
      </h1>
      <p className="text-lg text-gray-300 max-w-3xl text-center mb-10">
        Добро пожаловать на ваш личный помощник в мире финансов. Мы
        предоставляем структурированные данные, аналитические отчеты и
        инструменты для принятия взвешенных инвестиционных решений.
      </p>
      <PieChartNav navigate={navigate} />
    </div>
  )

  // --- Страница 2: Мультипликаторы (Multipliers) ---
  const MultipliersPage = () => {
    const [sortKey, setSortKey] = useState(null)
    const [sortDirection, setSortDirection] = useState("asc") // 'asc' | 'desc'
    const [filterText, setFilterText] = useState("")

    const columnDefs = [
      {
        key: "company",
        name: "Компания",
        description: "Полное название компании.",
      },
      {
        key: "pe",
        name: "P/E",
        description:
          'Отношение цены акции к прибыли на акцию. Чем ниже, тем "дешевле".',
      },
      {
        key: "evEbitda",
        name: "EV/EBITDA",
        description:
          "Отношение стоимости компании к операционной прибыли. Более точный мультипликатор для сравнения.",
      },
      {
        key: "roe",
        name: "ROE (%)",
        description:
          "Рентабельность собственного капитала. Показывает эффективность использования капитала.",
      },
    ]

    const sortedAndFilteredData = useMemo(() => {
      let data = mockMultipliers.filter(item =>
        Object.values(item).some(val =>
          String(val).toLowerCase().includes(filterText.toLowerCase()),
        ),
      )

      if (!sortKey) return data

      return data.sort((a, b) => {
        const aVal = a[sortKey]
        const bVal = b[sortKey]

        let comparison = 0
        if (typeof aVal === "string") {
          comparison = aVal.localeCompare(bVal)
        } else {
          comparison = aVal - bVal
        }

        return sortDirection === "asc" ? comparison : -comparison
      })
    }, [filterText, sortKey, sortDirection])

    const handleSort = key => {
      if (sortKey === key) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc")
      } else {
        setSortKey(key)
        setSortDirection("desc")
      }
    }

    const handleRowClick = item => {
      // Имитация перехода на страницу 3 с конкретным описанием
      alert(
        `Переход на детальную страницу компании: ${item.company}. \n\nВ реальном приложении это будет переход на /historical-data/${item.company}`,
      )
    }

    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Мультипликаторы компаний
        </h1>

        <input
          type="text"
          placeholder="Фильтр по таблице..."
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          className="w-full md:w-1/3 p-3 mb-6 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
        />

        <div className="overflow-x-auto rounded-xl shadow-2xl">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                {columnDefs.map(col => (
                  <th
                    key={col.key}
                    onClick={() => handleSort(col.key)}
                    className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-700 transition duration-150"
                  >
                    <Tooltip text={col.description}>
                      <span className="flex items-center">
                        {col.name}
                        {sortKey === col.key && (
                          <svg
                            className={`w-3 h-3 ml-1 transition-transform ${sortDirection === "desc" ? "rotate-180" : ""}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </span>
                    </Tooltip>
                  </th>
                ))}
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Описание
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-900 divide-y divide-gray-700">
              {sortedAndFilteredData.map(item => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-800 transition duration-150 cursor-pointer"
                  onClick={() => handleRowClick(item)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-400">
                    {item.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {item.pe.toFixed(1)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {item.evEbitda.toFixed(1)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {(item.roe * 100).toFixed(1)}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }



  // --- Основной рендер контента ---
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "multipliers":
        return <MultipliersPage />
      case "historical":
        return <HistoricalPage />
      case "posts":
        return <PostsPage />
      case "fairPrices":
        return <FairPricesPage />
      case "portfolio":
        return <PortfolioPage />
      case "store":
        return <StorePage />
      case "profile":
        return <ProfilePage />
      default:
        return <HomePage />
    }
  }

  // --- Auth Modal Component (Simulated) ---

  return (
    <div className="min-h-screen bg-gray-950 font-sans text-white">
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Контейнер для сообщений */}
      {message && (
        <div
          className="fixed top-2 right-4 z-[110] p-4 bg-green-600 text-white rounded-lg shadow-xl transition-opacity duration-300"
          onClick={() => setMessage("")}
        >
          {message}
        </div>
      )}

      {isAuthModalOpen && <AuthModal />}

      <Header />

      <main className="container mx-auto px-4 py-8">{renderPage()}</main>

      <Footer />

      {/* Админ-панель видна только Админу */}
      {isAdminOrAbove && <AdminPanel />}
    </div>
  )
}
