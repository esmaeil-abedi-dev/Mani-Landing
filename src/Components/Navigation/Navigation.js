import React from "react";

export default function Navigation(props) {
  return (
    <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
      <div
        className="menu-collapse"
        style={{
          fontSize: "1.875rem",
          letterSpacing: "0",
          fontWeight: "700",
        }}
      >
        <a
          className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-2-base u-text-hover-white u-text-white"
          href="#"
        >
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <symbol
                id="menu-hamburger"
                viewBox="0 0 16 16"
                style={{ width: "16px", height: "16px" }}
              >
                <rect y="1" width="16" height="2"></rect>
                <rect y="7" width="16" height="2"></rect>
                <rect y="13" width="16" height="2"></rect>
              </symbol>
            </defs>
          </svg>
        </a>
      </div>
      <div className="u-custom-menu u-nav-container">
        <ul className="u-nav u-spacing-20 u-unstyled u-nav-1">
          <li className="u-nav-item">
            <a
              className="u-button-style u-nav-link u-text-active-palette-2-base u-text-hover-white u-text-white"
              href="/"
              style={{ padding: "10px 26px" }}
            >
              درباره ما
            </a>
          </li>
          <li className="u-nav-item">
            <a
              className="u-button-style u-nav-link u-text-active-palette-2-base u-text-hover-white u-text-white"
              href="/"
              style={{ padding: "10px 26px" }}
            >
              تماس با ما
            </a>
          </li>
          <li className="u-nav-item">
            <a
              className="u-button-style u-nav-link u-text-active-palette-2-base u-text-hover-white u-text-white"
              href="/"
              style={{ padding: "10px 26px" }}
            >
              اپلیکیشن
            </a>
          </li>
          <li className="u-nav-item">
            <a
              className="u-button-style u-nav-link u-text-active-palette-2-base u-text-hover-white u-text-white"
              href="/"
              style={{ padding: "10px 26px" }}
            >
              مانی
            </a>
          </li>
        </ul>
      </div>
      <div className="u-custom-menu u-nav-container-collapse">
        <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
          <div className="u-menu-close"></div>
          <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
            <li className="u-nav-item">
              <a
                className="u-button-style u-nav-link"
                href="/"
                style={{ padding: "10px 44px" }}
              >
                درباره ما
              </a>
            </li>
            <li className="u-nav-item">
              <a
                className="u-button-style u-nav-link"
                href="/"
                style={{ padding: "10px 44px" }}
              >
                تماس با ما
              </a>
            </li>
            <li className="u-nav-item">
              <a
                className="u-button-style u-nav-link"
                href="/"
                style={{ padding: "10px 44px" }}
              >
                اپلیکیشن
              </a>
            </li>
            <li className="u-nav-item">
              <a
                className="u-button-style u-nav-link"
                href="/"
                style={{ padding: "10px 44px" }}
              >
                مانی
              </a>
            </li>
          </ul>
        </div>
        <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
      </div>
    </nav>
  );
}
