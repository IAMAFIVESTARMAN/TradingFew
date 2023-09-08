"use client";

import { useState } from "react";
import TradingTable from "./components/TradingTable";

import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import {
  HiOutlineMagnifyingGlassMinus,
  HiOutlineMagnifyingGlassPlus,
} from "react-icons/hi2";

import ButtonDecPre from "./components/ButtonDecPre";
import ButtonIncPre from "./components/ButtonIncPre";
import Dropdown from "./components/Dropdown";
import { widthDividerValue } from "../constants/constantVariables";

const HomePage = () => {
  const [bookOpen, setBookOpen] = useState<boolean>(false);
  const [orderbookPrecision, setOrderbookPrecision] = useState<string>("P0");
  const [widthDivider, setWidthDivider] = useState<number>(0.01);
  const [orderbookPair, setorderbookPair] = useState<string>("tBTCUSD");

  const precisonDecHandler = function (precision: string) {
    setOrderbookPrecision(precision);
  };

  const precisonIncHandler = function (precision: string) {
    setOrderbookPrecision(precision);
  };

  const handleDropdown = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setorderbookPair(event.target.value);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#121723] text-white">
      <article className="w-full">
        <div className="flex justify-between">
          <Dropdown
            onDropDownChange={handleDropdown}
            pair={orderbookPair}
          ></Dropdown>
          <h1 className="flex justify-between items-center gap-3">
            <p> Orders</p>
            <span onClick={() => setBookOpen((prev) => !prev)}>
              {bookOpen ? (
                <MdKeyboardArrowDown size={20} />
              ) : (
                <MdKeyboardArrowRight size={20} />
              )}
            </span>
            <span>
              Depth:
              {`${(widthDividerValue / widthDivider) * 100}%`}
            </span>
            <span>
              Pair: {orderbookPair.slice(1, 4)}/
              {orderbookPair.slice(4, orderbookPair.length)}
            </span>
            <span> Precision:{orderbookPrecision}</span>
          </h1>
          <nav className="flex justify-between gap-2 items-center ">
            <ButtonDecPre
              precisonDecHandler={precisonDecHandler}
              precision={orderbookPrecision}
            ></ButtonDecPre>
            <ButtonIncPre
              precisonIncHandler={precisonIncHandler}
              precision={orderbookPrecision}
            ></ButtonIncPre>
            <div>
              <HiOutlineMagnifyingGlassPlus
                onClick={() => setWidthDivider(widthDividerValue)}
                size={15}
              ></HiOutlineMagnifyingGlassPlus>
            </div>
            <div>
              <HiOutlineMagnifyingGlassMinus
                onClick={() => setWidthDivider(0.02)}
                size={15}
              ></HiOutlineMagnifyingGlassMinus>
            </div>
          </nav>
        </div>
        {bookOpen && (
          <TradingTable
            orderbookPair={orderbookPair}
            orderbookPrecision={orderbookPrecision}
            widthDivider={widthDivider}
          ></TradingTable>
        )}
      </article>
    </main>
  );
};

export default HomePage;
