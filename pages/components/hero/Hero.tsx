import React from 'react'
import LeftHeroBanner from './LeftHeroBanner';
import RightHeroBanner from './RightHeroBanner';

const Hero = () => {
  return (
    <div className="flex w-full h-500">
    {/* left hero */}
    <LeftHeroBanner />
    {/* right hero */}
    <RightHeroBanner />
  </div>
  )
}

export default Hero