import { Child2 } from "./Child2"

const Child1 = (props) => {
  return (
    <div>
      <h1 style={{ backgroundColor: "hotpink" }}>Child1</h1>
      <Child2 userinfo={{...props.userinfo}}/>
    </div>
  )
}

export default Child1