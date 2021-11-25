import React from "react";
// import '../../public/css/style.css'
// import img1 from '../../public/images/assets/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="index.html" className="logo">
            <img src="/images/assets/logo.svg" alt="Logo" />
          </a>
          <div className="header__categories d-none d-lg-block">
            <a href="javascript:;" className="btn btn-outline-primary">
              <span className="icon icon-list mr-3"></span>
              <span>Категории</span>
            </a>
          </div>
          <div className="header__search d-none d-lg-block">
            <label for="search">
              <span className="icon icon-search"></span>
            </label>
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Что Вы хотите изучать? Например: Маркетинг"
            />
          </div>
          <div className="header__languages d-none d-lg-block">
            <div className="dropdown">
              <button
                className="btn btn-text dropdown-toggle"
                type="button"
                id="dropdownLanguages"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Русский
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownLanguages"
              >
                <a className="dropdown-item" href="#">
                  English
                </a>
                <a className="dropdown-item" href="#">
                  Uzbek
                </a>
              </div>
            </div>
          </div>
          <div className="header__profile">
            <a href="dash-statistics.html" className="btn btn-primary">
              <span className="icon icon-user mr-0 mr-sm-2"></span>
              <span>Войти в аккаунт</span>
            </a>
          </div>
          <div className="mobile-menu-btn">
            <button type="button" className="btn btn-primary">
              <span className="icon icon-list"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
