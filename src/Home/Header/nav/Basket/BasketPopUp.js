import React from "react";
import Popup from "reactjs-popup";
import { Basket } from "./Basket";
import { Basket3Fill } from 'react-bootstrap-icons';

export const BasketPopUp  = () => {
  return (<Popup trigger={<button> <Basket3Fill/> </button>} position="bottom right">
    <div><Basket/></div>
  </Popup>);
};