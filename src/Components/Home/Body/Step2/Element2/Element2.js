import React,{useState} from 'react';
import { Button, ButtonGroup } from 'reactstrap';


export const Element2 = () => {
    const [flavor, setflavor] = useState("");
    const handleClick = (e) => {
        console.log(e.target.value)
    }

    return (
        
        <div className="element">
            <ButtonGroup className="element" onClick={handleClick}>
            <Button className="rounded-circle caramel" variant="secondary" value="caramel"> </Button>
            <Button className="rounded-circle bs" variant="secondary" value="butterscotch"></Button>
            <Button className="rounded-circle maple" variant="secondary" value="maple"></Button>
            <Button className="rounded-circle chocolate" variant="secondary" value="chocolate"></Button>
            <Button className="rounded-circle chip" variant="secondary" value="chip"></Button>
            <Button className="rounded-circle oreo" variant="secondary" value="oreo"></Button>
            <Button className="rounded-circle biscuit" variant="secondary" value="biscuit"> </Button>
            <Button className="rounded-circle rose" variant="secondary" value="rose"> </Button>
            <Button className="rounded-circle berry" variant="secondary" value="berry"> </Button>
            <Button className="rounded-circle strawberry" variant="secondary" value="strawberry"> </Button>
            </ButtonGroup>  
        
        </div>
    );
};



    