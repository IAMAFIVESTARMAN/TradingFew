import React, { useState, useEffect } from "react";
import { ChartCandle } from "../types/typesAndEnums";
import { timeZone } from "../constants/constantVariables";
export const useCandleData = (timeDuration: string): ChartCandle[] => {
  const [chartData, setChartData] = useState<ChartCandle[]>([]);

  useEffect(() => {
    const fetchChartData = async (timeDuration: string): Promise<void> => {
      try {
        const res = await fetch(
          `api/fetchCandle?timeDuration=${timeDuration}&section=hist?limit=10000`
        );

        const data = await res.json();

        if (data && Array.isArray(data) && data.length > 0) {
          const formattedData = data.map((candle: any) => {
            return {
              time: candle[0] / 1000 + timeZone,
              open: candle[1],
              close: candle[2],
              high: candle[3],
              low: candle[4],
              volume: candle[5],
            };
          });

          setChartData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching chart data", error);
      }
    };

    fetchChartData(timeDuration);

    return () => {
      console.log("Data Request Cancelled");
    };
  }, [timeDuration]);

  return chartData;
};
