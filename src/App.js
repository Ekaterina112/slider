import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Button from "./components/Button/Button";
import {CenterMode} from "./components/Slider/Slider";


function App() {
    return (
        <div className="App">
            <h1>What We Do</h1>
            <h3>We develop successful apps for our clients who range from startup entrepreneurs to Fortune 500s</h3>
            <CenterMode/>

            <Button title={'Read more'}/>
        </div>
    );
}

export default App;
