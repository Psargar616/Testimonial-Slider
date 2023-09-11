import React from "react";
import Testimonials from "./Components/Testimonials";
import reviews from "./data"

const App = () => {
  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gray-200 overflow-x-hidden" >
      <div className="text-center">
        <h1 className="font-bold text-4xl">Our Testimonials</h1>
        <div className="bg-violet-400 w-1/5 h-[4px] mx-auto mt-2"></div>
        <Testimonials reviews={reviews} />
      </div>
      
    </div>
  )
};

export default App;
