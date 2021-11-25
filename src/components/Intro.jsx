import React from "react";

const Intro = () => {
  return (
    <div>
      <section class="section section-intro">
        <div class="container">
          <div class="section-intro__inner">
            <div class="row align-items-center">
              <div class="col mb-5">
                <h1>Улучшайте свои знания и практикуйте навыки</h1>
                <p>
                  Лучшие онлайн-курсы, собранные в одном месте,
                  <br /> помогут Вам сконцентрироваться на изучении материала
                </p>
                <a href="#" class="btn btn-primary">
                  Начать квалификацию
                </a>
              </div>
              <div class="col">
                <img src="images/intro.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
