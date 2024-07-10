import {React,useState} from 'react'

const Hero = () => {
    const[isVisible,setVisible] = useState(false)

    const showContact = () => setVisible(true)
  return (
    <div className='flex'>

    
    <div className='p-8 h-screen w-3/4'>
        <header className='flex justify-between items-center mb-16'>
            <img src="src/assets/6543592.jpg" alt="" srcset="" className='h-20 w-20 '/>

            <nav className='flex gap-4 font-medium tracking-wide  pr-8  items-center'>
                <a href="#" className='text-lg hover:text-gray-600 '>Product</a>
                <a href="" className='text-lg hover:text-gray-600'>Features</a>
                <a href="" className='text-lg hover:text-gray-600'>Marketplace</a>
                <button className='border rounded-lg bg-violet-500 px-4 py-2 hover:bg-violet-600 transition hover:transition-transform-300'>
                    <a href="" className='text-lg'>Contact US</a>
                </button>
            </nav>
        </header>
        <section id='main'>
            <div className='flex flex-col mb-8'>
                <p className='text-7xl font-extrabold mb-2 tracking-normal'>Data to enrich your</p>
                <p className='text-7xl font-extrabold text-violet-800'>online buisness </p>
            </div>
            <div className='text-slate-500 mb-8 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse tempore ullam porro officiis nostrum! Nihil facilis optio repellat in voluptas reprehenderit alias recusandae ex atque, corporis dolorum vitae, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptates incidunt quo eius at hic voluptas autem, tempora corporis provident iste, nostrum inventore delectus? Eveniet cupiditate ad ipsam excepturi nostrum.</div>
            <div className='flex gap-4'>
                <button className='border text-white bg-violet-600 hover:bg-violet-800 px-4 py-2 rounded-lg tracking-wide' onClick={showContact}>Get started</button>
                <button className='border text-violet-500 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded-lg tracking-wide'>Live Demo</button>
            </div>
            {isVisible && <div>Contact us via 0778819814</div>}
        </section>
    </div>
    <div className='w-1/2'>
        <img src="src/assets/brooke-cagle--uHVRvDr7pg-unsplash.jpg" alt=""  srcset="" className='h-screen object-cover leading-5' />
    </div>
    </div>
  )
}

export default Hero