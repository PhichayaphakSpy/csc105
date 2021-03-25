import React from 'react'
import { TitleForm } from './TitleForm/TitleForm'
import { Username } from './username/Username'
import { UsernameInput } from './username/UsernameInout'
import { Email } from './Email/Email'
import { EmailInput } from './Email/EmailInput'
import { Password } from './Password/Password'
import { PasswordInput } from './Password/PasswordInput'
import { PhoneNumber } from './PhoneNumber/PhoneNumber'
import { PhoneCode } from './PhoneNumber/PhoneCode'
import { PhoneInput } from './PhoneNumber/PhoneInput'
import { Address } from './Address/Address'
import { AddressInput } from './Address/AddressInput'
import { Term } from './TermPrivacy/Term'
import { ButtonSignUp } from './ButtonSignUp/ButtonSignUp'

export const Form = () => {
    return (
        <div className="container">
            <TitleForm/>
            <Username/>
            <UsernameInput/>
            <Email/>
            <EmailInput/>
            <Password/>
            <PasswordInput/>  
            <br/>
           <PhoneNumber/><PhoneCode/>
           <PhoneInput/>
           <Address/>
           <AddressInput/>

           
          <Term/>
        <ButtonSignUp/>
          
        </div>
    )
}
