import React from 'react'

const Teachers = () => {
    return (
        <div>
             <section class="section section-teachers">
        <div class="container">
            <div class="title">
                <h2>Наши профессора</h2>
                <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать<br/> несколько абзацев более менее осмысленного текста рыбы на русском языке.</p>
            </div>
            <div class="owl-slider slider-teachers">
                <div id="slider_teachers_nav" class="owl-nav"></div>
                <div id="slider_teachers" class="owl-carousel">
                    <div class="item">
                        <a href="#" class="teacher">
                            <img src="images/teachers/1.jpg" alt=""/>
                            <strong>Александр Крюков</strong>
                            <p>Маркетинг специалист</p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="#" class="teacher">
                            <img src="images/teachers/2.jpg" alt=""/>
                            <strong>Мурад Аскаров</strong>
                            <p>Маркетинг специалист</p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="#" class="teacher">
                            <img src="images/teachers/3.jpg" alt=""/>
                            <strong>Александр Крюков</strong>
                            <p>Маркетинг специалист</p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="#" class="teacher">
                            <img src="images/teachers/4.jpg" alt=""/>
                            <strong>Мурад Аскаров</strong>
                            <p>Маркетинг специалист</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Teachers
