import React from 'react';
import choc from "./choc.jpg";
import coffee from "./coffee.jpg";
import milk from "./milk.jpg" ;
import straw from "./straw.jpg";
import matcha from "./matcha.jpg";
import vanilla from "./vanilla.jpg";

export const Element1 = () => {
    return (
        
        <div className="element">
            <img src = {vanilla}/>
            <img src = {straw}/>
            <img src = {choc} />
            <img src = {matcha} />
            <img src = {milk} />
            <img src ={coffee} />   
        </div>
    );
};
