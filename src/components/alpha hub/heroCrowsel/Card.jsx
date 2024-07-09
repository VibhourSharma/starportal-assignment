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
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center justify-center w-[80%] backdrop-blur-sm bg-white/10 bg-opacity-50 p-1 rounded-lg">
        <div className="flex items-center justify-center w-[55%] p-2">
          <div className="relative w-full h-[22rem] overflow-hidden rounded-lg transform transition duration-300">
            <img
              src={imgSrc}
              alt="img"
              className="object-center w-full h-full rounded-lg"
            />
            <div className="absolute bottom-12 left-12 right-0 text-white">
              <p className="text-4xl font-semibold">{imageContentMain}</p>
              <p className="text-xl">{imageContentDescription}</p>
            </div>
            <div className="text-white absolute left-12 top-8 font-semibold text-2xl p-3">
              ♎ Alpha Hub
            </div>
          </div>
        </div>

        <div className="p-2 w-[45%]">
          <div className="p-2">
            <p className="text-3xl font-semibold">{contentHeading}</p>
            <p className="text-gray-200">{contentDescription}</p>
            <div className="flex items-center py-2">
              <div className="relative flex items-center">
                {/* Circle 1 */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={dictionary}
                    alt="Profile 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Circle 2 */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white z-10 -ml-6">
                  <img
                    src={dictionary}
                    alt="Profile 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Circle 3 */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white z-20 -ml-6">
                  <img
                    src={dictionary}
                    alt="Profile 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Circle 4 with text */}
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-700 font-semibold -ml-6 z-30">
                  1.3K
                </div>
              </div>
            </div>
            <div className="w-full border m-2"></div>
            <button className="p-3 my-4 bg-[#6435E9] rounded-lg text-white">
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
