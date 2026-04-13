import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import type { RootState } from '../app/store'
import { closeMobileMenu, toggleMobileMenu } from '../app/store'
const topNavItems = [
  { label: 'About', to: '/about', external: false },
  { label: 'Services', to: '/services', external: false },
  { label: 'Pricing', to: '#', external: true },
  { label: 'Gallery', to: '#', external: true },
  { label: 'Team', to: '#', external: true },
]

export function MainLayout() {
  const dispatch = useDispatch()
  const mobileMenuOpen = useSelector((state: RootState) => state.ui.mobileMenuOpen)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-row">
          <NavLink to="/" className="brand-wrap" onClick={() => dispatch(closeMobileMenu())}>
            <div className="brand-mark">🍃</div>
            <div className="brand-copy">
              <p className="brand">Sparkle & Shine</p>
              <span>Professional Cleaning Services</span>
            </div>
          </NavLink>
          <button
            className="menu-btn"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
          </button>
          <nav id="mobile-navigation" className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
            {topNavItems.map((item) =>
              item.external ? (
                <a key={item.label} href={item.to} onClick={() => dispatch(closeMobileMenu())}>
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => dispatch(closeMobileMenu())}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
          <div className="header-contact">
            <a href="tel:+74951519090">+7 (495) 151-9090</a>
            <span aria-label="phone icon"><Phone size={16} strokeWidth={1.8} /></span>
            <span aria-label="chat icon"><MessageCircle size={16} strokeWidth={1.8} /></span>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-row">
          <p>FreshSpaces - Eco-Friendly Cleaning Services</p>
          <p>{new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
