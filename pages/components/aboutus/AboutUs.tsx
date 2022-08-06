import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full flex h-600">
      <div className="w-1/4 bg-gray-700 flex flex-col place-items-center ">
        <div className="flex flex-col justify-center items-start w-4/5 m-auto">
          <h2 className="text-white text-4xl leading-7 text-start">關於勝昌</h2>
          <div className=" w-12 bg-baseYellow h-1 my-8"></div>
          <p className="text-lg text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            consequuntur, placeat sint doloremque at sapiente modi. Ullam vero
            impedit hic minus natus tempore, ad, soluta porro iusto expedita
            mollitia corrupti!
          </p>
          <button className="border-4 border-baseYellow
      text-base text-baseYellow font-bold mt-10 flex 
     w-44 justify-center items-center py-3
      ">
        VIEW ALL
      </button>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-6 w-3/4 h-full">
        <div className="flex row-span-5 bg-cyan-400 col-span-2"></div>
        <div className="row-span-1 bg-baseYellow col-span-1 flex flex-col gap-3 justify-center pl-6">
            <h4 className="font-bold text-black text-xl">Call for a quote</h4>
            <h4 className=" text-black text-lg">0900 278 166</h4>
        </div>
        <div className="row-span-1 bg-white col-span-1 flex place-items-center w-full">
        <button className="border-4 border-black
      text-base text-black font-bold m-auto flex 
     w-44 justify-center items-center py-3
      ">
        VIEW ALL
      </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
