"use client";

import { useState } from "react";

import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import ChartWebSocketComponent from "./ohlcComponents/ChartWebsock";
import ButtonTimeRangeSelector from "./ohlcComponents/ButtonTimeRangeSelector";

export default function HomePage() {
  const [chartOpen, setChartOpen] = useState<boolean>(false);
  const [timeDuration, seTimeDuration] = useState<string>("1h");

  const timeDurationHandler = (time: string) => {
    seTimeDuration(time);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#121723] text-white">
      <article className="w-full">
        <div className="flex justify-between">
          <h1 className="flex justify-between items-center">
            <p> Chart</p>
            <span onClick={() => setChartOpen((prev) => !prev)}>
              {chartOpen ? (
                <MdKeyboardArrowDown size={20} />
              ) : (
                <MdKeyboardArrowRight size={20} />
              )}
            </span>
            <p>{`Time Duration : ${timeDuration}`}</p>
          </h1>
          <ButtonTimeRangeSelector
            timeDurationHandler={timeDurationHandler}
          ></ButtonTimeRangeSelector>
        </div>
        {chartOpen && (
          <ChartWebSocketComponent
            timeDuration={timeDuration}
          ></ChartWebSocketComponent>
        )}
      </article>
    </main>
  );
}
