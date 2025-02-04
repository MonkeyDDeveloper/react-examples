import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from './store/index.js'
import { Provider } from 'react-redux'
import App from './App'

const root = createRoot(document.getElementById('app'))

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
