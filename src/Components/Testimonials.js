import React, { useState, useEffect } from 'react';
import Card from './Card';

import {
    BiSolidChevronLeftCircle,
    BiSolidChevronRightCircle,
  } from "react-icons/bi";


const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index - 1 < 0){
           setIndex(reviews.length - 1); 
        }else{
            setIndex(index - 1)
        }
    }

    function rightShiftHandler(){

        if(index + 1 >= reviews.length){
            setIndex(0); 
         }else{
             setIndex(index + 1)
         }
        
    }

    function surpriseHandler(){

        let randomInt = Math.floor(Math.random() * reviews.length);
        setIndex(randomInt);
        
    }
  return (
    <div  className='w-[85vw] md:w-[700px] bg-white rounded flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 drop-shadow-md hover:shadow-xl '>
      <Card review = {reviews[index]}></Card>
      <div className="flex text-violet-400 mt-5 text-5xl font-bold mx-auto">
        <button className="cursor-pointer hover:text-violet-500" onClick={leftShiftHandler}>
          <BiSolidChevronLeftCircle />
        </button>
        <button className="cursor-pointer hover:text-violet-500" onClick={rightShiftHandler}>
          <BiSolidChevronRightCircle />
        </button>
      </div>
      <div className='mt-7'>
        <button className="cursor-pointer px-10 py-2 text-lg rounded-md font-bold text-white bg-violet-400 hover:bg-violet-500" onClick={surpriseHandler}>
          Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonials
