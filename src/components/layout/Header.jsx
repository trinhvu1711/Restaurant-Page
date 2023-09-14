import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header className='flex items-center justify-between px-8 py-2 header gap-x-10'>
      <div className='flex items-center logo'>
        <img src="public\images\logo.png" alt="" className='w-12 h-12 mr-1' />
        <div className='text-lg font-semibold'>
          <span className='text-cyan-400'>Grand</span><span>Cafe</span>
        </div>
      </div>
      <div className="flex items-center text-lg font-light gap-x-4 nav-item">
        <NavLink to='/' >Menu</NavLink>
        <NavLink to='/' >About</NavLink>
        <NavLink to='/' >Review</NavLink>
        <NavLink to='/' >Contact</NavLink>
      </div>
    </header>
  )
}

export default Header