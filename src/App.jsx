import "./App.css";
import Child1 from "./components/Child1";
import { Child2 } from "./components/Child2";
const App = () => {
  let info={
    name:"Ajay",
    contact:123,
    city:"Bhopal"
  }
  let name="Abhishek";
  return (
    <div>
     <Child1 name={name}/>
    </div>
  )
}

export default App