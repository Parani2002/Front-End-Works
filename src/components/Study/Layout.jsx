import React from 'react'

const Layout = () => {
  return (
    <div className='h-screen'>
    <header className='bg-blue-500 text-center h-1/4 '>
        <h1>This is Header Section</h1>
    </header>
    <main className='flex h-1/2'>
        <nav className='w-1/4 bg-orange-400 text-center'>Navigation</nav>
        <article className='w-1/2 bg-violet-500 text-center'>Article</article>
        <aside className='w-1/4 bg-slate-600 text-center'>Aside</aside>
    </main>
    <footer className='bg-red-500 text-center h-1/4'>
        <h1>This is Footer Section</h1>
    </footer>
    </div>
  )
}

export default Layout