import React, {useState} from 'react';
import cn from "classnames";
import s from "./Header.module.css"
import {Link} from "react-router-dom";
import closeicon from "../../../public/images/closeicon.jpg";
import burgermenu from "../../../public/images/burgermenu.jpg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    return (
        <header className={cn(s.header)}>
            <nav>
                <ul className={cn(s.header__nav, {[s.open]: isMenuOpen})}>
                    <li><Link to="/" className={cn(s.header__link)} onClick={closeMenu}>О проекте</Link></li>
                    <li><Link to="/reviews" className={cn(s.header__link)} onClick={closeMenu}>Отзывы</Link>
                    </li>
                    <li><Link to="/team" className={cn(s.header__link)} onClick={closeMenu}>Команда</Link></li>
                    <li><Link to="/assistants" className={cn(s.header__link)} onClick={closeMenu}>Наши
                        помощники</Link></li>
                    <li><Link to="/social" className={cn(s.header__link)} onClick={closeMenu}>Социальная
                        деятельность</Link></li>
                    <li><Link to="/volunteering" className={cn(s.header__link)}
                              onClick={closeMenu}>Волонтерство</Link></li>
                    <li><Link to="/order" className={cn(s.header__link)} onClick={closeMenu}>Заказать</Link>
                    </li>
                </ul>
            </nav>
            <div className={cn(s.menuToggle)} onClick={toggleMenu}>
                {isMenuOpen ? <img src={closeicon} alt="Close"/> : <img src={burgermenu} alt="Menu"/>}
            </div>
            <a href="mailto:muznii4you@gmail.com"
               className={cn(s.header__link, s.emailLink)}>muznii4you@gmail.com</a>
        </header>
    );
};

export default Header;