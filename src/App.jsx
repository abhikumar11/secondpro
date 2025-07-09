import "./App.css";
import Child1 from "./components/Child1";
import { Child2 } from "./components/Child2";

const App = () => {
  let info={
    name:"Ajay",
    contact:123,
    city:"Bhopal"
  }
  return (
    <div>
     <Child1 userinfo={info}/>
    </div>
  )
}

export default App