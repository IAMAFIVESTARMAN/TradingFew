import React from "react";

const CandleLoading = () => {
  return (
    <>
      <div
        className={` h-96 relative bg-[#113534]  transition-all duration-400 animate-pulse w-full m-auto
                ease-in `}
      >
        <div className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Now Loading...
        </div>
      </div>
    </>
  );
};

export default CandleLoading;
