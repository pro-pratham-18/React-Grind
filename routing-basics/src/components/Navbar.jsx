
import { Link,NavLink } from 'react-router' // whatever you are using you must import it 

const Navbar = () => {
  return (
    <div className='flex justify-between p-2 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white'>
        <div><p>Joshi Restaurant</p></div>
      <ul className='flex gap-4'>
        <li>
            <NavLink to="/Home" className={({isActive})=>isActive?"text-yellow-300":""}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({isActive})=>isActive?"text-yellow-300":""}>About</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" className={({isActive})=>isActive?"text-yellow-300":""}>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar



