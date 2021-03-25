import React from 'react'
import { Link } from "react-router-dom";

export const Basket = () => {
    return (
      <div class="containerForCart">
      <div class="shopping-cart">
        <div class="shopping-cart-header">
          <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">3</span>
          <div class="shopping-cart-total">
            <span class="lighter-text">Total:</span>
            <span class="main-color-text">$33</span>
          </div>
        </div> 
    
        <ul class="shopping-cart-items">
          <li class="clearfix">
            <span class="item-name">Chocolate with chocolate syrup</span>
            <span class="item-price">$10</span>
            <span class="item-quantity">Quantity: 01</span>
          </li>
    
          <li class="clearfix">
            <span class="item-name">Cream with caramal and biscuit</span>
            <span class="item-price">$15</span>
            <span class="item-quantity">Quantity: 01</span>
          </li>
    
          <li class="clearfix">
            <span class="item-name">Vanilla</span>
            <span class="item-price">$8</span>
            <span class="item-quantity">Quantity: 01</span>
          </li>
        </ul>
    
        <Link to="/CheckOut"><button type="submit" class="btn btn-primary btn-ghost">Check Out</button></Link>
      </div> 
    </div> 
        
      
    );
};
