import React from 'react'

const Inline = () => {
  return (
    <div className='bg-red-600 p-4'>
        <span className='block w-full mb-4 md:inline-block bg-green-500 md:w-1/5 mr-4 text-center'>Home</span>
        <span className='block w-full mb-4 md:inline-block bg-violet-500 md:w-1/5 md:mr-4 text-center'>Contact</span>
        <span className='block w-full mb-4 md:inline-block bg-blue-500 md:w-1/5 md:mr-4 text-center'>Career</span>
        <span className='block w-full  md:inline-block bg-slate-500 md:w-1/5 text-center'>Contact US</span>

    </div>
  )
}

export default Inline