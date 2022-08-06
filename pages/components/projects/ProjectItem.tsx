import React, { FC } from 'react'
import Image from 'next/image'

interface props {
    imgSrc: any;
}

const ProjectItem:FC<props> = ({imgSrc}) => {
  return (
    <div className="sm:w-1/3 w-4/5 flex flex-col min-h-500 sm:h-500">
    <div className="h-1/3 bg-cyan-300 mb-6 w-full overflow-clip">
        <Image alt='Project'  src={imgSrc} layout="responsive"></Image>
    </div>
    <div className="h-3/4 border-2 border-gray-500 flex flex-col px-6 py-4">
      <h6 className="font-bold text-xl my-5 text-gray-700">Project Title</h6>
      <p className="text-base  text-gray-500 leading-7">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
        eveniet excepturi voluptates maxime officiis?
      </p>
      <button className="
      border-2 border-gray-500 text-xs py-1 text-gray-500
       flex justify-center items-center w-3/4 sm:mt-auto mx-auto
       mt-8">
          VIEW PROJECT
      </button>
    </div>
  </div>
  )
}

export default ProjectItem