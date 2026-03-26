import React from 'react'
import { useNavigate } from 'react-router'

import { Outlet } from 'react-router';

const Dashboard = () => {

  const navigate=useNavigate();
  function handleclick1(){
    navigate('/dashboard/courses');
  }

  function handleclick2(){
    navigate('/dashboard/reports');
  }

  function handleclick3(){
    navigate('/dashboard/mocktests');
  }
  return (
    <div className='bg-blue-800 flex flex-col '>
        <p className='font-bold border-b p-2 text-yellow-400'>Dashboard</p>
        <div className='flex flex-col p-3 '>
          <ul className='flex flex-col gap-2 list-disc list- px-4'>
            <li><p><input type="button" value="Courses" className=' text-white' onClick={handleclick1}/></p></li>
            <li><p><input type="button" value="Reports" className=' text-white' onClick={handleclick2}/></p></li>
            <li><p><input type="button" value="MockTests" className=' text-white' onClick={handleclick3}/></p></li>
          </ul>
        </div>
        <Outlet/>
    </div>

  )
}

export default Dashboard
