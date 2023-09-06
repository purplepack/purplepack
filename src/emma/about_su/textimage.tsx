import Image from "next/image";
import React from "react";

export default function AboutCard({ image, title, description, bgcolor }: AboutCardI) {
  return (
    <div className="lg:flex">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className=" lg:w-5/12 :w-1/2">
          <Image
            className="w-full h-auto"
            width={1000}
            height={1000}
            alt=""
            src={image}
          />
        </div>
        <div className={`lg:flex-1 ${bgcolor} text-white  lg:w-full lg:h-full p-10 items-center justify-center`}>
          <h1 className="text-3xl lg:text-5xl font-bold">
            {title}
          </h1>
          <p className="">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

