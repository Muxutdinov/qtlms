import React, { Component } from "react";
import Slider from "react-slick";
import "./Autoplay.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import people1 from "../assets/imges/people1.png";
import people2 from "../assets/imges/people2.png";
import people3 from "../assets/imges/people3.png";
// import left from "../assets/imges/left.png";
// import right from "../assets/imges/right.png";

class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="LastCon">
        <Slider {...settings}>
          <div className="LastCardItem">
            <div className="LastCardItemChild">
              <img src={people1} className="LastCardImg" />
              <hr />
              <div className="MiniCard">
                <div className="MiniName">Karimov Farhod Erkinovich</div>
                <div className="MiniTitle">
                  Ilmiy ishlar bo'yicha direktor o'rinbosari
                </div>
              </div>
            </div>
          </div>
          <div className="LastCardItem">
            <div className="LastCardItemChild">
              <img src={people2} className="LastCardImg" />
              <div className=""></div>
              <hr />
              <div className="MiniCard">
                <div className="MiniName">Abdulayev Farrux</div>
                <div className="MiniTitle">
                  Xalqaro baxolash ilmiy bolimi mutaxasisi
                </div>
              </div>
            </div>
          </div>
          <div className="LastCardItem">
            <div className="LastCardItemChild">
              <img src={people3} className="LastCardImg" />
              <hr />
              <div className="MiniCard">
                <div className="MiniName">
                  Jo'rayev Shaxzodbek Baxodir o'g'li
                </div>
                <div className="MiniTitle">O'quv bo'limi - bosh mutaxasisi</div>
              </div>
            </div>
          </div>
          <div className="LastCardItem">
            <div className="LastCardItemChild">
              <img src={people1} className="LastCardImg" />
              <hr />
              <div className="MiniCard">
                <div className="MiniName">Daminova Shoxistaxon</div>
                <div className="MiniTitle">
                  Monitoring bolimi - bosh mutaxasisi
                </div>
              </div>
            </div>
          </div>
          <div className="LastCardItem">
            <div className="LastCardItemChild">
              <img src={people3} className="LastCardImg" />
              <hr />
              <div className="MiniCard">
                <div className="MiniName">Dilshod Movlonov</div>
                <div className="MiniTitle">OOO"Lochinbek</div>
              </div>
            </div>
          </div>
          <div className="LastCardItem">
            <div className="LastCardItemChild">
              <img src={people3} className="LastCardImg" />
              <hr />
              <div className="MiniCard">
                <div className="MiniName">Dilshod Movlonov</div>
                <div className="MiniTitle">OOO"Lochinbek</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
export default AutoPlay;
