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
      .then((res) => setData(res.data.data))
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
              {data.map((value, index) => {
                return (
                  <div class="col-md-6 col-lg-4">
                    <div class="course">
                      <div class="course__header">
                        <img
                          src={"https://api.qtlms.uz/storage/" + value.image}
                          alt="Course"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/call-to-action.jpg";
                          }}
                        />
                        <div class="course__info">
                          <span class="badge badge-orange">
                            {value.category.slug}
                          </span>
                          <div class="course__rating">
                            <div class="rating rating-7"></div>
                            <span>4.6</span>
                          </div>
                        </div>
                      </div>
                      <div class="course__body">
                        <a href="#">{value.name}</a>
                        {/* <!-- <strong>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта</strong> --> */}
                      </div>
                      <div class="course__footer">
                        <div class="price-btn">
                          <strong class="__price">
                            {value.price === 0 ? (
                              <div>Bepul | 0 kredit</div>
                            ) : (
                              value.price + " so'm | 0 kredit"
                            )}
                          </strong>
                          <button type="button" class="btn btn-primary btn-sm">
                            Выбрать
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
