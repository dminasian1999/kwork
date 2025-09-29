import React, { useEffect, useState } from "react"
import { initialUser, mockFairPrices, mockPosts, subscriptionPrices } from "../utils/constants.ts"

const GatedContent = ({ navigate }) => (
  <div className="p-8 text-center bg-gray-800 border border-yellow-500 rounded-lg shadow-xl max-w-lg mx-auto mt-10">
    <h2 className="text-2xl font-bold text-yellow-400 mb-4">Премиум-контент</h2>
    <p className="text-gray-300 mb-6">
      Этот раздел доступен только для пользователей с активной подпиской.
    </p>
    <p className="text-sm text-gray-400 mb-6">
      <span className="font-semibold text-yellow-300">Демо-информация:</span>{" "}
      Тестовые данные или ограниченный функционал для ознакомления.
    </p>
    <button
      onClick={() => navigate("store")}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md transform hover:scale-[1.02]"
    >
      Перейти в Магазин и Получить Премиум
    </button>
  </div>
)
export default GatedContent
