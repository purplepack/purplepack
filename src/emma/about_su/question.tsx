import Image from "next/image";
import React from "react";


export default function QuestionCard({image, title, description}: QuestionCardI) {
  return (
   <div className="space-y-8 flex flex-col justify-center items-center w-full h-full lg:p-10">
     <div className=" w-full">
       <Image
            className=" w-1/4 h-16"
            width={100}
            height={100}
            alt=""
            src={image}
            />
    </div>
   <div className=" w-full space-y-4 items-center">
    <h1 className="font-bold">{title}</h1>
   <p>{description}</p>
   </div>
   </div>
  );
}
