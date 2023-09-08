import React from "react";

import { Duration } from "../../types/typesAndEnums";
import { useCandleData } from "../../hooks/useCandleData";
import LightweightChart from "./LightweightChart";
import CandleLoading from "./candleLoading";

const ChartWebSocketComponent = ({ timeDuration }: Duration) => {
  const chartData = useCandleData(timeDuration);

  const content = (
    <>
      {chartData.length > 0 ? (
        <div className="transition-all duration-400 ease-in p-10">
          <LightweightChart
            chartData={chartData}
            timeDuration={timeDuration}
          ></LightweightChart>
        </div>
      ) : (
        <CandleLoading />
      )}
    </>
  );

  return content;
};

export default ChartWebSocketComponent;
