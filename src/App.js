import './CSS/Home.css';
import { Header } from "./Home/Header/Header";
import { Choose } from "./Home/Body/ChooseForm/Choose";
import { Title1 } from './Home/Body/Step1/Title1/Title1';
import { Element1 } from './Home/Body/Step1/Element1/Element1';


function App() {
  return (
    <div>
      <Header/>
        <Choose/> 
    </div>
  );
};

export default App;
