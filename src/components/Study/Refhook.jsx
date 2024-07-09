import {React, useState, useRef} from 'react'

const Refhook = () => {
    const [count, setCount] = useState(0)

    const countRef = useRef(0)
    const handleIncrement = () =>{
         setCount(count+1)
         countRef.current++
         
        
         console.log(`Count is ${count}`);
         console.log(`Ref value is ${countRef.current} `);
         

    } 
  return (
    <div className='flex flex-col justify-center items-center align-middle'>
        <h1>{count}</h1>
        <button className='bg-violet-500 px-4 py-2 text-white rounded-2xl' onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Refhook