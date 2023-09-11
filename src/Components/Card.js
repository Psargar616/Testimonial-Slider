import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Card = (props) => {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-10 mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-30 "
          src={review.image}
        ></img>
        <div className="rounded-full w-[140px] h-[140px] absolute bg-violet-500 z-[-10] top-[-6px] left-[10px]"></div>
      </div>
      <div className="text-center mt-7">
        <p className=" text-2xl  font-bold capitalize letter tracking-wide mb-1">{review.name}</p>
        <p className="text-violet-400 uppercase text-sm">{review.job}</p>
      </div>
     
      <div className="text-violet-400 mx-auto mt-5 text-center">
        <FaQuoteLeft />
      </div>
      <div className="text-center text-slate-500 mt-5">{review.text}</div>
      <div className="text-violet-400 mx-auto mt-5 text-center">
        <FaQuoteRight />
      </div>
      
    </div>
  );
};

export default Card;
