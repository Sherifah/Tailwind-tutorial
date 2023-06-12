import React from 'react'
import { AiOutlineClockCircle } from "react-icons/ai"

function LatestRecipes(props) {
  return (
    <div>
        <div className='cards'>
            <div>
                <img src={`${props.img}`} alt='some food image'></img>
                <div>
                    <span>
                        <AiOutlineClockCircle size={15} />
                    </span>
                    <span>{props.time} mins</span>
                </div>
                <div>
                    <span>{props.name}</span>
                    <span>Recipe by {props.chef}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestRecipes
