import React from "react"
import { initialUser } from "../utils/constants.ts"

const AuthModal = () => (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]">
    <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-sm border border-indigo-500">
      <h2 className="text-2xl font-bold text-white mb-6">Авторизация</h2>
      <p className="text-gray-400 mb-6">
        Имитация авторизации. Нажмите, чтобы войти как тестовый пользователь.
      </p>
      <div className="space-y-4">
        <button
          onClick={() => {
            setUser({
              ...initialUser,
              id: "user-123",
              status: "reader",
              name: "Тест-Читатель",
              isPremium: false,
            })
            setIsAuthModalOpen(false)
            setMessage("Вы вошли как Тест-Читатель.")
          }}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Войти (Читатель)
        </button>
        <button
          onClick={() => {
            setUser({
              ...initialUser,
              id: "admin-001",
              status: "admin",
              name: "Тест-Админ",
              isPremium: true,
            })
            setIsAuthModalOpen(false)
            setMessage("Вы вошли как Тест-Админ.")
          }}
          className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Войти (Админ)
        </button>
        <button
          onClick={() => {
            setUser({
              ...initialUser,
              id: "premium-555",
              status: "premium",
              name: "Тест-Премиум",
              isPremium: true,
            })
            setIsAuthModalOpen(false)
            setMessage("Вы вошли как Тест-Премиум.")
          }}
          className="w-full py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
        >
          Войти (Премиум)
        </button>
      </div>
      <button
        onClick={() => setIsAuthModalOpen(false)}
        className="mt-4 w-full text-gray-400 hover:text-gray-300"
      >
        Закрыть
      </button>
    </div>
  </div>
)


export default AuthModal
