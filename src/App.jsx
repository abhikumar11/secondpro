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
      <FcBearish fontSize={"50px"}/><FcBullish style={{color:"pink"}}/>
     <Child1 name={name}/>
    </div>
  )
}
//app->c1->c2->(c3,c4)->c5
export default App