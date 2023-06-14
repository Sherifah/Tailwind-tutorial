import React from 'react'
import { AiOutlineClockCircle } from "react-icons/ai"

function LatestRecipes(props) {
  return (
    <div>
        <div className='card hover:shadow-lg'>
            <div>
                <img src={`${props.img}`} alt='some food' className='w-full h-32 sm:h-48 object-cover'></img>
                <div className='m-4'>
                    <span className='font-bold'>{props.name}</span>
                    <span className='block text-gray text-sm'>Recipe by {props.chef}</span>
                </div>
                <div className='badge'>
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
