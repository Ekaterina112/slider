import React from 'react';
import s from './Card.module.css'
import Button from "../Button/Button";

const Card = ({src, title, information, classname}) => {
    return (
        <div className={s[classname]}>
            <img className={s.imgBlock} src={src} alt={title}/>
            <div className={s.informBlock}>
                <h6>{title}</h6>
                <p>{information}</p>
                <Button title={'Read more'}/>
            </div>
        </div>
    );
};

export default Card;