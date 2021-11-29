import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="index.html" className="logo">
            <img src="/images/assets/logo.svg" alt="Logo" />
          </a>
          <div className="header__categories d-none d-lg-block">
            <a href="javascript:;" className="btn btn-outline-primary">
              <div className="dropdawnWrapper">
                <span className="icon icon-list mr-3"></span>
                <Menu icon={<span>Категории</span>}>
                  <DropDown />
                </Menu>
              </div>
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
              <MenuLeng
                icon={
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
                }
              >
                <DropDownLeng />
              </MenuLeng>
            </div>
          </div>
          <div className="header__profile">
            <a href="dash-statistics.html" className="btn btn-primary">
              <span className="icon icon-user mr-0 mr-sm-2"></span>
              <span>Войти в аккаунт</span>
            </a>
          </div>
          <div
            className="mobile-menu-btn"
            onClick={() => setShowMenu(!showMenu)}
          >
            <button type="button" className="btn btn-primary">
              <span className="icon icon-list"></span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="mobileMenu"
        style={showMenu ? { width: "100%" } : {}}
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className="leftMobile">
          <div className="MobileBox">
            <div className="BoxTop">
              <div className="topleft">Ru</div>
              <div className="topright">Uz</div>
            </div>
            <div className="MiddleBox">
              <div className="MiddleText">Aniq fanlar</div>
              <div className="MiddleText">Tabiiy fanlar</div>
              <div className="MiddleText">Xorijiy tillar</div>
            </div>
          </div>
        </div>
        <div className="rightMobile"></div>
      </div>
    </header>
  );
};

export default Header;

const Menu = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="Menu-item">
        <a href="#" className="button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
        {open && props.children}
      </div>
    </>
  );
};

const DropDown = () => {
  const DropDownItem = (props) => {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };
  return (
    <div className="dropdown-leng">
      <DropDownItem>Aniq fanlar</DropDownItem>
      <DropDownItem>Tabiiy fanlar</DropDownItem>
      <DropDownItem>Yana fanlar</DropDownItem>
    </div>
  );
};

//=========================================

const MenuLeng = (props) => {
  const [openLeng, setOpenLeng] = useState(false);
  return (
    <>
      <div className="Menu-itemLeng">
        <a
          href="#"
          className="buttonLeng"
          onClick={() => setOpenLeng(!openLeng)}
        >
          {props.icon}
        </a>
        {openLeng && props.children}
      </div>
    </>
  );
};

const DropDownLeng = () => {
  const DropDownItemLeng = (props) => {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };
  return (
    <div className="dropdown-leng-leng">
      <DropDownItemLeng>Uzbek</DropDownItemLeng>
      <DropDownItemLeng>English</DropDownItemLeng>
    </div>
  );
};
