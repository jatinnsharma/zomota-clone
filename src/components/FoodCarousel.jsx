import React from "react";
import data from "../data/carouselData.json"

const FoodCarousel = () => {
  return (
    <div className="bg-gray-200 mt-12">
      <div className="text-3xl p-10 ml-12">
        Inspiration for your first order
      </div>

      <div id="food-carousel" className="flex">
        {data.sides.map(({ image, id, name }) => (
          <div className="">
            <img
              id="foodImg"
              className=" ml-28 w-40 h-40 rounded-full"
              src={image}
              alt="pizza"
            />
            <div id="foodName" className="ml-32 pt-2 pb-6 text-xl ">
              {name}
            </div>
          </div>
        ))}
      </div>
     
      
    </div>
  );
};

export default FoodCarousel;
