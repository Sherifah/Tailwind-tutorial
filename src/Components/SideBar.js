import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { HiOutlineLightBulb } from "react-icons/hi"

function SideBar() {

    const [menu, setMenu] = useState('hidden')

    function handleClick() {
        if (menu === 'block') {
            setMenu('block')
        } else {
            setMenu('hidden')
        }
    }

  return (

    <div>
        <nav className=''>
            <div className='flex justify-between items-center'>
                <a href="true" className='hover:text-gray-700'>
                    <h1 className='logo font-bold uppercase p-4 border-b border-gray-100'>My Kitchen</h1>
                </a>
                <button className='px-4 cursor-pointer md:hidden' onClick={handleClick}>
                    <AiOutlineMenu size={15}  />
                </button>
            </div>
            <ul className={`text-sm mt-6 ${menu} md:block`}>
                <li className='text-gray-700 font-bold mb-6'>
                    <a href="true" className='px-4 flex items-center justify-end border-r-4 border-primary'>
                        <span className='mr-2'>Home</span>
                        <span>
                            <AiOutlineHome size={14} />
                        </span>
                    </a>
                </li>
                <li className='mb-6'>
                    <a href="true" className='px-4 flex items-center justify-end border-r-4 border-white'>
                        <span className='mr-2'>About</span>
                        <span>
                            <HiOutlineLightBulb size={17} />
                        </span>
                    </a>
                </li>
                <li className='mb-6'>
                    <a href="true" className='px-4 flex items-center justify-end border-r-4 border-white'>
                        <span className='mr-2'>Contact</span>
                        <span>
                            <AiOutlineMail size={14} />
                        </span>
                    </a>
                </li>
            </ul>

        </nav>
    </div>
  )
}

export default SideBar
