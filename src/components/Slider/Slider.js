import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './Slider.module.css'
import {SampleNextArrow, SamplePrevArrow} from "../ArrowsForSlider/ArrowsForSlider";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img4 from "../../assets/4.jpg";
import Card from "../Card/Card";


const cards = [
    {src: img1, title: 'Mobile Apps', information: 'sdfgbhn'},
    {src: img2, title: 'Cutting EDGE', information: 'sdfgvvvvvbhn'},
    {src: img4, title: 'Web Development', information: 'sdfgbhn'},
]
export const CenterMode = () => {

    const [selectedCard, setSelectedCard] = useState(0)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        beforeChange: (current, next) => setSelectedCard(next)
    }
    return (
        <div className={s.sliderContainer}>
            <Slider {...settings}>
                {cards.map((card, index) => <Card classname={selectedCard === index ? 'selectedSlider' : 'slider'}
                                                  key={index} src={card.src} title={card.title}
                                                  information={card.information}/>)}
            </Slider>
        </div>);
}