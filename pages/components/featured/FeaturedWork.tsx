import React from 'react'

const FeaturedWork = () => {
  return (
    <div className='bg-gray-700 w-full flex  flex-col justify-center items-center py-20'>
        <h2 className='text-white text-4xl leading-7 mb-7'>FEATURED WORK</h2>
        <h4 className='text-white text-2xl leading-9'>WE TAKE PRIDE IN OUR WORK</h4>
    <div className='w-3/5 h-52 flex justify-center items-center gap-6 my-16'>
        <div className='bg-cyan-400 w-1/3 h-full'>
        </div>
        <div className='bg-cyan-400 w-1/3 h-full'>
        </div>
        <div className='bg-cyan-400 w-1/3 h-full'>
        </div>
    </div>
    <button className='px-14  flex place-items-center bg-baseYellow py-4'>
        VIEW MORE 
    </button>
    </div>
  )
}

export default FeaturedWork