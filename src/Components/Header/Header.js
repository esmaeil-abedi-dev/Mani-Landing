import React from "react";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header
      className="u-clearfix u-header u-image u-header"
      id="sec-ea67"
      data-image-width="1920"
      data-image-height="1180"
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <a href="/" className="u-image u-logo u-image-1">
          <img
            src="/assets/images/Path21426.svg"
            className="u-logo-image u-logo-image-1"
            data-image-width="58"
          />
        </a>
        {/*<Navigation /> */}
        <div className="u-clearfix u-expanded-width u-gutter-34 u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div
                className="u-container-style u-image u-layout-cell u-left-cell u-size-28 u-image-2"
                data-image-width="572"
                data-image-height="529"
              >
                <div className="u-container-layout u-valign-middle u-container-layout-1"></div>
              </div>
              <div className="u-container-style u-layout-cell u-right-cell u-size-32 u-layout-cell-2">
                <div className="u-container-layout u-valign-bottom-xs u-container-layout-2">
                  <h2 className="u-align-right u-text u-text-body-alt-color u-text-default u-text-1">
                    لورم ایپسوم متن ساختگی با تولید
                  </h2>
                  <p className="u-align-right u-text u-text-body-alt-color u-text-default u-text-2">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-expanded-width-lg u-expanded-width-xl u-list u-repeater u-list-1">
          <div className="u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-top-xl u-container-layout-3">
              <img
                src="/assets/images/Sibche-Badge-Blue.png"
                alt="Application Store"
                className="u-border-radius-5 u-expanded u-image u-image-round"
                data-image-width="203"
                data-image-height="60"
              />
            </div>
          </div>
          <div className="u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-top-xl u-container-layout-4">
              <img
                src="/assets/images/Sibche-Badge-Blue.png"
                alt="Application Store"
                className="u-absolute-hcenter-sm u-absolute-hcenter-xs u-border-radius-5 u-expanded u-image u-image-round"
              />
            </div>
          </div>
          <div className="u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-top-xl u-container-layout-5">
              <img
                src="/assets/images/icon-app-googlestore.svg"
                alt="Application Store"
                className="u-border-radius-5 u-expanded u-image u-image-round"
                data-image-width="202"
                data-image-height="60"
              />
            </div>
          </div>
          <div className="u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-top-xl u-container-layout-6">
              <img
                src="/assets/images/icon-app-googlestore.svg"
                alt="Application Store"
                className="u-border-radius-5 u-expanded u-image u-image-round"
                data-image-width="202"
                data-image-height="60"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
