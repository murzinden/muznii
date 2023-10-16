import React from 'react';
import s from './Button.module.css'
import cn from "classnames";

const Button = ({children, className, href="#"}) => {
    return (
        <>
            <a href={href} className={cn(s.button, className)}>{children}</a>
        </>
    );
};

export default Button;