import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/HomePage.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
)
