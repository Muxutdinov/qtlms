import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./SecondCaru.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SecondCaru = () => {
  const [test, setTest] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    getAxios();
  }, []);
  const getAxios = () => {
    setTest(true);
    axios
      .get("https://api.qtlms.uz/api/v1/reviews")
      .then((res) => {
        setData(res.data);
        setTest(false);
      })
      .catch((err) => {
        console.log(err);
        setTest(false);
      });
  };
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 500,
    cssEase: "linear",
  });
  return (
    <>
      {test ? (
        <h1>Loading...</h1>
      ) : (
        <div className="Second">
          <div className="top">
            <div className="SecondTitle">Xalqaro ekspertlarning fikrlari</div>
            <div className="toptext">
              «Uzluksiz kasbiy ta’lim» elektron platformasi faoliyati va
              imkoniyatlarini o'rgangan ta'lim sohasidagi xalqaro ekspertlarning
              fikrlari bilan tanishing.
            </div>
          </div>
          <Slider {...settings}>
            {data.map((value, index) => {
              return (
                <div className="SecondCardItem">
                  <div className="SecondCardItemChild">
                    <div className="card">
                      <img
                        src={"https://api.qtlms.uz/storage/" + value.image}
                        className="SecondCardImg"
                      ></img>
                      <div className="SecondMiniName">{value.name}</div>
                    </div>
                    <div className="SecondText">{value.comment}</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
};

export default SecondCaru;
