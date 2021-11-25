import React from "react";

const Certificate = () => {
  return (
    <div>
      <section class="section section-check-certificate">
        <div class="container">
          <div class="check-certificate">
            <div class="title">
              <h2>Проверьте свой сертификат на действительность</h2>
              <p>
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                сгенерировать
                <br /> несколько абзацев более менее осмысленного текста рыбы на
                русском языке.
              </p>
            </div>
            <div class="check-certificate__form">
              <form action="">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Введите номер вашего сертификата"
                />
                <button type="button" class="btn btn-primary">
                  Проверить сертификат
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificate;
