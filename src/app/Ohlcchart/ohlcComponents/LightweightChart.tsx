import React, { useEffect, useState, useRef } from "react";
import { MouseEventParams, createChart } from "lightweight-charts";
import { IChartApi } from "lightweight-charts";

import { ChartCandle } from "../../types/typesAndEnums";
import { useLastCandleData } from "../../hooks/useLastData";
import ButtonDataRangeSelector from "./ButtonRangeSelector";

type ChartData = {
  chartData: ChartCandle[];
  timeDuration: string;
};

type T = ReturnType<typeof useLastCandleData>;
const LightweightChart = ({ chartData, timeDuration }: ChartData) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [candlePrice, setCandlePrice] = useState<any>(null);
  const [histogramVolume, setHistogramVolume] = useState<any>(null);

  const chart = useRef<IChartApi | null>(null);
  const candleSeries = useRef<any>(null);
  const HistogramSeries = useRef<any>(null);

  chartData.sort((a, b) => a.time - b.time);

  const lastCandle: T = useLastCandleData(timeDuration);

  useEffect(() => {
    console.log(candlePrice);
    chart.current = createChart(chartContainerRef.current!, {
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        rightOffset: 20,
      },

      width: 1600,
      height: 500,
      autoSize: true,
      layout: {
        background: { color: "#121723" },
        textColor: "#8b969f",
      },
      crosshair: {
        mode: 0,
      },
      grid: {
        vertLines: { color: "#777", visible: false },
        horzLines: { color: "#777" },
      },
    });

    chart.current.timeScale().fitContent();

    candleSeries.current = chart.current.addCandlestickSeries({
      upColor: "#4bffb5",
      downColor: "#ff4976",
      borderDownColor: "#ff4976",
      borderUpColor: "#4bffb5",
      wickDownColor: "#ff4976",
      wickUpColor: "#4bffb5",
    });
    HistogramSeries.current = chart.current.addHistogramSeries({
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "",
    });

    HistogramSeries.current.priceScale().applyOptions({
      scaleMargins: {
        top: 0.65,
        bottom: 0,
      },
    });

    HistogramSeries.current.setData(
      chartData.map((bar: ChartCandle) => {
        return {
          time: bar.time,
          value: bar.volume,
          color: `${bar.open > bar.close ? "#4bffb560" : "#ff497660"}`,
        };
      })
    );

    candleSeries.current.setData(chartData);

    if (Object.keys(lastCandle).length !== 0) {
      console.log(lastCandle);
    }

    chart.current.subscribeCrosshairMove((param: MouseEventParams) => {
      if (param.time) {
        setCandlePrice({ ...param.seriesData.get(candleSeries.current) });
        setHistogramVolume({
          ...param.seriesData.get(HistogramSeries.current),
        });
      }
    });

    return () => {
      chart.current?.remove();
    };
  }, [chartData]);

  const scrollBackInTime = (timestamp: number) => {
    if (chart.current && chartData.length > 0) {
      const nowInSeconds = Math.floor(Date.now() / 1000);
      const diffInSeconds = nowInSeconds - timestamp;

      const fromIndex = chartData.findIndex(
        (candle) => candle.time - 19800 > diffInSeconds
      );

      if (fromIndex !== -1) {
        chart.current.timeScale().setVisibleLogicalRange({
          from: fromIndex,
          to: chartData.length - 1,
        });
      }
    }
  };

  return (
    <>
      <div ref={chartContainerRef} className="relative">
        {candlePrice && (
          <div
            className={`absolute  z-10 -top-4 left-4 ${
              candlePrice.open > candlePrice.close
                ? "text-red-700"
                : "text-green-700"
            }`}
          >{`O:${candlePrice.open} H:${candlePrice.high} L:${candlePrice.low} C:${candlePrice.close} V:${histogramVolume.value} `}</div>
        )}
      </div>
      <div className="flex justify-between w-1/6 py-2">
        <ButtonDataRangeSelector
          scrollBackInTime={scrollBackInTime}
        ></ButtonDataRangeSelector>
      </div>
    </>
  );
};

export default LightweightChart;
