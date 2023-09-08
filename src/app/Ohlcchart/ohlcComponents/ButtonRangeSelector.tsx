import React from "react";
import { OHLCRange } from "../../types/typesAndEnums";

type OHLCButton = {
  scrollBackInTime: (timeStamp: number) => void;
};

const ButtonDataRangeSelector = ({ scrollBackInTime }: OHLCButton) => {
  return (
    <>
      <p>Range :</p>
      <button onClick={() => scrollBackInTime(OHLCRange["oneYear"])}>1Y</button>
      <button onClick={() => scrollBackInTime(OHLCRange["sixMonths"])}>
        6M
      </button>
      <button onClick={() => scrollBackInTime(OHLCRange["threeMonths"])}>
        3M
      </button>
      <button onClick={() => scrollBackInTime(OHLCRange["oneMonth"])}>
        1M
      </button>
      <button onClick={() => scrollBackInTime(OHLCRange["sevenDays"])}>
        7d
      </button>
      <button onClick={() => scrollBackInTime(OHLCRange["oneDay"])}>1d</button>
      <button onClick={() => scrollBackInTime(OHLCRange["sixHours"])}>
        6h
      </button>
      <button onClick={() => scrollBackInTime(OHLCRange["oneHour"])}>1h</button>
    </>
  );
};

export default ButtonDataRangeSelector;
