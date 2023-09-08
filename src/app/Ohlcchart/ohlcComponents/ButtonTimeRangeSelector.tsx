import React from "react";

type RangeSelector = {
  timeDurationHandler: (time: string) => void;
};

const ButtonTimeRangeSelector = ({ timeDurationHandler }: RangeSelector) => {
  return (
    <nav className="flex justify-between gap-2 items-center">
      <p>Data :</p>
      <button onClick={() => timeDurationHandler("1M")}>1M</button>
      <button onClick={() => timeDurationHandler("14D")}>14D</button>
      <button onClick={() => timeDurationHandler("1W")}>1W</button>
      <button onClick={() => timeDurationHandler("1D")}>1D</button>
      <button onClick={() => timeDurationHandler("6h")}>6h</button>
      <button onClick={() => timeDurationHandler("1h")}>1h</button>
      <button onClick={() => timeDurationHandler("30m")}>30m</button>
      <button onClick={() => timeDurationHandler("5m")}>5m</button>
      <button onClick={() => timeDurationHandler("1m")}>1m</button>
    </nav>
  );
};

export default ButtonTimeRangeSelector;
