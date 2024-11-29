import React, { useState } from 'react'

const Button = ({name,size}) => {
    // let isChecked = 'true';
    // const updateCheckbox = () => isChecked = "false";
    const[isChecked, setCheck] = useState(true);
    console.log("I am rendered....")
  return (
    <div className='p-8'>
        <button size ={size} onClick={() => setCheck(!isChecked)}>{name}</button><br />
        <input type="checkbox" checked={isChecked}  name="age" id="age" />
    </div>
  )
}

export default Button