import React from 'react'
import Child4 from './Child4'

const Child3 = ({name}) => {
  return (
    <div>
        <h1 style={{ backgroundColor: "skyblue" }}>This is child 3</h1>
        <Child4 name={name}/>
    </div>
  )
}

export default Child3