import React from "react";

interface BasketProps {
  itemCount?: number;
}

const Basket: React.FC<BasketProps> = ({ itemCount = 3 }) => {
  return (
    <div className="relative flex items-center space-x-2 p-3 shadow-md w-44 rounded-lg text-sm hover:bg-[#c7c7c7] dark:hover:bg-[#4f4f4e] transition duration-300 cursor-pointer">     
     
     <svg
     className="fill-current text-gray-700 dark:text-white" 
     fill="white" width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1015.66 284a31.82 31.82 0 0 0-25.998-13.502H310.526l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.569 0-31.777 14.224-31.777 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.591 23.183h431.968c13.409 0 25.376-8.4 29.905-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM815.026 720.194H429.539L328.387 334.066h616.096zM752.003 848.13c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80zm-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80z"/></svg>
      <span className=" text-gray-700 font-extralight dark:text-white mt-[5px]">Кошик</span>      
      {itemCount > 0 && (
        <span className="absolute top-0 left-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default Basket;
