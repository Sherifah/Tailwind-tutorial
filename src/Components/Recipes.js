import React from 'react'
import LatestRecipes from './LatestRecipes'
import MostPopular from './MostPopular'
import data from '../data'

function Recipes() {

    const LatestRecipeList = data.map((item, index) => {
            return <LatestRecipes
                key= {index}
                name={item.name}
                chef={item.chef}
                time={item.time} 
                img={item.img}
            />
        
    })
    const MostPopularList = data.map((item, index) => {
        return <MostPopular
            key= {index}
            name={item.name}
            chef={item.chef}
            time={item.time}
            img={item.img} 
        />
    
}) 

  return (
    <div>
        <header>
            <h2 className='text-gray-800 text-5xl font-semibold pb-1'>Recipes</h2>
            <h3 className='text-xl font-semibold'>For Ninjas</h3>
        </header>
        <div>
            <div>
                <h4 className='font-bold mt-12 pb-2 border-b border-gray-100'>Lastest Recipes</h4>
                <div className='mt-8'>
                    {LatestRecipeList}
                </div>
            </div>
            <div>
                <h4 className='font-bold mt-12 pb-2 border-b border-gray-100'>Most Popular</h4>
                <div className='mt-8'>
                    {MostPopularList}
                </div>
            </div>
            <div>
                <div>Load More</div>
            </div>
        </div>
    </div>
  )
}

export default Recipes
