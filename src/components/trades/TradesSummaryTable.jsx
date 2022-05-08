import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

const shapeData = (data) => {
  return {
    ...data,
    alpacaProfitLoss: data.brokerage.profitLoss,
    time: data.brokerage.timeDisplay,
    equity: data.brokerage.equity,
    longMarketValue: data.brokerage.longMarketValue,
    shortMarketValue: data.brokerage.shortMarketValue,
  };
};

const TradesSummaryTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Trades Summary",
        columns: [
          {
            Header: "Total Profit/Loss",
            accessor: "totalProfitLoss",
          },
          {
            Header: "Total Brokerage P/L",
            accessor: "totalProfitLossBrokerage",
          },

          {
            Header: "# of Trades",
            accessor: "totalNumTrades",
          },
          {
            Header: "# Active",
            accessor: "totalTradesActive",
          },
          {
            Header: "# Closes",
            accessor: "totalTradesClosed",
          },
          {
            Header: "# Stop Loss",
            accessor: "totalTradesStopLoss",
          },
          {
            Header: "# End Of Day",
            accessor: "totalTradesEndOfDay",
          },
          {
            Header: "Alpaca P/L",
            accessor: "alpacaProfitLoss",
          },
          {
            Header: "Alpaca Equity",
            accessor: "equity",
          },
          {
            Header: "Alpaca Long",
            accessor: "longMarketValue",
          },
          {
            Header: "Alpaca Short",
            accessor: "shortMarketValue",
          },
          {
            Header: "Time",
            accessor: "time",
          },
        ],
      },
    ],
    []
  );

  return (
    <BasicTableStyles>
      <Table columns={columns} data={[shapeData(data)]} />
    </BasicTableStyles>
  );
};

export default TradesSummaryTable;
