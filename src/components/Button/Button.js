import React from 'react';
import s from './Button.module.css'

const Button = ({title, onClick}) => {
    return (
        <div>
            <button className={s.btn} onClick={onClick}>{title}</button>
        </div>
    );
};

export default Button;