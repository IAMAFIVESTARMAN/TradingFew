import React from "react";
import { Click } from "@/app/types/typesAndEnums";

const ButtonDecPre = ({ precisonDecHandler, precision }: Click) => {
  const onClickHandler = function (precision: string) {
    switch (precision) {
      case "P0":
        precisonDecHandler?.("P1");
        break;
      case "P1":
        precisonDecHandler?.("P2");
        break;
      case "P2":
        precisonDecHandler?.("P3");
        break;
      case "P3":
        precisonDecHandler?.("P4");
        break;
      case "P4":
        precisonDecHandler?.("P5");
        break;
      case "P5":
        precisonDecHandler?.("decdisabled");
        break;
      default:
        console.log("break");
    }
  };
  return (
    <button
      type="button"
      className="ui-button ui-button--size-XS ui-button--clear"
      style={{
        padding: "0px 2px 2px",
        opacity: `${precision === "P5" ? "0.2" : "1"}`,
      }}
      onClick={() => onClickHandler(precision)}
      disabled={precision === "P5"}
    >
      <svg
        width="17"
        height="22"
        viewBox="0 0 34 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "relative", top: "-4px" }}
      >
        <path
          d="M1.41504 27.4053C1.41504 26.8887 1.58724 26.4694 1.93164 26.1475C2.28353 25.8255 2.72152 25.6646 3.24561 25.6646C3.77718 25.6646 4.21517 25.8255 4.55957 26.1475C4.91146 26.4694 5.0874 26.8887 5.0874 27.4053C5.0874 27.9144 4.9152 28.3299 4.5708 28.6519C4.2264 28.9663 3.78467 29.1235 3.24561 29.1235C2.71403 29.1235 2.27604 28.9663 1.93164 28.6519C1.58724 28.3299 1.41504 27.9144 1.41504 27.4053ZM18.811 22.2393C18.811 24.5003 18.3431 26.2298 17.4072 27.4277C16.4714 28.6257 15.1012 29.2246 13.2969 29.2246C11.515 29.2246 10.1523 28.6369 9.20898 27.4614C8.26562 26.286 7.78271 24.6014 7.76025 22.4077V19.3979C7.76025 17.1144 8.23193 15.3812 9.17529 14.1982C10.1261 13.0153 11.4925 12.4238 13.2744 12.4238C15.0563 12.4238 16.4189 13.0116 17.3623 14.187C18.3057 15.355 18.7886 17.0358 18.811 19.2295V22.2393ZM15.5654 18.9375C15.5654 17.5824 15.3783 16.5978 15.0039 15.9839C14.637 15.3625 14.0605 15.0518 13.2744 15.0518C12.5107 15.0518 11.9455 15.3475 11.5786 15.939C11.2192 16.5229 11.0283 17.4401 11.0059 18.6904V22.666C11.0059 23.9987 11.1855 24.9907 11.5449 25.6421C11.9118 26.286 12.4958 26.6079 13.2969 26.6079C14.0905 26.6079 14.6632 26.2972 15.0151 25.6758C15.367 25.0544 15.5505 24.1035 15.5654 22.8232V18.9375Z"
          fill="currentColor"
        ></path>
        <g>
          <path
            d="M33 36V38H21L25 42L24 44L17 37L24 30L25 32L21 36H33Z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    </button>
  );
};

export default ButtonDecPre;
