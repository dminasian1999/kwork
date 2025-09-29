import React, { useState } from "react"

const PostsPage = ({isAuthenticated}:{isAuthenticated:boolean}) => {
  const [selectedPost, setSelectedPost] = useState(null)
  const [commentText, setCommentText] = useState("")
  const [isAddingPost, setIsAddingPost] = useState(false)

  // Admin/Author/Emitter functions
  const handleAddPost = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newPost = {
      id: posts.length + 1,
      title: formData.get("title"),
      excerpt: formData.get("excerpt"),
      content: formData.get("content"),
      isPremium: formData.get("isPremium") === "on",
      comments: [],
      image: "https://placehold.co/400x200/5b21b6/ffffff?text=Новый+Пост",
    }
    setPosts(p => [newPost, ...p])
    setIsAddingPost(false)
    setMessage(`Пост "${newPost.title}" успешно добавлен.`)
  }

  const handleToggleFavorite = postId => {
    if (!isAuthenticated) {
      setMessage("Для добавления в избранное необходимо авторизоваться.")
      return
    }
    setUser(u => ({
      ...u,
      favorites: u.favorites.includes(postId)
        ? u.favorites.filter(id => id !== postId)
        : [...u.favorites, postId],
    }))
  }

  const handleAddComment = e => {
    e.preventDefault()
    if (!user.isPremium) {
      setMessage("Комментирование доступно только для премиум-пользователей.")
      return
    }
    if (commentText.trim() === "") return

    setPosts(p =>
      p.map(post =>
        post.id === selectedPost.id
          ? {
            ...post,
            comments: [...post.comments, `${user.name}: ${commentText}`],
          }
          : post,
      ),
    )
    setCommentText("")
    setMessage("Комментарий успешно добавлен.")
  }

  const closePost = () => setSelectedPost(null)

  const postToDisplay = selectedPost || posts

  // Post Creation Modal (Only visible to Admin/Author/Emitter)
  const AddPostModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]">
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-xl border border-indigo-500">
        <h2 className="text-2xl font-bold text-white mb-6">
          Добавить Новый Пост
        </h2>
        <form onSubmit={handleAddPost} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Заголовок поста"
            required
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
          />
          <textarea
            name="excerpt"
            placeholder="Краткое описание (шапка)"
            required
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white h-16"
          />
          <textarea
            name="content"
            placeholder="Полный текст поста"
            required
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white h-32"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isPremium"
              name="isPremium"
              className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 rounded"
            />
            <label
              htmlFor="isPremium"
              className="ml-2 text-sm font-medium text-gray-300"
            >
              Премиум-пост (доступен только по подписке)
            </label>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setIsAddingPost(false)}
              className="px-4 py-2 text-gray-300 bg-gray-700 rounded-lg hover:bg-gray-600"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Опубликовать
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  // Single Post View
  if (selectedPost) {
    const isContentGated = selectedPost.isPremium && !user.isPremium
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <button
          onClick={closePost}
          className="text-indigo-400 hover:text-indigo-300 mb-6 flex items-center transition duration-200"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Назад ко всем постам
        </button>

        <article className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            {selectedPost.title}{" "}
            {selectedPost.isPremium && (
              <span className="text-yellow-500 text-2xl">💎</span>
            )}
          </h1>
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-auto rounded-lg mb-6"
            onError={e => {
              e.target.onerror = null
              e.target.src =
                "https://placehold.co/600x300/374151/ffffff?text=Изображение+Недоступно"
            }}
          />

          {isContentGated ? (
            <GatedContent navigate={navigate} />
          ) : (
            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
              {selectedPost.content}
            </div>
          )}

          <div className="mt-8 border-t border-gray-700 pt-6 flex justify-between items-center">
            <button
              onClick={() => handleToggleFavorite(selectedPost.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition duration-200 ${user.favorites.includes(selectedPost.id) ? "bg-pink-600 text-white hover:bg-pink-700" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
              disabled={!isAuthenticated}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                  {user.favorites.includes(selectedPost.id)
                    ? "В Избранном"
                    : "В Избранное"}
                </span>
            </button>
          </div>
        </article>

        {/* Comments Section (Премиум) */}
        <div className="mt-10 p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            Комментарии ({selectedPost.comments.length})
          </h3>
          {user.isPremium ? (
            <form onSubmit={handleAddComment} className="mb-6">
                <textarea
                  value={commentText}
                  onChange={e => setCommentText(e.target.value)}
                  placeholder="Оставьте свой комментарий (Премиум)"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 h-20 resize-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              <button
                type="submit"
                className="mt-3 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                Отправить
              </button>
            </form>
          ) : (
            <div className="text-center p-4 bg-gray-700 rounded-lg text-yellow-400">
              Для комментирования необходим Премиум-статус.
            </div>
          )}

          <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
            {selectedPost.comments.length > 0 ? (
              selectedPost.comments.map((comment, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-700 rounded-lg border-l-4 border-indigo-500 text-gray-300 text-sm"
                >
                  {comment}
                </div>
              ))
            ) : (
              <p className="text-gray-500">Комментариев пока нет.</p>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Posts List View
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-2">
        <h1 className="text-3xl font-bold text-white">
          Лента Аналитических Постов
        </h1>
        {isAuthorOrAbove && (
          <button
            onClick={() => setIsAddingPost(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200 shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span>Добавить Пост</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-300 border border-gray-700"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
              onError={e => {
                e.target.onerror = null
                e.target.src =
                  "https://placehold.co/400x200/374151/ffffff?text=Изображение+Недоступно"
              }}
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center">
                {post.title}
                {post.isPremium && (
                  <span
                    className="ml-2 text-yellow-500 text-lg"
                    title="Премиум-пост"
                  >
                      💎
                    </span>
                )}
              </h2>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold transition duration-200 flex items-center"
                >
                  Читать далее...
                </button>
                <button
                  onClick={() => handleToggleFavorite(post.id)}
                  className={`p-2 rounded-full transition duration-200 ${user.favorites.includes(post.id) ? "text-pink-500 bg-pink-100/10" : "text-gray-500 hover:text-pink-400"}`}
                  title={
                    user.favorites.includes(post.id)
                      ? "В избранном"
                      : "Добавить в избранное"
                  }
                  disabled={!isAuthenticated}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isAddingPost && AddPostModal()}
    </div>
  )
}


export default PostsPage
