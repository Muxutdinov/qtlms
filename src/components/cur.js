import React, { useState, useEffect } from "react";
import axios from "axios";

const Courses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAxios();
  }, []);
  const getAxios = () => {
    axios
      .get(
        " https://api.qtlms.uz/api/v1/courses?per_page=6&category_type=paid&is_home=1"
      )
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <section class="section section-courses">
          <div class="container">
            <div class="title">
              <h2>Популярные курсы</h2>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-4">
                <div class="course">
                  <div class="course__header">
                    <img src="images/courses/course-1.jpg" alt="Course" />
                    <div class="course__info">
                      <span class="badge badge-orange">Маркетинг</span>
                      <div class="course__rating">
                        <div class="rating rating-7"></div>
                        <span>4.6</span>
                      </div>
                    </div>
                  </div>
                  <div class="course__body">
                    <a href="#">
                      Маркетинг и все его тонкости. Профессия маркетолога с 0 до
                      эксперта
                    </a>
                    {/* <!-- <strong>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта</strong> --> */}
                  </div>
                  <div class="course__footer">
                    <div class="price-btn">
                      <strong class="__price">95 000 сум</strong>
                      <button type="button" class="btn btn-primary btn-sm">
                        Выбрать
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="course">
                  <div class="course__header">
                    <img src="images/courses/course-2.jpg" alt="Course" />
                    <div class="course__info">
                      <span class="badge badge-green">Экономика</span>
                      <div class="course__rating">
                        <div class="rating rating-7"></div>
                        <span>4.6</span>
                      </div>
                    </div>
                  </div>
                  <div class="course__body">
                    <a href="#">
                      Маркетинг и все его тонкости. Профессия маркетолога с 0 до
                      эксперта
                    </a>
                    {/* <!-- If not a link use STRONG below --> */}
                    {/* <!-- <strong>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта</strong> --> */}
                  </div>
                  <div class="course__footer">
                    <div class="price-btn">
                      <strong class="__price">95 000 сум</strong>
                      <button type="button" class="btn btn-primary btn-sm">
                        Выбрать
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="course">
                  <div class="course__header">
                    <img src="images/courses/course-3.jpg" alt="Course" />
                    <div class="course__info">
                      <span class="badge badge-purple">Менеджмент</span>
                      <div class="course__rating">
                        <div class="rating rating-7"></div>
                        <span>4.6</span>
                      </div>
                    </div>
                  </div>
                  <div class="course__body">
                    <a href="#">
                      Маркетинг и все его тонкости. Профессия маркетолога с 0 до
                      эксперта
                    </a>
                    {/* <!-- <strong>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта</strong> --> */}
                  </div>
                  <div class="course__footer">
                    <div class="price-btn">
                      <strong class="__price">95 000 сум</strong>
                      <button type="button" class="btn btn-primary btn-sm">
                        Выбрать
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="course">
                  <div class="course__header">
                    <img src="images/courses/course-4.jpg" alt="Course" />
                    <div class="course__info">
                      <span class="badge badge-purple-dark">Манавият</span>
                      <div class="course__rating">
                        <div class="rating rating-7"></div>
                        <span>4.6</span>
                      </div>
                    </div>
                  </div>
                  <div class="course__body">
                    <a href="#">
                      Маркетинг и все его тонкости. Профессия маркетолога с 0 до
                      эксперта
                    </a>
                    {/* <!-- <strong>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта</strong> --> */}
                  </div>
                  <div class="course__footer">
                    <div class="price-btn">
                      <strong class="__price">95 000 сум</strong>
                      <button type="button" class="btn btn-primary btn-sm">
                        Выбрать
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="course">
                  <div class="course__header">
                    <img src="images/courses/course-5.jpg" alt="Course" />
                    <div class="course__info">
                      <span class="badge badge-red">Иностранные языки</span>
                      <div class="course__rating">
                        <div class="rating rating-7"></div>
                        <span>4.6</span>
                      </div>
                    </div>
                  </div>
                  <div class="course__body">
                    <a href="#">
                      Маркетинг и все его тонкости. Профессия маркетолога с 0 до
                      эксперта
                    </a>
                    {/* <!-- <strong>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта</strong> --> */}
                  </div>
                  <div class="course__footer">
                    <div class="price-btn">
                      <strong class="__price">95 000 сум</strong>
                      <button
                        type="button"
                        class="btn btn-light btn-sm"
                        disabled
                      >
                        Выбран
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="course">
                  <div class="course__header">
                    <img src="images/courses/course-6.jpg" alt="Course" />
                    <div class="course__info">
                      <span class="badge badge-blue">Политика</span>
                      <div class="course__rating">
                        <div class="rating rating-7"></div>
                        <span>4.6</span>
                      </div>
                    </div>
                  </div>
                  <div class="course__body">
                    <a href="#">
                      Маркетинг и все его тонкости. Профессия маркетолога с 0 до
                      эксперта
                    </a>
                    {/* <!-- <strong>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта</strong> --> */}
                  </div>
                  <div class="course__footer">
                    <div class="price-btn">
                      <strong class="__price">95 000 сум</strong>
                      <button type="button" class="btn btn-primary btn-sm">
                        Выбрать
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-container btn-container--center">
              <a href="#" class="btn btn-primary">
                Смотреть все курсы
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;
