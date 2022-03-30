import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Slider.css'

const Slider = () => {

    return (
        <div>
           <div  style={{display : 'flex' , justifyContent : 'space-evenly' , marginTop : '100px'}}>
           <Link to={`/sliders/cover`}>Cover Flow</Link>
            <Link to={`/sliders/flip`}>Flip</Link>
            
            <Link to={`/sliders/cards`}>Card</Link>
           </div>
            <Outlet></Outlet>
        </div>
        
    );
};

export default Slider;