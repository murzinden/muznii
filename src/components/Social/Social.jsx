// eslint-disable-next-line no-unused-vars
import React from 'react';
import cn from "classnames";
import s from "./Social.module.css"
import Footer from "../Footer/Footer.jsx";

const Social = () => {
    return (
        <>
            <main className={cn(s.main)}>
                <h1 className={cn(s.main__title)}>Социальная деятельность</h1>
                <section className={cn(s.social)}>
                    <div className={cn(s.social__box)}>
                        <a href="https://www.kp.ru/daily/27490.5/4748981/" target="_blank" rel="noopener noreferrer"
                           className={cn(s.social__link)}>
                            Мобильная клиника для бездомных и посылки с орехами: 6 успешных практик заботы о старших
                            (Комсомольская Правда)
                        </a>
                        <p className={cn(s.social__subtitle)}>15 апреля 2023г.</p>
                    </div>
                    <div className={cn(s.social__box)}>
                        <a href="http://neuronovosti.ru/mozhet-li-proslushivanie-the-beatles-uluchshit-vashu-pamyat/"
                           target="_blank" rel="noopener noreferrer"
                           className={cn(s.social__link)}>
                            Может ли прослушивание The Beatles улучшить вашу память?
                            Перевод от автора МузНИИ (Нейроновости))
                        </a>
                        <p className={cn(s.social__subtitle)}>12 февраля 2023г.</p>
                    </div>
                    <div className={cn(s.social__box)}>
                        <a href="https://silveragemap.ru/baza-znaniy/konferentsii-koalitsii/praktiki-vovlecheniya-pozhilykh-lyudey-v-tvorcheskuyu-deyatelnost/"
                           target="_blank" rel="noopener noreferrer"
                           className={cn(s.social__link)}>
                            Практики вовлечения пожилых
                            в творчество (конференция Коалиции Забота рядом - итоги опроса и презентация брошюры с 45:46
                            минуты)
                        </a>
                        <p className={cn(s.social__subtitle)}>9 декабря 2022г.</p>
                    </div>
                    <div className={cn(s.social__box)}>
                        <a href="https://vozrast-online.ru/temy/sreda/muzykoterapiya-sila-muzyki-protiv-dementsii"
                           target="_blank" rel="noopener noreferrer"
                           className={cn(s.social__link)}>
                            Музыкотерапия: сила музыки против деменции (Возраст Онлайн)
                        </a>
                        <p className={cn(s.social__subtitle)}>24 ноября 2022г.</p>
                    </div>
                    <div className={cn(s.social__box)}>
                        <a href="https://www.asi.org.ru/news/2022/11/10/net-universalnogo-plejlista-dlya-lyudej-s-demencziej/?ysclid=lab0bzmmzt277504551"
                           target="_blank" rel="noopener noreferrer"
                           className={cn(s.social__link)}>
                            Нет универсального плейлиста
                            для людей с деменцией
                            (Агенство социальной информации)
                        </a>
                        <p className={cn(s.social__subtitle)}>10 ноябр 2022г.</p>
                    </div>
                    <div className={cn(s.social__box)}>
                        <a href="https://www.miloserdie.ru/wp-content/uploads/2022/11/musalbom.pdf" target="_blank"
                           className={cn(s.social__link)} rel="noopener noreferrer">
                            Музыкальный альбом воспоминаний от МузНИИ (брошюра
                            для заполнения семьей человека с деменцией на портале Милосердие.ру)
                        </a>
                        <p className={cn(s.social__subtitle)}>9 ноября 2022г.</p>
                    </div>
                    <div className={cn(s.social__box)}>
                        <a href="https://www.miloserdie.ru/news/kakuyu-muzyku-slushayut-pozhilye-opros-provodyat-chtoby-pomogat-im/?ysclid=lab0jc8lu225088102"
                           target="_blank" rel="noopener noreferrer"
                           className={cn(s.social__link)}>
                            Какую музыку слушают пожилые? (Милосердие.ру)
                        </a>
                        <p className={cn(s.social__subtitle)}>15 сентября 2022г.</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Social;