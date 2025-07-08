import "./App.css";
import Child1 from "./components/Child1";
import { Child2 } from "./components/Child2";

const App = () => {
  return (
    <div>
     <Child1 name="Data" age={23} city="Bhopal" contact={1234567890}/>
     <Child2  city="Delhi" contact={123}/>
    </div>
  )
}

export default App