import React from 'react'
import Child from "./Child"

function Parent({onDataFromChild}) {
    
  return (
    <div>
        <Child onDataFromChild ={onDataFromChild}/>
    </div>
  )
}

export default Parent