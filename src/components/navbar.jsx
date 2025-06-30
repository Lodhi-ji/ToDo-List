import React from 'react'

const navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 bg-gray-800 text-white py-2'>
        <div className='text-2xl font-bold'> MyTask</div>
        <div className='flex gap-4'>
            <ul className='flex gap-4 mx-5'>
                <li className='hover:font-bold cursor-pointer transition-all duration-300'>Home</li>
                <li className='hover:font-bold cursor-pointer transition-all duration-300'>Your Tasks</li>
            </ul>    
        </div>
    </nav>
  )
}

export default navbar