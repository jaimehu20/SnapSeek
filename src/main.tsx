import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/HomePage.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MyGallery } from './pages/MyGallery.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/gallery' element={<MyGallery/>}/>
        </Routes>
      </Router>
    </Provider>
)
