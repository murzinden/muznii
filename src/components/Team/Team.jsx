// eslint-disable-next-line no-unused-vars
import React from 'react';
import cn from "classnames";
import s from "./Team.module.css"
import andrey from "./images/andrey.jpg"
import irina from "./images/irina.jpg"
import julia from "./images/julia.jpg"
import juliasherbakova from "./images/juliasherbakova.jpg"
import maria from "./images/maria.jpg"
import stepan from "./images/stepan.jpg"
import Footer from "../Footer/Footer.jsx";

const Team = () => {
    return (
        <>
            <main className={cn(s.main)}>
                <h1 className={cn(s.main__title)}>Авторы проекта 2023г</h1>
                <section className={cn(s.authors)}>
                    <div className={cn(s.authors__box)}>
                        <img src={irina} alt="irina" className={cn(s.authors__image)}/>
                        <h4 className={cn(s.authors__title)}>Ирина Алимова</h4>
                        <p className={cn(s.authors__subtitle)}>гр. Калинов мост Кроха</p>
                        <p className={cn(s.authors__paragraph)}>Экспертиза внутри проекта: стратегия, разработка
                            услуг.
                        </p>
                    </div>
                    <div className={cn(s.authors__box)}>
                        <img src={julia} alt="julia" className={cn(s.authors__image)}/>
                        <h4 className={cn(s.authors__title)}>Юлия Гуца</h4>
                        <p className={cn(s.authors__subtitle)}>Гендель Пассакалия</p>
                        <p className={cn(s.authors__paragraph)}>
                            Экспертиза внутри проекта: стратегия, разработка услуг, реализация плейлистов (создание
                            индивидуальных подарков), запись голоса (роль ведущий в плейлисте).
                        </p>
                    </div>
                    <div className={cn(s.authors__box)}>
                        <img src={andrey} alt="andrey" className={cn(s.authors__image)}/>
                        <h4 className={cn(s.authors__title)}>Андрей Пакош</h4>
                        <p className={cn(s.authors__subtitle)}>Верди, опера Аида</p>
                        <p className={cn(s.authors__paragraph)}>
                            Экспертиза внутри проекта: стратегия, модерация встреч,
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            разработка услуг, "вытягивание" звука плейлистов.
                        </p>
                    </div>
                    <div className={cn(s.authors__box)}>
                        <img src={maria} alt="maria" className={cn(s.authors__image)}/>
                        <h4 className={cn(s.authors__title)}>Мария Пакош</h4>
                        <p className={cn(s.authors__subtitle)}>Высоцкий Баллада о борьбе</p>
                        <p className={cn(s.authors__paragraph)}>
                            Экспертиза внутри проекта: стратегия, разработка услуг, общение с друзьями проекта,
                            НКО-сообществом, прием первого запроса на плейлисты и разработка общего дизайна плейлиста,
                            участие в создании плейлиста, запись речь (роль ведущего в плейлсите).
                        </p>
                    </div>
                </section>
                <h2 className={cn(s.main__title)}>Авторы проекта 2021-2022гг</h2>
                <section className={cn(s.authors_big)}>
                    <div className={cn(s.authors__container)}>
                        <img src={irina} alt="irina" className={cn(s.authors__image_big)}/>
                        <h4 className={cn(s.authors__title)}>Ирина Алимова</h4>
                        <p className={cn(s.authors__subtitle)}>гр. Калинов мост Кроха</p>
                        <p className={cn(s.authors__paragraph)}>
                            Экспертиза внутри проекта: стратегия, разработка
                            услуг.
                        </p>
                    </div>
                    <div className={cn(s.authors__container)}>
                        <img src={julia} alt="julia" className={cn(s.authors__image_big)}/>
                        <h4 className={cn(s.authors__title)}>Юля Гуца</h4>
                        <p className={cn(s.authors__subtitle)}>Гендель «Пассакалия»</p>
                        <p className={cn(s.authors__paragraph)}>
                            Экспертиза в области психотерапии, физиотерапии и музыкально-терапевтических занятий.
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            "Я верю в наш проект, потому что музыка является "речью до речи"; музыка выстраивает мосты
                            между людьми вне зависимости от заболеваний, возраста
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            и статуса".
                        </p>
                    </div>
                    <div className={cn(s.authors__container)}>
                        <img src={andrey} alt="andrey" className={cn(s.authors__image_big)}/>
                        <h4 className={cn(s.authors__title)}>Андрей Пакош</h4>
                        <p className={cn(s.authors__subtitle)}>Верди, опера «Аида»</p>
                        <p className={cn(s.authors__paragraph)}>
                            Экспертиза в области руководства
                            ИТ-проектами и модерации команд.
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            "Я верю в наш проект, потому что
                            мы выросли и были согреты музыкой, которую пели нам наши матери; музыка остается мощнейшим
                            фактором, который на нас воздействует, просто
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            мы об этом забыли".
                        </p>
                    </div>
                    <div className={cn(s.authors__container)}>
                        <img src={maria} alt="maria" className={cn(s.authors__image_big)}/>
                        <h4 className={cn(s.authors__title)}>Маша Пакош</h4>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className={cn(s.authors__subtitle)}>Рамазотти "Più che puoi"</p>
                        <p className={cn(s.authors__paragraph)}>
                            Экспертиза в области управления
                            НКО-проектами, разработки
                            и проведения музыкально-терапевтических занятий.
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            "Я верю в наш проект, потому что верю
                            в нашу команду и вижу моменты радостных изменений от присутствия лично-значимой музыки в
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            жизни".
                        </p>
                    </div>
                    <div className={cn(s.authors__container)}>
                        <img src={juliasherbakova} alt="juliasherbakova" className={cn(s.authors__image_big)}/>
                        <h4 className={cn(s.authors__title)}>Юля Щербакова</h4>
                        <p className={cn(s.authors__subtitle)}>Чайковский «Осенняя песня»</p>
                        <p className={cn(s.authors__paragraph)}>
                            Экспертиза в области психологической реабилитации зависимостей, подготовки и получения
                            грантов, проведения музыкально-терапевтических занятий.
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            "Я верю в наш проект, потому что вижу результаты нашей работы; есть отзывы
                            о пользе плейлистов; в семьях меняются отношения в результате взаимодействия с нашим
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            проектом".
                        </p>
                    </div>
                    <div className={cn(s.authors__container)}>
                        <img src={stepan} alt="stepan" className={cn(s.authors__image_big)}/>
                        <h4 className={cn(s.authors__title)}>Степа Янин</h4>
                        <p className={cn(s.authors__subtitle)}>гр. Аквариум «Дубровский»</p>
                        <p className={cn(s.authors__paragraph)}>
                            Экспертиза в области координации волонтерских и студенческих команд, проектов.
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            "Я верю в наш проект, потому что музыка очень органична человеку; так жили наши предки,
                            окружая песнями всю жизнь от рождения до глубокой старости; так и наш проект оказывает
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            уникальную помощь в подборе музыки для жизни"..
                        </p>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Team;