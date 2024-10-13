import React from 'react'

const Grid = () => {
  return (
    // <div className='bg-red-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4'>
    //   <div className='bg-green-500 flex-1 text-center font-medium'>
    //     <a href="#">Home</a>
    //   </div>
    //   <div className='bg-violet-500 flex-1 text-center'>
    //     <a href="#">Contact</a>
    //   </div>
    //   <div className='bg-blue-500 flex-1 text-center'>
    //     <a href="#">Career</a>
    //   </div>
    //   <div className=' bg-slate-500 flex-1 text-center'>
    //     <a href="#">About US</a>
    //   </div>
    // </div>
    <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 bg-gray-200 p-4'>
      <div className='text-center bg-red-400 p-2 border rounded-lg'>Article 1</div>
      <div className='text-center bg-green-400 p-2 border rounded-lg'>Article 2</div>
      <div className='text-center bg-violet-400 p-2 border rounded-lg'>Article 3</div>
      <div className='text-center bg-blue-400 p-2 border rounded-lg'>Article 4</div>
      <div className='text-center bg-indigo-400 p-2 border rounded-lg'>Article 5</div>
      <div className='text-center bg-slate-400 p-2 border rounded-lg'>Article 6</div>

    </div>
  )
}

export default Grid