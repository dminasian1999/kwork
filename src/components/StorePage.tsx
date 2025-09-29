import React from "react"
import { subscriptionPrices } from "../utils/constants.ts"

const StorePage = () => {
  const handlePurchase = months => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true)
      setMessage("Пожалуйста, авторизуйтесь для совершения покупки.")
      return
    }

    const price = subscriptionPrices[`${months}m`]
    // Имитация перехода к оплате
    alert(
      `Имитация оплаты: Переход на платежный сервис для покупки подписки на ${months} месяцев за ${price} руб.`,
    )

    // В случае успешной оплаты (имитация):
    setPremiumForDemo(months * 30)
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
        Магазин Премиум-доступа
      </h1>
      <p className="text-gray-300 mb-10 text-center">
        Получите полный доступ ко всем аналитическим материалам, прогнозам и
        портфелям. Выберите подходящий тариф:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {Object.entries(subscriptionPrices).map(([key, price]) => {
          const months = parseInt(key.replace("m", ""))
          return (
            <div
              key={key}
              className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-indigo-600/50 flex flex-col items-center hover:shadow-indigo-500/30 transition duration-300 transform hover:scale-[1.03]"
            >
                <span className="text-4xl font-extrabold text-indigo-400 mb-3">
                  {months}
                </span>
              <h3 className="text-xl font-bold text-white mb-4">
                {months === 1 ? "Месяц" : months === 12 ? "Год" : "Месяцев"}
              </h3>
              <p className="text-3xl font-extrabold text-white mb-6">
                {price} ₽
              </p>
              <ul className="text-gray-400 text-sm mb-6 space-y-1 w-full text-center">
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span> Полный доступ
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span> Избранное (15
                  постов)
                </li>
              </ul>
              <button
                onClick={() => handlePurchase(months)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Купить
              </button>
            </div>
          )
        })}
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p className="mb-2">
          Возможность регулировать цену (имитация): текущая цена за 1 месяц —{" "}
          <span className="font-bold text-white">
              {subscriptionPrices["1m"]} ₽
            </span>
          .
        </p>
        <p>Платежный сервис прикручен (имитация перехода).</p>
      </div>
    </div>
  )
}


export default StorePage
