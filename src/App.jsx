import "./App.css";
import Child1 from "./components/Child1";
import { Child2 } from "./components/Child2";
import {FcBullish,FcBearish} from "react-icons/fc";
const App = () => {
  let info={
    name:"Ajay",
    contact:123,
    city:"Bhopal"
  }
  let name="Abhishek";
  return (
    <div>
      <FcBearish/><FcBullish/>
     <Child1 name={name}/>
    </div>
  )
}

export default App