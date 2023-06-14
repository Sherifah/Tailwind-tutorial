import React from 'react'

function TopNavBar() {
  return (
    <div className='pb-2 flex justify-center md:justify-end '> 
        <a href="true" className="btn text-red-500 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log In</a>
        <a href="true" className="btn text-red-500 ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Sign Up</a>
    </div>
  )
}

export default TopNavBar
