import { Child2 } from "./Child2"

const Child1 = ({name}) => {
  return (
    <div>
      <h1 style={{ backgroundColor: "hotpink" }}>This is Child1</h1>
      <Child2 name={name}/>
    </div>
  )
}

export default Child1