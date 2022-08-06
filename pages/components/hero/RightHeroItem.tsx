import React, { FC } from "react";

interface props {
    icon: string;
}

const RightHeroItem: FC<props> = ({ icon}) => {
  return (
    <div className="flex">
      <div className="text-7xl emoji">{icon}</div>
      <div>
        <h4 className=" text-lg font-bold mb-3">Building Construction</h4>
        <p className="text-white leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sit.
        </p>
      </div>
    </div>
  );
};

export default RightHeroItem;
