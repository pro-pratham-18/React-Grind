import React from 'react'
import { NavLink } from 'react-router'

const NotFound = () => {
  return (
    <div className='p-3'>
        <p className='font-bold'>ERROR-404</p>
        <p>Page Not Found</p>
        <NavLink to='/home'>Click for HomePage</NavLink>
    </div>
  )
}

export default NotFound
