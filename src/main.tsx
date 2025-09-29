import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { BrowserRouter } from "react-router-dom"

import "tailwindcss/index.css"
import App2 from "./App2.tsx"

const container = document.getElementById("root")

if (!container) {
  throw new Error("Root element with ID 'root' was not found in the document.")
}

const root = createRoot(container)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App2 />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
