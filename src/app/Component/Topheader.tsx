import React from "react";
import { RxCross1 } from "react-icons/rx";


export default function TopHeader() {
  return (
    <div className="w-full bg-black flex items-center justify-center px-4 py-3">
      {/* Container */}
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-[1200px] w-full text-white gap-2">
        {/* Left Side: Sale Message */}
        <p className="lg:text-center items-center text-sm sm:w-[301] sm:h-[16] sm:text-base lg:ml-56 text-center sm:text-center w-full leading-relaxed">
        Sign up and get 20% off on your first order. 
          <span className="font-bold ml-2 pt-3 cursor-pointer underline">
          Sign Up Now
          </span>
        </p>
        <div className="flex items-center text-sm sm:text-base mt-2 sm:mt-0">
          <RxCross1 size={20} />
        </div>
      </div>
    </div>
  );
}





















