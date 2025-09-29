import React from "react"
const ProfilePage = () => {
  if (!isAuthenticated)
    return (
      <div className="p-8 text-center max-w-lg mx-auto mt-10">
        <h2 className="text-2xl font-bold text-red-400 mb-4">Авторизация</h2>
        <p className="text-gray-300 mb-6">
          Для доступа к Профилю необходимо войти в систему.
        </p>
        <button
          onClick={() => setIsAuthModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md"
        >
          Войти
        </button>
      </div>
    )

  const { status, premiumEndDate, isPremium, favorites } = user
  const isPremiumStatus =
    status === "premium" ||
    status === "author" ||
    status === "emitter" ||
    isPremium

  const daysLeft = isPremium
    ? Math.ceil(
      (premiumEndDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24),
    )
    : 0
  const maxFavorites = isPremiumStatus ? 15 : 5
  const profileFavorites = posts
    .filter(p => favorites.includes(p.id))
    .slice(0, maxFavorites)
  const avatarUrl = "https://placehold.co/128x128/374151/ffffff?text=AV"

  // Иконки статусов
  const statusIcons = {
    reader: { icon: "🔍", color: "text-gray-400", title: "Читатель" },
    premium: { icon: "💎", color: "text-yellow-400", title: "Премиум" },
    author: { icon: "🖋️", color: "text-green-400", title: "Автор" },
    emitter: { icon: "✅", color: "text-blue-400", title: "Эмитент" },
    admin: { icon: "👑", color: "text-red-500", title: "Админ" },
  }

  const currentStatus = statusIcons[status] || statusIcons.reader

  const handleAvatarChange = () => {
    alert("Имитация: Поле для загрузки аватара.")
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
        Личный Профиль
      </h1>

      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="relative flex-shrink-0">
          <img
            src={avatarUrl}
            alt="Аватар"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 cursor-pointer"
            onClick={handleAvatarChange}
          />
          <span
            title={currentStatus.title}
            className={`absolute bottom-0 right-0 text-3xl p-1 rounded-full bg-gray-900 border-2 border-gray-700 ${currentStatus.color}`}
          >
              {currentStatus.icon}
            </span>
        </div>

        <div className="flex-grow">
          <h2 className="text-3xl font-extrabold text-white mb-2">
            {user.name}
          </h2>
          <div className="flex items-center space-x-2 text-lg text-gray-300 mb-4">
            <span className="font-semibold">Статус:</span>
            <span className={`font-bold ${currentStatus.color}`}>
                {currentStatus.title}
              </span>
          </div>

          {isPremiumStatus && (
            <div className="p-4 bg-indigo-900/50 rounded-lg mb-4 border border-indigo-700">
              <p className="text-lg font-semibold text-indigo-300">
                Премиум Активен
              </p>
              <p className="text-sm text-gray-300 mt-1">
                Дней до конца:{" "}
                <span className="font-bold text-yellow-300">{daysLeft}</span>
              </p>
            </div>
          )}
          {!isPremiumStatus && status === "reader" && (
            <div className="p-4 bg-red-900/50 rounded-lg mb-4 border border-red-700">
              <p className="text-lg font-semibold text-red-300">
                Базовый доступ
              </p>
              <button
                onClick={() => navigate("store")}
                className="text-sm text-yellow-400 hover:text-yellow-300 mt-1"
              >
                Перейти в Магазин для Премиум
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Избранные Посты ({profileFavorites.length} / {maxFavorites})
        </h3>
        <ul className="space-y-3">
          {profileFavorites.length > 0 ? (
            profileFavorites.map(post => (
              <li
                key={post.id}
                className="p-3 bg-gray-700 rounded-lg flex justify-between items-center hover:bg-gray-600 transition duration-150"
              >
                  <span
                    className="text-gray-300 font-medium cursor-pointer"
                    onClick={() => navigate("posts")}
                  >
                    {post.title}
                  </span>
                <button
                  onClick={() => handleToggleFavorite(post.id)}
                  className="text-pink-400 hover:text-pink-300"
                >
                  Удалить
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-500">Список избранного пуст.</p>
          )}
        </ul>
      </div>
    </div>
  )
}


export default ProfilePage
