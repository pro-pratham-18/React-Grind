import React from 'react'

// navigating from an inside page(home) to about using navlink
// import { NavLink } from 'react-router';      // import necessary , to use navlink

// const Home = () => {
//   return (
//     <div>
//         <p>Home</p>
//         <NavLink to='/about'><input type="button" value=" Move to about " className='border'/></NavLink>
//     </div>
//   )
// }

// export default Home

//------------------------------------------------------------------------------------------------

// navigating from inside page home to about using function and navigation hook

import { useNavigate } from 'react-router'            // a hook used to move from one page to other without relaoding everything
const Home = () => {
  const navigate = useNavigate();

  function handleclick(){
    navigate('/about')
  }
  return (
    <div>
      <input type="button" value="Move To About" onClick={handleclick} className='border'/>
    </div>
  )
}

export default Home
