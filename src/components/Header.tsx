import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { adminInfo, mailIcon, navItems } from "../utils/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ThemeSwitcher from "./ThemeSwitcher.tsx"

const Header = () => {
  const nav = useNavigate();
  const cart = useAppSelector(state => state.user.profile.cart);
  const user = useAppSelector(state => state.user.profile);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Логотип */}
        <div
          onClick={() => nav("/")}
          className="cursor-pointer text-3xl font-extrabold text-alt-primary"
        >
          Alt<span className="text-alt-cta">Tech</span>
        </div>

        {/* Навигация */}
        <ul className="nav nav-tabs">
          {navItems.map(item => (
            <li
              key={item.title}
              className={`nav-item ${item.children ? "dropdown" : ""}`}
            >
              {item.children ? (
                <>
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.title}
                  </a>
                  <ul className="dropdown-menu">
                    {item.children.map(sub => (
                      <li key={sub.title}>
                        <Link className="dropdown-item text-dark" to={sub.route}>
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link className="nav-link text-dark" to={item.route}>
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mail d-flex gap-2">
          <img className={'object-fit-cover m-1' +
            ''} src={mailIcon} alt={'mail'}/>

          <div className="text">{adminInfo.email}</div>
        </div>
     <ThemeSwitcher/>

        {/* CTA кнопка */}
        <Link
          to="/contact"
          className="hidden sm:inline-block px-6 py-3 bg-alt-cta text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          Получить консультацию        </Link>

        {/* Mobile menu button */}
        <button className="lg:hidden text-alt-primary p-2 rounded-lg hover:bg-gray-100 transition duration-150">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
