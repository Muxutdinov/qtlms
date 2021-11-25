import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="footer">
    <div class="footer__top">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 footer__column">
                    <div class="footer__logo">
                        <img src="images/assets/logo.svg" alt="Logo"/>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3 footer__column">
                    <strong>Курсы</strong>
                    <ul>
                        <li><a href="#">Категория</a></li>
                        <li><a href="#">Вторая Категория</a></li>
                        <li><a href="#">Третья Категория</a></li>
                        <li><a href="#">Четвертая Категория</a></li>
                    </ul>
                </div>
                <div class="col-md-4 col-lg-3 footer__column">
                    <strong>Мой профиль</strong>
                    <ul>
                        <li><a href="#">Аккаунт</a></li>
                        <li><a href="#">Мои курсы</a></li>
                        <li><a href="#">Избранное</a></li>
                        <li><a href="#">Помощь</a></li>
                    </ul>
                </div>
                <div class="col-md-4 col-lg-3 footer__column">
                    <strong>Служба поддержки</strong>
                    <ul>
                        <li><a href="#">Политика конфиденциальности</a></li>
                        <li><a href="#">Помощь</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__bottom">
        <div class="container">
            <div class="copyright">
                <p>© 2020 Copyright. Все права защищены</p>
            </div>
        </div>
    </div>
</footer>
        </div>
    )
}

export default Footer
