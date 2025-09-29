import React, { useState } from "react"
import { mockHistoricalData } from "../utils/constants.ts"

const HistoricalPage = () => {
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = id => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
        Исторические данные и Аналитические отчеты
      </h1>
      <p className="text-gray-400 mb-8">
        Более 80 отчетов (показано 3 для примера). Нажмите на заголовок, чтобы
        развернуть детальный анализ.
      </p>

      <div className="space-y-4">
        {mockHistoricalData.map(item => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700"
          >
            <button
              onClick={() => toggleExpand(item.id)}
              className="w-full text-left p-5 flex justify-between items-center text-xl font-semibold text-indigo-300 hover:bg-gray-700 transition duration-200"
            >
              {item.title}
              <svg
                className={`w-6 h-6 transform transition-transform ${expandedId === item.id ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${expandedId === item.id ? "max-h-screen p-5 pt-0" : "max-h-0"}`}
            >
              <div className="pt-4 border-t border-gray-600 space-y-4">
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
                {item.graphs.map((graph, index) => (
                  <img
                    key={index}
                    src={graph}
                    alt={`График ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md border border-gray-600"
                    onError={e => {
                      e.target.onerror = null
                      e.target.src =
                        "https://placehold.co/600x300/374151/ffffff?text=График+Недоступен"
                    }}
                  />
                ))}
                <div className="text-sm text-gray-500 pt-2">
                  <p>
                    Подробный анализ {item.title}. Источник: внутренняя
                    аналитика.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default HistoricalPage
