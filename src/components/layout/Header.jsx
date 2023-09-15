import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header className='flex items-center justify-between px-8 py-2 header gap-x-10'>
      <NavLink to='/' className='flex items-center logo'>
        <img src="public\images\logo.png" alt="" className='w-12 h-12 mr-1' />
        <div className='text-lg font-semibold'>
          <span className='text-cyan-400'>Grand</span><span>Cafe</span>
        </div>
      </NavLink>
      <div className="flex items-center text-lg font-light gap-x-4 nav-item">
        <NavLink to='menu' >Menu</NavLink>
        <a href="#about">About</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  )
}

export default Header