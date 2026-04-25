import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import './MainLayout.css'
import type { RootState } from '../../app/store'
import { closeMobileMenu, toggleMobileMenu } from '../../app/store'
import { Footer } from './Footer/Footer'

const topNavItems = [
  { label: 'About', to: '/about', external: false },
  { label: 'Services', to: '/services', external: false },
  { label: 'Pricing', to: '/pricing', external: true },
  { label: 'Gallery', to: '#', external: true },
  { label: 'Team', to: '#', external: true },
]

export function MainLayout() {
  const dispatch = useDispatch()
  const mobileMenuOpen = useSelector((state: RootState) => state.ui.mobileMenuOpen)

  return (
    <div className="site-shell">
      {/* Cinematic Floating Glass Header */}
      <header className="site-header">
        <div className="header-glass nav-row">
          <NavLink to="/" className="brand-wrap" onClick={() => dispatch(closeMobileMenu())}>
            <div className="brand-mark">🍃</div>
            <div className="brand-copy">
              <p className="brand">Sparkle & Shine</p>
              <span>Professional Cleaning</span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="main-nav">
            {topNavItems.map((item) =>
              item.external ? (
                <a key={item.label} href={item.to}>
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          {/* Desktop Right Side Base Actions */}
          <div className="header-contact">
            <a href="tel:+74951519090" className="phone-link">
              <Phone size={18} strokeWidth={2.5} /> +7 (495) 151-9090
            </a>
            <button className="action-btn" aria-label="Start Chat">
              <MessageCircle size={18} strokeWidth={2} />
            </button>
          </div>

          {/* Mobile Overlay Trigger Button */}
          <button
            className="menu-btn"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={2.2} /> : <Menu size={24} strokeWidth={2.2} />}
          </button>
        </div>
      </header>

      {/* Full Screen Cinematic Mobile Layout Drawer */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
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

        <div className="mobile-contact">
          <a href="tel:+74951519090" className="phone-link">
            <Phone size={24} strokeWidth={2.5} /> +7 (495) 151-9090
          </a>
          <button className="action-btn" style={{ width: 60, height: 60 }} aria-label="Start Chat">
            <MessageCircle size={24} strokeWidth={2} />
          </button>
        </div>
      </div>

      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
