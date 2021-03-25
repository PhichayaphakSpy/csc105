import logo from './ice-cream-logo-vector.jpg';
import { Nav}  from "./nav/Nav";

export const Header = () => {
    return (
    <div className="header">
    <img src ={logo} alt = "logo" />
    <Nav/>
    </div>
    );
};
 
export default Header;