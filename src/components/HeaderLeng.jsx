import React from "react";

const HeaderLeng = () => {
  return (
    <div class="mobile-menu">
      <div class="header__languages">
        <ul>
          <li>
            <a href="javascript:;" class="btn btn-primary">
              Ru
            </a>
          </li>
          <li>
            <a href="javascript:;" class="btn btn-outline-primary">
              Uz
            </a>
          </li>
          <li>
            <a href="javascript:;" class="btn btn-outline-primary">
              En
            </a>
          </li>
        </ul>
      </div>
      <div class="header__search">
        <label for="search">
          <span class="icon icon-search"></span>
        </label>
        <input
          type="text"
          id="search"
          class="form-control"
          placeholder="Что Вы хотите изучать? Например: Маркетинг"
        />
      </div>
      <div class="header__categories">
        <ul>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderLeng;
