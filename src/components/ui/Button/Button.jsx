import React from 'react';
import s from './Button.module.css'
import cn from "classnames";
import {Link} from "react-router-dom";


const Button = ({children, className, href="#"}) => {
    if (href.startsWith('/')) {
        // Для межстраничной навигации используем Link
        return (
            <Link to={href} className={cn(s.button, className)}>{children}</Link>
        );
    } else {
        // Для навигации внутри страницы используем обычный тег <a>
        return (
            <a href={href} className={cn(s.button, className)}>{children}</a>
        );
    }
};

export default Button;