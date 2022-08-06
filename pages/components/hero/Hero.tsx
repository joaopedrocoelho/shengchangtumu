import React from 'react'
import LeftHeroBanner from './LeftHeroBanner';
import RightHeroBanner from './RightHeroBanner';

const Hero = () => {
  return (
    <div className="flex w-full sm:h-500 sm:flex-row flex-col">
    {/* left hero */}
    <LeftHeroBanner />
    {/* right hero */}
    <RightHeroBanner />
  </div>
  )
}

export default Hero