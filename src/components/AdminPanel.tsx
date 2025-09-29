import React from "react"
import { subscriptionPrices } from "../utils/constants.ts"

const AdminPanel = () => {
  const handleRoleChange = () => {
    setUser(u => ({
      ...u,
      status: adminStatusInput,
      isPremium: ["premium", "author", "emitter", "admin"].includes(
        adminStatusInput,
      ),
    }))
    setMessage(`Статус пользователя изменен на: ${adminStatusInput}.`)
  }

  const handlePriceChange = () => {
    subscriptionPrices["1m"] = parseFloat(adminPriceInput)
    setMessage(`Цена подписки (1м) изменена на: ${adminPriceInput} ₽.`)
  }

  return (
    <div className="fixed bottom-0 right-0 p-4 bg-red-900/80 backdrop-blur-sm z-50 rounded-tl-xl shadow-2xl border-t-2 border-l-2 border-red-500">
      <h3 className="text-lg font-bold text-white mb-3">
        🛠️ Админ-панель (DEMO)
      </h3>
      <div className="space-y-3 text-sm">
        <div className="p-2 bg-red-900 rounded-lg">
          <label className="block text-red-300 mb-1">Текущая роль:</label>
          <select
            value={adminStatusInput}
            onChange={e => setAdminStatusInput(e.target.value)}
            className="w-full p-1 bg-gray-700 border border-gray-600 rounded text-white"
          >
            {Object.keys(statusIcons).map(role => (
              <option key={role} value={role}>
                {role} ({statusIcons[role].title})
              </option>
            ))}
          </select>
          <button
            onClick={handleRoleChange}
            className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-1 rounded"
          >
            Сменить роль
          </button>
        </div>
        <div className="p-2 bg-red-900 rounded-lg">
          <label className="block text-red-300 mb-1">Цена 1м (₽):</label>
          <input
            type="number"
            value={adminPriceInput}
            onChange={e => setAdminPriceInput(e.target.value)}
            className="w-full p-1 bg-gray-700 border border-gray-600 rounded text-white"
          />
          <button
            onClick={handlePriceChange}
            className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-1 rounded"
          >
            Изменить цену
          </button>
        </div>
        <p className="text-xs text-red-200">
          Текущий пользователь: {user.name} ({user.status})
        </p>
      </div>
    </div>
  )
}


export default AdminPanel
