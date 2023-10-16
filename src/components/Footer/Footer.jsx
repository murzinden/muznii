import React from 'react';
import cn from "classnames";
import s from "../Footer/Footer.module.css";

const Footer = () => {
    return (
        <footer className={cn(s.footer)}>
            <a href="mailto:muznii4you@gmail.com" className={cn(s.footer__link)}>muznii4you@gmail.com</a>
            <p className={cn(s.footer__text)}>
                © 2022 МузНИИ музыкальная научно-исследовательская инициатива.
            </p>
        </footer>
    );
};

export default Footer;