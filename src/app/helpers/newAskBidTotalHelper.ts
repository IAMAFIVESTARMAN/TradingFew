import { OrderBookEntries, OrderBookEntry } from "../types/typesAndEnums";

export const calculateNewTotalsAsksBids = (
  data: OrderBookEntry[],
  type: string
): number[] => {
  const sumsBIDS: number[] = [];
  const sumsASKS: number[] = [];
  let sumBids = 0;
  let sumAsks = 0;

  data.forEach((el: OrderBookEntry) => {
    if (type === "bid") {
      sumBids += Math.abs(el[OrderBookEntries["amount"]]);

      sumsBIDS.push(sumBids);
    } else if (type === "ask") {
      sumAsks += Math.abs(el[OrderBookEntries["amount"]]);
      sumsASKS.push(sumAsks);
    }
  });

  return type === "bid" ? [...sumsBIDS] : [...sumsASKS];
};
