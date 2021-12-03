import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="index.html" className="logo">
            <Link to="/">
              <img src="/images/assets/logo.svg" alt="Logo" />
            </Link>
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
          <div className="header__profile" onClick={() => setShow(!show)}>
            {show ? <SignUp /> : ""}
            <a href="" className="btn btn-primary">
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

const SignUp = () => {
  const [data, setData] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Title>Ro'yxatdan o'tish</Title>
        <InputText>Telefon raqam</InputText>
        <SignUpInput />
        <Button>Ro'yxatdan o'tish</Button>
        <Links>Paro'lni tiklash </Links>
        <Links>Kirish</Links>
      </Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  transition: all 0.3s;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  width: 0%;
  background-color: black;
`;
export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 350px;
  width: 550px;
  background-color: white;
  border-radius: 10px;
`;
export const Title = styled.div`
  font-size: 25px;
  color: blue;
  font-weight: 600;
`;
export const InputText = styled.div`
  font-size: 18px;
  color: black;
  /* height: 20px; */
`;
export const SignUpInput = styled.input`
  width: 370px;
  outline: navy;
  height: 40px;
  border: none;
  background-color: rgb(214, 212, 212);
  border-radius: 10px;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  height: 50px;
  width: 370px;
  border-radius: 10px;
  :hover {
    background-color: rgb(89, 201, 197);
    cursor: pointer;
  }
`;
export const Links = styled.div`
  height: 20px;
`;

//=============================
