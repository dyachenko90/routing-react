import React from 'react'
import { Outlet, Link } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <header className='header'>
        <nav className='container header-wrap'>
          <Link to='/'>Home</Link>
          <Link to='/news'>News</Link>
          <Link to='/about'>About</Link>
          <Link to='/posts'>Posts</Link>
          <Link to='/registration'>Registration</Link>
        </nav>
      </header>
      <main className='container main-wrap'>
        <Outlet>

        </Outlet>
      </main>
      <footer className='footer'>
        <div className='container footer-wrap'>Footer</div>
      </footer>
    </>
  )
}

export default Layout