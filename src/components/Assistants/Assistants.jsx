// eslint-disable-next-line no-unused-vars
import React from 'react';
import cn from "classnames";
import s from "./Assistants.module.css"
import alexandra from "./images/alexandra.jpg"
import alexandrashetkina from "./images/alexandrashetkina.jpg"
import alexey from "./images/alexey.jpg"
import alina from "./images/alina.jpg"
import dmitriy from "./images/dmitriy.jpg"
import elena from "./images/elena.jpg"
import irina from "./images/irina.jpg"
import kristina from "./images/kristina.jpg"
import liza from "./images/liza.jpg"
import natalia from "./images/natalia.jpg"
import olga from "./images/olga.jpg"
import olgagrebneva from "./images/olgagrebneva.jpg"
import svetlana from "./images/svetlana.jpg"
import timur from "./images/timur.jpg"
import valentina from "./images/valentina.jpg"
import Footer from "../Footer/Footer.jsx";

const Assistants = () => {
    return (
        <>
            <main className={cn(s.main)}>
                <h1 className={cn(s.main__title)}>Наши помощники 2023г.</h1>
                <section className={cn(s.assistants)}>
                    <div className={cn(s.assistants__box)}>
                        <img src={valentina} alt="valentina" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Валентина Агафонова</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            Директор библиотеки Светлова (Москва) и Музея Булгакова (Москва)
                        </p>
                        <p className={cn(s.assistants__paragraph)}>
                            В 2023 году Валентина продолжает дарить нам возможность собираться в стенах Библиотеки для
                            разработки проекта и записи курсов. Летом 2023 года благодаря приглашению Валентины с
                            рассказом о проекте Мария Пакош выступила на крупном книжном фестивале «Красная площадь» в
                            Москве
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={olga} alt="olga" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Ольга Бекетова</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Директор Школы патронажного ухода "Внимание и забота"
                        </p>
                        <p className={cn(s.assistants__paragraph)}>
                            В 2023 году вдохновила Марию Пакош и Юлию Гуца к созданию курса для родственников о музыке и
                            деменции. Ольга помогла найти семьи, которым мы сделали подарочные плейлисты на средства
                            нашего благотворителя Хайдара Ф.
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={svetlana} alt="svetlana" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Светлана Дроздова</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Вокальный и музыкальный терапевт, создатель курсов по музыкальной терапии, член Секции по
                            музыкальной терапии с людьми старшего возраста при Ассоциации музыкальных психологов и
                            психотерапевтов.
                        </p>
                        <p className={cn(s.assistants__paragraph)}>
                            Светлана предоставляет инструментальные треки для плейлистов по запросу команды.
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={elena} alt="elena" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Елена Ефимовская</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            Специалист по вокальной и социально-культурной реабилитации на базе постинсультного
                            отделения больницы (Петербург), член Секции АМПП (Ассоциации музыкальных психологов и
                            психотерапевтов).
                        </p>
                        <p className={cn(s.assistants__paragraph)}>
                            Елена делиться случаями из практики терапевтического использования песен для публикации в
                            социальных сетях проекта.
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={timur} alt="timur" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Тимур Иванов</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            Врач-невролог и реабилитолог.
                            Научный сотрудник Федерального центра мозга
                            и нейротехнологий.
                        </p>
                        <p className={cn(s.assistants__paragraph)}>
                            Консультирует команду при разработке плейлистов в случае появления специфических вопросов,
                            связанных с неврологическими заболеваниями.
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={alina} alt="alina" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Алина Ростоцкая</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            Джазовая певица и композитор.
                            Автор обучающих программ и жюри джазовых конкурсов
                        </p>
                        <p className={cn(s.assistants__paragraph)}>
                            Алина поддерживает проект письмами при написании грантов, а также консультирует по
                            специфическим музыкальным вопросам по разработке плейлистов..
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={kristina} alt="kristina" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Кристина Салахутдинова</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            Модератор групп по разработке стратегии в крупных государственных и частных проектах.
                        </p>
                        <p className={cn(s.assistants__paragraph)}>
                            Кристина вдохновляет продолжать делать проект, предлагает новые идеи развития, а также сама
                            использовала идею персонального плейлиста на праздновании своего дня рождения.
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={natalia} alt="natalia" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Наталья Семина</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            Эксперт в области коммуникаций и продвижения проектов, основатель нескольких фондов России,
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            в том числе идеолог фонда "Весна"
                        </p>
                        <p className={cn(s.assistants__paragraph)}>
                            Наталья периодически помогает с оформлением внешних материалов проекта.
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={alexey} alt="alexey" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Алексей Паевский</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            Научный журналист, лектор, популяризатор науки, создатель и главный редактор портала
                            «Нейроновости»
                        </p>
                        <p className={cn(s.assistants__paragraph)}>
                            Алексей публикует материалы об исследованиях в области музыки в неврологии и терапии, в том
                            числе с упоминанием проекта.
                        </p>
                    </div>
                </section>
                <h1 className={cn(s.main__title)}>Наши помощники 2022г.</h1>
                <section className={cn(s.assistants_tworows)}>
                    <div className={cn(s.assistants__box)}>
                        <img src={alexandra} alt="alexandra" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Александра Винокурова</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            Организатор и вдохновитель мероприятий в ретро-стилистике. Участвовала в первой
                            стратегической встрече команды МузНИИ по разработке проекта.
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={olgagrebneva} alt="olgagrebneva" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Ольга Гребнева</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Основатель сервиса организации ухода за пожилыми людьми на дому
                            «Не один» c 15-летним опытом управления проектами в сфере социального обслуживания.
                        </p>
                        <p className={cn(s.assistants__paragraph)}>
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={liza} alt="liza" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Лиза Олескина</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Директор благотворительного
                            фонда «Старость в радость».
                            Партнер проекта МузНИИ
                            по проведению опроса осенью 2022 года в рамках гранта Фонда Тимченко.
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={dmitriy} alt="dmitriy" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Дмитрий Рогозин</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            Эксперт в области социологических опросов, ученый, директор Центра полевых исследований ИНСАП РАНХиГС. Помогает команде МузНИИ разрабатывать опрос, задает направление опроса, участвовал
                            во встрече команды.
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Дмитрий придумал расшифровку МузНИИ как "музыкальной научно-исследовательской инициативы"..
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={irina} alt="irina" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Ирина Соловьева</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            Эксперт в области обучения по профилю социальной работы с 20-летним педагогическим опытом. Автор изделий из дерева на морские тематики. Выступает в роли медиатора проекта
                            в кругах специалистов по социальной работе и в научно-образовательной среде.
                        </p>
                    </div>
                    <div className={cn(s.assistants__box)}>
                        <img src={alexandrashetkina} alt="alexandrashetkina" className={cn(s.assistants__image)}/>
                        <h4 className={cn(s.assistants__title)}>Александра Щеткина</h4>
                        <p className={cn(s.assistants__subtitle)}>
                            Директор благотворительного фонда помощи пациентам с деменцией и их родственникам «Альцрус». Партнер проекта МузНИИ по проведению опроса осенью 2022 года
                            в рамках гранта Фонда Тимченко
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Assistants;