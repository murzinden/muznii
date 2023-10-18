import React from 'react';
import cn from "classnames";
import s from "./Volunteering.module.css"
import icon from "./images/volunteeringicon.jpg"
import flexImage from "./images/volunteering.jpg"
import Footer from "../Footer/Footer.jsx";

const Volunteering = () => {
    return (
        <>
            <main className={cn(s.main)}>
                <section className={cn(s.volunteering)}>
                    <div className={cn(s.volunteering__content)}>
                        <h2 className={cn(s.volunteering__title)}>Волонтерство</h2>
                        <div className={cn(s.volunteering__box)}>
                            <img src={icon} alt="icon" className={cn(s.volunteering__icon)}/>
                            <h3 className={cn(s.volunteering__subtitle)}>
                                АНО Комплексный центр медицинского
                                и социального обслуживания Якутии
                                (Наталья Каратаева)
                            </h3>
                            <p className={cn(s.volunteering__paragraph)}>
                                ноябрь 2022
                            </p>
                            <p className={cn(s.volunteering__paragraph)}>
                                Отправлены брошюры и рекомендации по использованию.
                            </p>
                        </div>
                        <div className={cn(s.volunteering__box)}>
                            <img src={icon} alt="icon" className={cn(s.volunteering__icon)}/>
                            <h3 className={cn(s.volunteering__subtitle)}>
                                Красный Крест Перми (Наталья Гуревич)
                            </h3>
                            <p className={cn(s.volunteering__paragraph)}>
                                ноябрь 2022
                            </p>
                            <p className={cn(s.volunteering__paragraph)}>
                                Отправлены брошюры и рекомендации по использованию.
                            </p>
                        </div>
                        <div className={cn(s.volunteering__box)}>
                            <img src={icon} alt="icon" className={cn(s.volunteering__icon)}/>
                            <h3 className={cn(s.volunteering__subtitle)}>
                                Социальная служба при храме Андрея Критского Петербурга (Юлия Витикер)
                            </h3>
                            <p className={cn(s.volunteering__paragraph)}>
                                ноябрь 2022
                            </p>
                            <p className={cn(s.volunteering__paragraph)}>
                                Отправлены брошюры и рекомендации по использованию.
                            </p>
                        </div>
                        <div className={cn(s.volunteering__box)}>
                            <img src={icon} alt="icon" className={cn(s.volunteering__icon)}/>
                            <h3 className={cn(s.volunteering__subtitle)}>
                                Внимание и забота/Школа патронажного ухода Москвы (Ольга Бекетова)
                            </h3>
                            <p className={cn(s.volunteering__paragraph)}>
                                Project Tagline
                            </p>
                            <p className={cn(s.volunteering__paragraph)}>
                                Отправлены брошюры и рекомендации по использованию.
                            </p>
                        </div>
                        <p className={cn(s.volunteering__text)}>
                            Мы с радостью отправляем по почте России в разные города или доставкой по Москве в разные
                            районы городанаши формы музыкальных дневников, чтобы вы могли использовать их в помощь себе
                            или своей организациии семье при уходе за человеком с деменцией. Пишите нам!
                        </p>
                    </div>
                    <div className={cn(s.volunteering__picture)}>
                        <img src={flexImage} alt="image" className={cn(s.volunteering__image)}/>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Volunteering;