import React from "react";

import { OrderbookParams } from "@/app/types/typesAndEnums";

import Loading from "./orderbookLoading";

import OrderBookBidsComponent from "./OrderBookBidsComponent";
import OrderBookAsksComponent from "./OrderBookAsksComponent";
import { useSocketData } from "@/app/hooks/useSocketBooksData";

type T = ReturnType<typeof useSocketData>;

const WebSocketComponent = ({
  orderbookPrecision,
  widthDivider,
  orderbookPair,
}: OrderbookParams) => {
  const { initialDataLoaded, orderBook }: T = useSocketData(
    orderbookPrecision,
    orderbookPair
  );

  const content = initialDataLoaded ? (
    <>
      <OrderBookBidsComponent
        data={orderBook.bids}
        type="bid"
        widthDivider={widthDivider}
      ></OrderBookBidsComponent>
      <OrderBookAsksComponent
        data={orderBook.asks}
        type="ask"
        widthDivider={widthDivider}
      ></OrderBookAsksComponent>
    </>
  ) : (
    <Loading></Loading>
  );

  return content;
};

export default WebSocketComponent;
