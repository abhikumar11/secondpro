const Child1 = (props) => {
  return (
    <div>
      <h1>This is child1</h1>
        <h2>{props.userinfo.name}</h2>
        <h2>{props.userinfo.contact}</h2>
    </div>
  )
}

export default Child1