import React from "react";

const LeftHeroBanner = () => {
  return (
    <div className="flex w-4/6 bg-gray-500 bg-heroDemo bg-cover">
      <div className="flex flex-col justify-center items-start m-auto w-4/5">
        <h1
          className="text-6xl font-bold
       text-white pl-8 py-4 mb-7
       border-l-8
        border-baseYellow"
        >
          專業泡沫防水工程
        </h1>
        <p className="text-xl text-white">
          勝昌土木包工業, 台南唯一泡沫混凝土防水工程廠商,
          深耕防水工程行業已40多年。<br />擁有20位以上最強工程團隊,各種困難的工程都能得到最佳的解決方法並提供專業的後續保固。
        </p>

        <button className="mt-12 flex justify-center items-center px-12 py-4 bg-baseYellow">
          <span className="text-white font-bold">開始搜尋</span>
        </button>
      </div>
    </div>
  );
};

export default LeftHeroBanner;
