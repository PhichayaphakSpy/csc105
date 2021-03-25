import React from 'react'
import { BasketPopUp } from './Basket/BasketPopUp'
import { LogInPopUp } from "./User/LogInPopUp"

export const Nav = () => {
    return (
        <div>
            <LogInPopUp/>
            <BasketPopUp/>
        </div>
    )
}
