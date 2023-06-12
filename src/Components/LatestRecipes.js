import React from 'react'
import { AiOutlineClockCircle } from "react-icons/ai"

function LatestRecipes(props) {
  return (
    <div>
        <div className='cards bg-white rounded overflow-hidden shadow-sm relative'>
            <div>
                <img src={`${props.img}`} alt='some food' className='w-full h-32 sm:h-48 object-cover'></img>
                <div className='m-4'>
                    <span className='font-bold'>{props.name}</span>
                    <span className='block text-gray text-sm'>Recipe by {props.chef}</span>
                </div>
                <div className='flex items-center bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2'>
                    <span className='mr-1'>
                        <AiOutlineClockCircle size={13} />
                    </span>
                    <span>{props.time} mins</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestRecipes
