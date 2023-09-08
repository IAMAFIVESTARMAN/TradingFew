import { CandlestickData } from "lightweight-charts";
import React, { useEffect, useState } from "react";

export const useLastCandleData = (timeDuration: string): CandlestickData => {
  const [lastCandle, setLastCandle] = useState<CandlestickData | {}>({});

  useEffect(() => {
    const controller = new AbortController();

    const fetchLastChartData = async (timeDuration: string): Promise<void> => {
      try {
        const res = await fetch(
          `api/fetchCandle?timeDuration=${timeDuration}&section=last`,
          { signal: controller.signal }
        );

        const data = await res.json();

        if (data && Array.isArray(data) && data.length > 0) {
          let obj = {
            time: data[0] / 1000 + 19800,
            open: data[1],
            close: data[2],
            high: data[3],
            low: data[4],
            volume: data[5],
          };

          setLastCandle(obj);
        }
      } catch (error) {
        console.error("Error fetching chart data", error);
      }
    };

    const intervalId = setInterval(() => {
      console.log("Interval triggered");
      fetchLastChartData(timeDuration);
    }, 300000);

    return () => {
      clearInterval(intervalId);
      controller.abort();
      console.log("Last Candle Request Cancelled");
    };
  }, [timeDuration]);

  return lastCandle as CandlestickData;
};
