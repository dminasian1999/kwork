import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { logoImg, navItems } from "../utils/constants.ts"

const Header = () => {
  const nav = useNavigate()
  const cart = useAppSelector(state => state.user.profile.cart)
  const user = useAppSelector(state => state.user.profile)
  const token = useAppSelector(state => state.token)

  return (
    // Remove 'navbar navbar-expand-lg' classes for a cleaner base
    <nav className="header-custom">
      <div className="container d-flex align-items-center justify-content-between p-3">

        {/* ====================================
           Left Column: Desktop Navigation (Hidden on Mobile)
        ==================================== */}
        <div className="d-none d-lg-block col-lg-4">
          <ul className="navbar-nav flex-row justify-content-start">
            {navItems.slice(0, 3).map(item => ( // Assuming you only want 3-4 main links
              <li key={item.route} className="nav-item me-4">
                {/* Use custom link styling for the clean look */}
                <Link to={`/${item.route}`} className="nav-link nav-link-custom">
                  {item.title.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ====================================
           Center Column: Logo
        ==================================== */}
        <div className="col-4 d-flex justify-content-center">
          <a className="navbar-brand header-logo" href="/">
            <img
              className="rounded-circle"
              height={30} // Smaller size for the clean, minimalist look
              src={logoImg}
              alt="Brand Logo"
              title="Brand Logo"
            />
          </a>
        </div>

        {/* ====================================
           Right Column: Utility & Mobile Toggle
        ==================================== */}
        <div className="d-flex align-items-center justify-content-end col-4">

          {/* Social/Utility Icons (WhatsApp, VK, Search, Cart) - Desktop */}
          <div className="d-none d-lg-flex right-icons align-items-center">
            {/* WhatsApp */}
            <a href="https://wa.me/" className="me-3" target="_blank" rel="noopener noreferrer">
              <i className="icon anm anm-whatsapp me-3"></i>
            </a>
            {/* VK */}
            <a href="https://vk.com/" className="me-3" target="_blank" rel="noopener noreferrer">
              <i className="icon anm anm-vk me-3"></i>
            </a>
            {/* Search */}
            <button type="button" className="btn--link me-3">
              <i className="icon anm anm-search-l"></i>
            </button>
          </div>


          {/* Cart Icon */}
          <div className="site-cart position-relative me-3">
            {cart && (
              <Link to="/cart" className="site-header__cart" title="Cart">
                <i className="icon anm anm-bag-l"></i>
                <span
                  id="CartCount"
                  className="site-header__cart-count"
                  data-cart-render="item_count"
                >
                  {cart.items.length}
                </span>
              </Link>
            )}
          </div>

          {/* Mobile Toggle Button (Visible on Mobile) */}
          <button
            className="navbar-toggler btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open d-lg-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* ====================================
           Offcanvas Menu (Mobile Only) - Structure remains similar
        ==================================== */}
        {/* ... Offcanvas code (keep this as is for the mobile menu) ... */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-start flex-grow-1">
              {navItems.map(item => (
                <li key={item.route} className="nav-item">
                  <a href={`/${item.route}`} className="nav-link">
                    <h5 className="fw-bolder">{item.title}</h5>
                  </a>
                </li>
              ))}
              {token && user.roles.includes("ADMINISTRATOR") && (
                <li className="nav-item">
                  <a href="/all-orders" className="nav-link">
                    <h5 className="fw-bolder">All Orders</h5>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Header
