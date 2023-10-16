// eslint-disable-next-line no-unused-vars
import React from 'react';
import cn from "classnames";
import s from "./Project.module.css"
import topImages from "./images/projecttop.jpg"
import bottomImages from "./images/bottomImages.jpg"
import telegram from "./images/telegram.png"
import vk from "./images/vk.png"
import Button from "../ui/Button/Button.jsx";
import Form from "../ui/Form/Form.jsx";
import Footer from "../Footer/Footer.jsx";

const Project = () => {

    return (
        <>
            <main className={cn(s.project)}>
                <section className={cn(s.project__order)}>
                    <div className={cn(s.order__image)}>
                        <img src={topImages} className={cn(s.order__topImages)} alt="фото взрослых"/>
                    </div>
                    <div className={cn(s.project__text)}>
                        <h2 className={cn(s.project__title)}>
                            Закажите или сделайте сами музыкальную автобиографию семьи
                        </h2>
                        <p className={cn(s.project__subtitle)}>
                            Музыка и запахи - самый быстрый путь к воспоминаниям,
                            даже в сравнении с визуальной памятью.
                        </p>
                        <p className={cn(s.project__subtitle)}>
                            Созданные нами или с нашей консультации домашние концерты в аудиозаписях заказали уже более
                            20
                            семей.
                        </p>
                        <p className={cn(s.project__subtitle)}>
                            По отзывам в каждой семье укрепились отношения между разными поколениями, улучшилось
                            восприятия
                            друг друга через общую музыку, ушли на продолжительное время симптомы постстрессового
                            состояния.
                        </p>
                        <p className={cn(s.project__subtitle)}>
                            Мы предлагаем создать необычный эмоциональный подарк на памятные даты семьи.
                        </p>
                        <p className={cn(s.project__subtitle)}>
                            Это будет домашний концерт в записи с подборкой значимых для одариваемого песен и
                            индивидуальным
                            оформлением каталога личных песен на флешку или в онлайн-папку со списком песен на бумажном
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            носителе, разработка музыкальной автобиографии семьи "под ключ" как подарка одному из
                            близких на
                            юбилеи и другие поводы.
                        </p>
                        <p className={cn(s.project__subtitle)}>
                            По многочисленным исследованиям и личному опыту участников проекта музыка делает личные
                            воспоминания наиболее объединяющими и полезными как для физического, так и для душевного
                            здоровья. Поэтому наш продукт особенно актуален при депрессивном состоянии вашего близкого
                            старшего поколения.
                        </p>
                        <div className={cn(s.button__container)}>
                            <Button href="#contactSection">заказать плейлист</Button>
                            <Button href="#contactSection">спросить</Button>
                        </div>
                    </div>
                </section>

                <section className={cn(s.project__content)}>
                    <div>
                        <h2 className={cn(s.content__title)}>О ПРОЕКТЕ</h2>
                        <p className={cn(s.content__subtitle)}>
                            Идея проекта появилась после многолетней работы участников команды с семьями, со взрослыми
                            людьми, и в проектах по организации концертов.
                        </p>
                        <p className={cn(s.content__subtitle)}>
                            На встречах, где люди слушали или пели музыку, которая была важна им лично, происходили
                            преображения.
                        </p>
                        <p className={cn(s.content__subtitle)}>
                            Например, человек с полной потерей памяти и способности говорить начинал петь и делиться
                            воспоминаниями юности, человек с депрессией начинал улыбаться и танцевать.
                        </p>
                        <p className={cn(s.content__subtitle)}>
                            Ещё одним поводом к созданию проекта стало создание по особой технологии музыкального
                            плейлиста
                            на 70-летие папы одной из участниц проекта.
                        </p>
                        <p className={cn(s.content__subtitle)}>
                            Правильно подобранная музыка и верные слова ведущего помогли объединиться всем гостям и
                            оставить
                            положительные отзывы, даже нетипичные для этих людей.
                        </p>
                        <p className={cn(s.content__subtitle)}>
                            Наша команда решила дарить этот опыт и далее.
                        </p>
                        <p className={cn(s.content__subtitle)}>
                            Проект разрабатывался с октября по декабрь 2021 года.
                        </p>
                        <p className={cn(s.content__subtitle)}>
                            Опорой стали знания из музыкальной терапии.
                        </p>
                        <div className={cn(s.content__button)}>
                            <Button href="#contactSection">Заказать плейлист</Button>
                        </div>
                    </div>
                    <div>
                        <h2 className={cn(s.content__title)}>ЦЕЛИ ПРОЕКТА</h2>
                        <p className={cn(s.content__subtitle)}>
                            Предоставить возможность делать эмоциональный, запоминающийся и необычный подарок дорогому
                            человеку в памятные дни или для каждого года жизни.
                        </p>
                        <p className={cn(s.content__subtitle)}>
                            Предоставлять возможность и подростку, и всем членам одной семьи пережить общность всех
                            поколений своей семьи, проявить интерес к семейной истории.
                        </p>
                        <p className={cn(s.content__subtitle)}>
                            Предоставлять возможность семье создать собственную музыкальную реликвию, музыкальную
                            автобиографию и помочь ощутить связь семьи со всей страной и общей историей.
                        </p>
                        <p className={cn(s.content__subtitle)}>
                            Предоставить возможность родственникам и ухаживающим за людьми старшего возраста или людям,
                            пережившим психологическую травму создавать музыкальные карты главных событий жизни человека
                            -
                            сохранять общение с человеком в моменты конфликтов, стресса и даже на поздней стадии
                            деменции,
                            сокращать число приступов тревожности, агрессии, увеличить количество моментов совместной
                            радости.
                        </p>
                        <p className={cn(s.content__subtitle)}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Предлагать обществу размышлять над вопросом "хорошая" и "плохая" музыка с учетом связи
                            музыки с
                            моментами жизни человека и пониманием, что прожитая жизнь легче осмысляется и принимается
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            человеком через "музыкальное путешествие" по этапам жизни.
                        </p>
                        <div className={cn(s.content__button)}>
                            <Button href="#contactSection">Заказать плейлист</Button>
                        </div>
                    </div>
                    <div>
                        <img src={bottomImages} alt="фото команды" className={cn(s.content__image)}/>
                    </div>
                </section>
                <section className={cn(s.contact)} id="contactSection">
                    <div className={cn(s.contact__info)}>
                        <h2 className={cn(s.contact__title)}>Свяжитесь с нами</h2>
                        <a href="mailto:muznii4you@gmail.com" className={cn(s.contact__link)}>muznii4you@gmail.com</a>
                        <a href="tel:+79296419491" className={cn(s.contact__link)}>+7 929 641 94 91</a>
                        <div>
                            <a href="https://t.me/pUQM5a1VWQpiYTcy" target="_blank" rel="noopener noreferrer"
                               className={cn(s.contact__social)}><img
                                src={telegram} alt="telegram"/></a>
                            <a href="https://vk.com/club212076556" target="_blank" rel="noopener noreferrer"><img
                                src={vk} alt="vk"/></a>
                        </div>
                    </div>
                    <div className={cn(s.contact__form)}>
                        <Form/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Project;