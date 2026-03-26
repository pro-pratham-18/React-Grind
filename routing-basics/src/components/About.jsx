import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {
  const navigate=useNavigate();
  function handleclick(){
    navigate('/dashboard')
  }
  return (
    <div>
        <div className='bg-sky-700 text-white p-2 text-xl'><p>About</p></div>
        <div className='bg-cyan-100'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi corrupti facere quis numquam totam accusantium rem necessitatibus, maxime, enim alias repellat nulla rerum nemo autem quas soluta voluptate voluptatem ullam, iure quia! Perferendis est, totam ducimus laboriosam quis consequuntur quos tempora laborum adipisci nesciunt dicta omnis odio. Deserunt excepturi id dolorem modi, nostrum aliquam laboriosam aliquid itaque sed ex.</p></div>
        <input type="button" value="move to dashboard" className='border' onClick={handleclick} />
    </div>
  )   
}
export default About