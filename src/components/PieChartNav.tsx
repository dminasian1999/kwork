import React, { useEffect, useState } from "react"
import { initialUser, mockFairPrices, mockPosts, subscriptionPrices } from "../utils/constants.ts"

const PieChartNav = ({ navigate }) => {
  const pages = [
    {
      name: "Мультипликаторы",
      id: "multipliers",
      color: "#10B981",
      startAngle: 0,
      sweepAngle: 45,
    },
    {
      name: "Исторические данные",
      id: "historical",
      color: "#3B82F6",
      startAngle: 45,
      sweepAngle: 45,
    },
    {
      name: "Посты",
      id: "posts",
      color: "#F59E0B",
      startAngle: 90,
      sweepAngle: 45,
    },
    {
      name: "Справедливые цены",
      id: "fairPrices",
      color: "#EF4444",
      startAngle: 135,
      sweepAngle: 45,
    },
    {
      name: "Текущий портфель",
      id: "portfolio",
      color: "#8B5CF6",
      startAngle: 180,
      sweepAngle: 45,
    },
    {
      name: "Магазин",
      id: "store",
      color: "#14B8A6",
      startAngle: 225,
      sweepAngle: 45,
    },
    {
      name: "Профиль",
      id: "profile",
      color: "#EC4899",
      startAngle: 270,
      sweepAngle: 90,
    }, // Увеличенный сектор
  ]

  const radius = 100
  const cx = 150
  const cy = 150

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    }
  }

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle)
    const end = polarToCartesian(x, y, radius, startAngle)

    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1

    const d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      "L",
      x,
      y,
      "Z",
    ].join(" ")

    return d
  }

  return (
    <div className="flex flex-col items-center p-8 bg-gray-900 rounded-xl shadow-2xl">
      <h3 className="text-xl font-bold text-indigo-400 mb-4">
        Навигация по разделам
      </h3>
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        className="shadow-lg rounded-full"
      >
        {pages.map((page, index) => (
          <g key={index}>
            <path
              d={describeArc(
                cx,
                cy,
                radius,
                page.startAngle,
                page.startAngle + page.sweepAngle,
              )}
              fill={page.color}
              className="hover:opacity-80 transition duration-300 cursor-pointer stroke-gray-700 stroke-[1px]"
              onClick={() => navigate(page.id)}
            />
            {/* Текст (позиционируем примерно по центру сектора) */}
            <text
              x={
                cx +
                (radius / 1.5) *
                Math.cos(
                  ((page.startAngle + page.sweepAngle / 2 - 90) * Math.PI) /
                  180,
                )
              }
              y={
                cy +
                (radius / 1.5) *
                Math.sin(
                  ((page.startAngle + page.sweepAngle / 2 - 90) * Math.PI) /
                  180,
                )
              }
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="bold"
              className="pointer-events-none"
            >
              {page.name}
            </text>
          </g>
        ))}
        {/* Центральный круг */}
        <circle
          cx={cx}
          cy={cy}
          r={40}
          fill="#1F2937"
          stroke="#374151"
          strokeWidth="2"
        />
        <text
          x={cx}
          y={cy + 5}
          textAnchor="middle"
          fill="#9CA3AF"
          fontSize="14"
          fontWeight="bold"
        >
          МЕНЮ
        </text>
      </svg>
    </div>
  )
}
export default PieChartNav
