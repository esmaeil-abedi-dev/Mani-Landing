import React from "react";

export default function Footer() {
  return (
    <footer
      className="u-clearfix u-footer u-image u-footer"
      id="sec-b05c"
      data-image-width="1920"
      data-image-height="345"
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <a
          href="/"
          className="u-image u-logo u-image-1"
          data-image-width="57"
          data-image-height="41"
        >
          <img
            src="/assets/images/Path21426.svg"
            className="u-logo-image u-logo-image-1"
            data-image-width="58"
          />
        </a>
        <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
          <div className="menu-collapse" style={{ fontSize: "1.5rem" }}>
            <a
              className="u-button-style u-nav-link u-text-body-alt-color"
              href="#"
            >
              <svg>
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  href="#menu-hamburger"
                ></use>
              </svg>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
              >
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
            <ul className="u-nav u-unstyled u-nav-1">
              <li className="u-nav-item">
                <a
                  className="u-button-style u-nav-link u-text-body-alt-color"
                  href="/"
                >
                  تماس با ما
                </a>
              </li>
              <li className="u-nav-item">
                <a
                  className="u-button-style u-nav-link u-text-body-alt-color"
                  href="/"
                >
                  درباره ما
                </a>
              </li>
              <li className="u-nav-item">
                <a
                  className="u-button-style u-nav-link u-text-body-alt-color"
                  href="/"
                >
                  اپلیکیشن
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
