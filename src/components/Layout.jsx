import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light', isLight)
  }, [isLight])

  return (
    <div className="min-h-screen">
      <Header isLight={isLight} onToggleTheme={() => setIsLight((prev) => !prev)} />
      <main className="mx-auto max-w-6xl px-3 pb-8 pt-4 sm:px-4 sm:pt-7 md:px-6 md:pt-8">
        <Outlet />
      </main>
      <Footer isLight={isLight} />
    </div>
  )
}

export default Layout
