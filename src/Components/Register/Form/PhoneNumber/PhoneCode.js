import React from 'react'

export const PhoneCode = () => {
    return (
        <div><select name="phoneCode" required>
            <option selected hidden value="">Code</option>
            <option value="66">+98</option>
            <option value="66">+99</option>
            <option value="66">+90</option>
            <option value="66">+66</option>
           </select></div>
        
    );
};
export default PhoneCode;