import React,{useState} from 'react';
import { BorderStyle } from 'react-bootstrap-icons';


import { Button, ButtonGroup } from 'reactstrap';


export const Element1 = () => {
    const [flavor, setflavor] = useState("");
    const handleClick = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="element">
        
            <ButtonGroup className="element" onClick={handleClick}>
            <Button className="rounded-circle vanilla"  variant="secondary" value="vanilla"> </Button>
            <Button className="rounded-circle straw" variant="secondary" value="straw"></Button>
            <Button className="rounded-circle choc" variant="secondary" value="choc"></Button>
            <Button className="rounded-circle matcha" variant="secondary" value="matcha"></Button>
            <Button className="rounded-circle milk" variant="secondary" value="milk"></Button>
            <Button className="rounded-circle coffee" variant="secondary" value="coffee"> </Button>
            </ButtonGroup>  
        
        </div>
    );
};
