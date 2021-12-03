import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    getAxios();
    getAxioss();
  }, []);

  const getAxios = () => {
    const token = localStorage.getItem("token");
    axios
      .get("https://api.qtlms.uz/api/v1/course/ingilis-tili", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  const getAxioss = () => {
    const token = localStorage.getItem("token");
    axios
      .get("https://api.qtlms.uz/api/v1/course/ingilis-tili/sections", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setDataa(res.data.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main class="main">
        <section class="section section-breadcrumbs">
          <div class="container">
            <div class="breadcrumbs">
              <button type="button" class="btn btn-light left-sidebar-menu-btn">
                <span class="icon icon-list"></span>
              </button>
              <ul>
                <Link to="/">
                  <li>
                    <a href="">Asosiy</a>
                  </li>
                </Link>
                <li>
                  <a href=""></a>
                </li>
                <li>Ingliz tili</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="section section-course pt-3">
          <div class="container">
            <h3 class="mb-4">{data.name}</h3>
            <div class="row">
              <div class="col-lg-3">
                <div class="course-single__sidebar left-sidebar-menu">
                  <div class="left-sidebar-menu__inner">
                    <div class="course-single__menu">
                      {dataa.map((value, index) => {
                        return (
                          <ul>
                            <h6>{value.name}</h6>
                            {value.childs.map((item) => {
                              return (
                                <li>
                                  <a href="#">
                                    <span class="icon icon-lock"></span>
                                    {item.name}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="course-single__content">
                  <div class="video mb-4">
                    <video
                      id="my-video"
                      class="video-js"
                      controls
                      preload="auto"
                      poster="images/video-img.jpg"
                      data-setup="{}"
                    >
                      <source src="images/video.mp4" type="video/mp4" />
                      <source src="images/video.webm" type="video/webm" />
                    </video>
                  </div>
                  {/* <h3 class="mb-3">О чем этот курс?</h3> */}
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
