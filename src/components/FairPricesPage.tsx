import React from "react"

const FairPricesPage = () => {
  if (!user.isPremium) return <GatedContent navigate={navigate} />

  // Таблица
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
        Справедливые Цены Компаний (Премиум)
      </h1>
      <p className="text-yellow-400 mb-6">
        Текущая цена обновляется раз в час (имитация внешнего источника).
        Справедливая цена заполняется вручную.
      </p>

      <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-700">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800">
          <tr>
            {[
              "Компания",
              "Справедливая Цена ($)",
              "Текущая Цена ($)",
              "Разница (%)",
              "Статус",
            ].map(header => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-700">
          {fairPrices.map(item => {
            const diff =
              ((item.currentPrice - item.fairPrice) / item.fairPrice) * 100
            const statusColor =
              diff < -5
                ? "text-green-400"
                : diff > 5
                  ? "text-red-400"
                  : "text-yellow-400"
            const statusText =
              diff < -5
                ? "Сильно недооценена"
                : diff > 5
                  ? "Сильно переоценена"
                  : diff < 0
                    ? "Недооценена"
                    : diff > 0
                      ? "Переоценена"
                      : "Справедливая"

            return (
              <tr
                key={item.id}
                className="hover:bg-gray-800 transition duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-400">
                  {item.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${item.fairPrice.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${item.currentPrice.toFixed(2)}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${statusColor}`}
                >
                  {diff.toFixed(2)}%
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm ${statusColor}`}
                >
                  {statusText}
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default FairPricesPage
