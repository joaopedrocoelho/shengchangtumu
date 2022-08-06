import React from "react";
import RightHeroItem from "./RightHeroItem";

const RightHeroBanner = () => {
  return (
    <div className="flex flex-col justify-center w-2/6 bg-baseYellow">
      <div className="w-4/5 ml-8 flex-col justify-center flex gap-8">
        <h3 className="font-bold text-3xl pl-8">Our Services</h3>
        {/* item with icon*/}
       <RightHeroItem icon="🏗" />
       <RightHeroItem icon="🏭" />
       <RightHeroItem icon="🏢" />
      </div>
    </div>
  );
};

export default RightHeroBanner;
