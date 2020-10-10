import React from "react";

export default function Navigation(props) {
  return (
    <nav className=" u-menu-main">
      <div className="u-menu-main-nav">
        <ul className="u-menu-main-nav-ul">
          <li className="u-menu-nav-item">
            <a className="u-menu-nav-item-link" href="/">
              <img
                src="/assets/images/Path21426.svg"
                className="u-logo-image u-logo-image-1"
              />
              مانی
            </a>
          </li>
          <li className="u-menu-nav-item">
            <a className="u-menu-nav-item-link" href="/">
              اپلیکیشن
            </a>
          </li>
          <li className="u-menu-nav-item">
            <a className="u-menu-nav-item-link" href="/">
              تماس با ما
            </a>
          </li>
          <li className="u-menu-nav-item">
            <a className="u-menu-nav-item-link" href="/">
              درباره ما
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
