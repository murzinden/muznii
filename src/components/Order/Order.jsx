// eslint-disable-next-line no-unused-vars
import React from 'react';
import cn from "classnames";
import s from "./Order.module.css"
import Button from "../ui/Button/Button.jsx";
import orderLeft from "./images/orderleft.jpeg"
import orderRight from "./images/orderright.jpg"
import someStyles from './SomeComponent.module.css';
import Footer from "../Footer/Footer.jsx";


const Order = () => {
    return (
        <>
            <main className={cn(s.main)}>
                <h1 className={cn(s.main__title)}>Выбирайте свой путь музыкальной автобиографии семьи</h1>
                <section className={cn(s.order)}>
                    <div className={cn(s.key)}>
                        <img src={orderLeft} alt="car" className={cn(s.order__image)}/>
                        <div className={cn(s.order__text)}>
                            <h3 className={cn(s.order__title)}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Заказать персональный плейлист воспоминаний "под ключ" (подарочный вариант).
                            </h3>
                            <h3 className={cn(s.order__title)}>
                                Стоимость договорная. Начните с сообщения нам о дате события.
                            </h3>
                            <h4 className={cn(s.order__subtitle)}>
                                Что именно мы сделаем?
                            </h4>
                            <p className={cn(s.order__paragraph)}>
                                Поговорим с ближним кругом одариваемого по вопросам специальной анкеты и просто «по
                                душам»
                                или же вышлем вам аудио-сообщение для рассылки ближнему кругу одариваемого (для
                                сохранения
                                конфиденциальности).
                            </p>
                            <p className={cn(s.order__paragraph)}>
                                Возьмём на себя координацию и сбор ответов (по желанию).
                            </p>
                            <p className={cn(s.order__paragraph)}>
                                Подготовим по результатам ответов на вопросы текстовые связки к музыке, общий сценарий
                                домашнего автобиографического концерта с учетом наших знаний из области музыкальной
                                терапии.
                            </p>
                            <p className={cn(s.order__paragraph)}>
                                Подберем музыку, запишем аудио текстовых связок своим голосом или распределим аудио с
                                озвучкой текста между вами и близкими одариваемого.
                            </p>
                            <p className={cn(s.order__paragraph)}>
                                Выровняем звук.
                            </p>
                            <p className={cn(s.order__paragraph)}>
                                Вышлем вам аудио-папку домашнего концерта или запишем на флешки/диски/иные носители (по
                                запросу).
                            </p>
                            <p className={cn(s.order__paragraph)}>
                                Оформим это в виде подарка от вас с письмом-благодарностью.
                            </p>
                            <p className={cn(s.order__paragraph)}>
                                Дополним подарок сувенирами, отражающими ценности того человека, которому вы дарите
                                домашний
                                концерт (по желанию).
                            </p>
                            <p className={cn(s.order__paragraph)}>
                                Дадим вам рекомендации по прослушиванию с учетом контекста вашего события и по
                                дальнейшему
                                использованию плейлиста.
                            </p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <Button href="/#contactSection">Заказать плейлист "под ключ"</Button>
                        </div>
                    </div>
                    <div className={cn(s.catalog)}>
                        <img src={orderRight} alt="goodmorning" className={cn(s.order__image)}/>
                        <div className={cn(s.order__text)}>
                            <h3 className={cn(s.order__title)}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Посмотреть каталог готовых списков песен (быстрый вариант поиска совпадений).
                            </h3>
                            <h3 className={cn(s.order__title)}>
                                900 рублей +
                                оплата флешки и оформления
                            </h3>
                            <h4 className={cn(s.order__subtitle)}>
                                Что именно мы сделаем?
                            </h4>
                            <p className={cn(s.order__paragraph)}>
                                Запросим основные общие данные вашей семьи и конкретного одариваемого (без фамилий!).
                            </p>
                            <p className={cn(s.order__paragraph)}>
                                Поделимся с вами песнями из раннее разработанных плейлистов (музыкальных автобиографий),
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                если в нашем опыте была семья со схожими "входными" данными.
                            </p>
                            <p className={cn(s.order__paragraph)}>
                                Предоставим вам неделю, чтобы выбрать песни-совпадения из каталога или внести новые
                                песни.
                            </p>
                            <p className={cn(s.order__paragraph)}>
                                Оформим все в готовый плейлист со списком песен в онлайн формате или на флеш-носителе.
                            </p>
                            <p className={cn(s.order__paragraph)}>
                                Напишем коротко рекомендации по прослушиванию исходя из знаний музыкальной терапии.
                            </p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <Button href="/#contactSection" className={someStyles.someOtherClass}>Заказать каталог</Button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Order;