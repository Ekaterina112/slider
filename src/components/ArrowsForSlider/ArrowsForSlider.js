import React from "react";
import s from './Arrows.module.css'
import nextArrow from './../../assets/icons/right-arrow.svg'
import backArrow from './../../assets/icons/left-arrow.svg'

export const SampleNextArrow = ({onClick}) => {
    return (
        <div className={s.arrowContainer}>
            <img src={nextArrow} alt={'next arrow'} className={s.icon}/>
        </div>
    );
}

export const SamplePrevArrow = ({onClick}) => {
    return (
        <div className={s.arrowContainer} onClick={onClick}>
            <img src={backArrow} alt={'back arrow'} className={s.icon}/>
        </div>
    );
}