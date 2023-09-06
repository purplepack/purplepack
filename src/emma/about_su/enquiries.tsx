import { Button } from "@/components/ui/button";
import React from "react";

export default function Enquiries() {
  return (
    <div>
      <div className=" flex flex-col justify-center p-10 w-full gap-3">
        <input
          className=" w-full h-12 outline focus:outline bg-inherit pl-5"
          type="text"
          placeholder="Full name"
        />
        <input
          className=" w-full h-12 outline focus:outline bg-inherit pl-5"
          type="email"
          placeholder="Email"
        />
        <input
          className=" w-full h-12 outline focus:outline bg-inherit pl-5"
          type="tel"
          placeholder="Phone"
        />
        <input
          className=" w-full h-12 outline focus:outline bg-inherit pl-5"
          type="text"
          placeholder="Nature of enquiry"
        />
        <input
          className=" w-full h-28 pb-16 outline focus:outline bg-inherit pl-5"
          type="text"
          placeholder="Message"
        />
        <Button className=" bg-black" type='submit'>SUBMIT</Button>
      </div>
      
    </div>
  );
}
