import React from "react";
import dictionary from "../../../assets/dictionary.jpg";

const Card = ({
  imgSrc,
  imageContentMain,
  imageContentDescription,
  contentHeading,
  contentDescription,
}) => {
  return (
    <div className="flex items-center justify-center w-full sm:p-8">
      <div className="flex sm:flex-col items-center w-[80%] sm:w-[95%] backdrop-blur-sm bg-white/10 bg-opacity-50 p-1 sm:p-8 rounded-lg">
        <div className="w-[55%] sm:w-full p-2 sm:p-4">
          <div className="relative w-full h-[22rem] sm:h-[20rem] overflow-hidden rounded-lg transform transition duration-300">
            <img
              src={imgSrc}
              alt="img"
              className="object-center w-full h-full rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-0 text-white">
              <p className="sm:text-2xl text-4xl font-semibold">
                {imageContentMain}
              </p>
              <p className="text-2xl sm:text-xl">{imageContentDescription}</p>
            </div>
            <div className="text-white absolute left-4 top-4 font-semibold sm:text-xl text-2xl sm:p-2 p-3">
              ♎ Alpha Hub
            </div>
          </div>
        </div>

        <div className="w-[45%] sm:w-full p-2 sm:p-4">
          <p className="sm:text-2xl text-3xl font-semibold">{contentHeading}</p>
          <p className="text-gray-200 sm:text-sm mt-2">{contentDescription}</p>
          <div className="flex items-center">
            <div className="relative flex items-center">
              {/* Circle 1 */}
              <div className="sm:w-8 sm:h-8 w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <img
                  src={dictionary}
                  alt="Profile 1"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Circle 2 */}
              <div className="sm:w-8 sm:h-8 w-10 h-10 rounded-full overflow-hidden border-2 border-white z-10 -ml-4 sm:-ml-6">
                <img
                  src={dictionary}
                  alt="Profile 2"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Circle 3 */}
              <div className="sm:w-8 sm:h-8 w-10 h-10 rounded-full overflow-hidden border-2 border-white z-20 -ml-4 sm:-ml-6">
                <img
                  src={dictionary}
                  alt="Profile 3"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Circle 4 with text */}
              <div className="sm:w-8 sm:h-8 w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-700 font-semibold -ml-4 sm:-ml-6 z-30">
                1.3K
              </div>
            </div>
          </div>
          <div className="w-full border m-2"></div>
          <button className="p-3 my-4 sm:my-4 bg-[#6435E9] rounded-lg text-white text-sm sm:text-base">
            Begin Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
