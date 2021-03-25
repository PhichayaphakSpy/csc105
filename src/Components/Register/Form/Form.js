import React from 'react'
import { TitleForm } from './TitleForm/TitleForm'
import { Username } from './username/Username'
import { UsernameInput } from './username/UsernameInout'
import "./Register.css"
import { Email } from './Email/Email'
import { EmailInput } from './Email/EmailInput'
import { Password } from './Password/Password'
import { PasswordInput } from './Password/PasswordInput'

export const Form = () => {
    return (
        <div class="container">
            <TitleForm/>
            <Username/>
            <UsernameInput/>
            <Email/>
            <EmailInput/>
            <Password/>
            <PasswordInput/>
          
      
                  <label for="email"><b>Phone Number</b></label>
            <br>
           <select name="phoneCode" required>
            <option selected hidden value="">Code</option>
            <option value="66">+98</option>
            <option value="66">+99</option>
            <option value="66">+90</option>
            <option value="66">+66</option>
           </select>
           <input type="phone" name="phone" placeholder="00000000" required>

           <label for="adrress"><b>Address</b></label>
            <input type="text" name="address" placeholder="Enter Address" required>
      
          <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
      
          <div class="clearfix">
      
            <button type="submit" class="btn">Sign Up</button>
          </div>
        </div>
    )
}
