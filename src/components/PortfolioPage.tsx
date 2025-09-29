import React from "react"
import { subscriptionPrices } from "../utils/constants.ts"

const PortfolioPage = () => {
  if (!user.isPremium) return <GatedContent navigate={navigate} />

  const totalShare = mockPortfolio.reduce((acc, item) => acc + item.share, 0)

  // Simple Chart Visualization (Simulated using CSS)
  const ChartSim = () => (
    <div className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-inner border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-4">Доли в Портфеле</h3>
      <div className="relative w-48 h-48 rounded-full shadow-xl overflow-hidden border-4 border-gray-700">
        {mockPortfolio
          .reduce((acc, item, index) => {
            const lastAngle =
              acc.length > 0 ? acc[acc.length - 1].endAngle : 0
            const angle = (item.share / totalShare) * 360
            const color = ["#34D399", "#60A5FA", "#FBBF24", "#EF4444"][
            index % 4
              ]
            const startAngle = lastAngle
            const endAngle = lastAngle + angle

            // This is a simplified, non-SVG CSS hack for a pie chart, for demonstration purposes.
            // A real solution would use a library (like Recharts in React).
            acc.push({ startAngle, endAngle, color, item })
            return acc
          }, [])
          .map((segment, index) => (
            <div
              key={index}
              style={{
                "--segment-color": segment.color,
                "--start-angle": `${segment.startAngle}deg`,
                "--end-angle": `${segment.endAngle}deg`,
                // Using conic gradient for a simple pie chart visualization
                background: `conic-gradient(
                                ${mockPortfolio
                  .map((p, i) => {
                    const color = [
                      "#34D399",
                      "#60A5FA",
                      "#FBBF24",
                      "#EF4444",
                    ][i % 4]
                    const percent = mockPortfolio
                      .slice(0, i + 1)
                      .reduce(
                        (sum, item) => sum + item.share,
                        0,
                      )
                    return `${color} ${percent}%`
                  })
                  .join(", ")}
                            )`,
              }}
              className="absolute inset-0 rounded-full"
            />
          ))}
      </div>
      <div className="mt-4 w-full">
        {mockPortfolio.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-1 text-sm"
          >
              <span className="flex items-center">
                <span
                  className="inline-block w-3 h-3 rounded-full mr-2"
                  style={{
                    backgroundColor: [
                      "#34D399",
                      "#60A5FA",
                      "#FBBF24",
                      "#EF4444",
                    ][index % 4],
                  }}
                ></span>
                {item.company}
              </span>
            <span className="font-semibold text-white">{item.share}%</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
        Текущий Портфель (Премиум)
      </h1>
      <p className="text-gray-400 mb-8">
        Текущая структура инвестиционного портфеля. Обновляется ежедневно.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ChartSim />
        </div>
        <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-700">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Компания
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Доля (%)
              </th>
            </tr>
            </thead>
            <tbody className="bg-gray-900 divide-y divide-gray-700">
            {mockPortfolio.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-800 transition duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-400">
                  {item.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-gray-300">
                  {item.share.toFixed(0)}%
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          <div className="bg-gray-800 px-6 py-3 text-right text-sm font-bold text-white">
            Итого: {totalShare}%
          </div>
        </div>
      </div>
    </div>
  )
}


export default PortfolioPage
