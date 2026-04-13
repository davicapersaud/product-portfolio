import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import StyleMagnet from './pages/StyleMagnet'
import DreamyTime from './pages/DreamyTime'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <ScrollToTop />
      <Nav />
      {/*
        key={location.pathname} forces a remount on route change,
        which re-triggers the CSS page-in animation on each new page.
      */}
      <main className="flex-1">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/style-magnet" element={<StyleMagnet />} />
          <Route path="/dreamy-time" element={<DreamyTime />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
