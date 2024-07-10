import React, { useState, useEffect } from "react";
import top4 from "../../assets/top-4.jpg";
import task from "../../assets/task.svg";

const Section3 = () => {
  const initialTime = 60000000;
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1000 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(time);
  return (
    <div className="bg-[#080808] flex justify-between flex-wrap p-16">
      <div className="flex items-start justify-center ml-12 gap-2 sm:mb-4">
        <span className="text-3xl">Step</span>
        <span className="p-1.5 w-10 text-center rounded-full bg-white/20">
          3
        </span>
      </div>

      {/* Stopwatch section  */}
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="w-64 mx-auto rounded-xl overflow-hidden bg-white/5 max-h-28">
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg p-2 font-mono text-gray-300">
              Remaining Time
            </span>
            <div className="border-1 border-gray-500 border-dashed w-full"></div>
            <div className="flex space-x-4 p-2">
              <div className="text-center">
                <div className="text-2xl">{days}</div>
                <div className="text-sm text-gray-500 font-mono">Days</div>
              </div>
              <div className="text-center ">
                <div className="text-2xl">{hours}</div>
                <div className="text-sm text-gray-500 font-mono">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl">{minutes}</div>
                <div className="text-sm text-gray-500 font-mono">Minutes</div>
              </div>
              <div className="text-center ">
                <div className="text-2xl">{seconds}</div>
                <div className="text-sm text-gray-500 font-mono">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* {card}  */}

        <div className="flex flex-col bg-white/5 rounded-lg p-2">
          <div className="h-64 w-64 rounded-2xl overflow-hidden p-2">
            <img
              src={top4}
              alt="image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="flex w-full items-center justify-between my-2">
            <span className="text-sm text-gray-400">Exclusive Community</span>
            <span className="flex items-center justify-center gap-1">
              <img src={task} alt="" className="h-4 w-4" />
              <span>Earndrop</span>
            </span>
          </div>
          <div className="border-1 border-gray-500 border-dashed w-full my-1"></div>
          <span className="text-sm text-gray-300 my-1">
            Complete all Essential quests
          </span>
          <span className="text-sm text-gray-300 my-1">
            Complete at least 1 Alpha Hub quest today
          </span>
          <button className="w-full p-2 my-2 rounded-lg text-base text-gray-500 bg-white/10">
            Claim Now
          </button>
        </div>
      </div>

      {/* {Reward section} */}

      <div className="max-w-[20%] mr-12 bg-[#131313] h-[80%] rounded-lg sm:max-w-full sm:mr-0 sm:mt-4">
        <div className="border-b border-gray-600 rounded-xl p-2">
          Reward info:
        </div>
        <div className="text-base text-gray-300 p-2">
          Free access to paid KOL (crypto earning) communities!
        </div>
        <div className="text-sm text-gray-500 p-2">
          Win access to exclusive earning communities of some of the the
          greatest earners in crypto for a month, every 24 hours. Get access to
          unmatched insights, a close-knit community of the best airdrop
          earners, and more. To win: make sure you've connected your Twitter and
          Discord accounts - and follow our criteria!
        </div>
      </div>
    </div>
  );
};

export default Section3;
