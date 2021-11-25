import React from "react";

const Learners = () => {
  return (
    <div>
      <section class="section section-learners">
        <div class="container">
          <div class="title">
            <h3>
              <span>{<span>5000+ директоров</span>}</span> по всему Узбекистану
              используют наш
              <br /> сервис для улучшения своих знаний
            </h3>
          </div>
          <div class="scroll scroll--horizontall">
            <div class="scroll__inner">
              <img src="images/logos.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learners;
