import React from 'react'

function Child({onDataFromChild}) {
    const sendDatatoParent = () => {
        const data = "Hello I am from child component"
        onDataFromChild(data)
    }
  return (
    <div>
        <button onClick={sendDatatoParent}>Click ME</button>

    </div>
  )
}

export default Child