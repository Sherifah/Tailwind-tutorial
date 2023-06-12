import React from 'react'
import { AiOutlineHome, AiOutlineMail,  } from "react-icons/ai"
import { HiOutlineLightBulb } from "react-icons/hi"

function SideBar() {
  return (
    <div>
        <nav>
            <div className='logo font-bold uppercase p-4 border-b border-gray-100'>
                <a href="true">
                    <h1 className=''>My Kitchen</h1>
                </a>
            </div>
            <ul>
                <li className='text-gray-700 font-bold'>
                    <a href="true">
                        <span>Home</span>
                        <span>
                            <AiOutlineHome size={15} />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="true">
                        <span>About</span>
                        <span>
                            <HiOutlineLightBulb size={15} />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="true">
                        <span>Contact</span>
                        <span>
                            <AiOutlineMail size={15} />
                        </span>
                    </a>
                </li>
            </ul>

        </nav>
    </div>
  )
}

export default SideBar
