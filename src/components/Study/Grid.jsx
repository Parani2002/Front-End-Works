import React from 'react'

const Grid = () => {
  return (
    <div className='bg-red-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4'>
      <div className='bg-green-500 flex-1 text-center font-medium'>
        <a href="#">Home</a>
      </div>
      <div className='bg-violet-500 flex-1 text-center'>
        <a href="#">Contact</a>
      </div>
      <div className='bg-blue-500 flex-1 text-center'>
        <a href="#">Career</a>
      </div>
      <div className=' bg-slate-500 flex-1 text-center'>
        <a href="#">About US</a>
      </div>
     
      
    

    </div>
  )
}

export default Grid