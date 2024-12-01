import React, { useEffect, useState } from 'react'

const Effect = () => {
    const[counter1, setCounter1] = useState(0);
    const[counter2, setCounter2] = useState(0);
    //Type1: It executes on render and all state changes.
    useEffect(() => {
        console.log("use Effect is executed");
    })

     //Type2: It executes on render and all dependency changes.
     useEffect(() => {
        console.log("use Effect is executed");
    },[counter1])

     //Type3: It executes on render.
     useEffect(() => {
        console.log("use Effect is executed");
    },[])

  return (
    <div>
        <h1>{counter1}</h1>
        <h1>{counter2}</h1>

        <button onClick={()  => setCounter1(counter1 + 1)}>increment 1</button>
        <button onClick={()  => setCounter2(counter2 + 1)}>increment 2</button>

    </div>
  )
}

export default Effect