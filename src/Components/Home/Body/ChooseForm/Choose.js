import React from 'react'
import { Element1 } from '../Step1/Element1/Element1'
import { Title1 } from '../Step1/Title1/Title1'
import { Element2 } from '../Step2/Element2/Element2'
import { Title2 } from '../Step2/Title2/Title2'
import { PickSize } from '../Step3/PickSize/PickSize'
import { Title3 } from '../Step3/Title3/Title3'
import { AddtoCart} from '../AddToCart/AddtoCart'

export const Choose = () => {
    return (
        <div className="choose">
            <Title1/>
        <Element1/>
        <hr/>
        <Title2/>
        <Element2/>
        <hr/>
        <Title3/>
        <PickSize/>
        <AddtoCart/>
    </div>
    )
}
