import React from 'react'
import chocolate from './chocolate.jpg' ;
import caramel from "./caramel.jpg";
import bs from "./butterscotch.jpg";
import maple from "./maple.jpeg" ;
import rose from "./rose.jpg" ;
import burry from "./berry.jpg";
import chip from "./chip.jpg";
import oreo from "./oreo.jpg";
import bc from "./biscuit.jpg";
import straw from "./strawberry.jpg"

export const Element2 = () => {
    return (
        <div className="element">
            <img src = {chocolate} /> 
            <img src = {caramel}/>
            <img src = {bs}/>
            <img src = {maple}/>
            <img src = {chip}/>
            <img src = {oreo}/>
            <img src = {bc}/>
            <img src ={rose}/>
            <img src = {burry}/>
            <img src ={straw}/>
            
        </div>
    );
};
