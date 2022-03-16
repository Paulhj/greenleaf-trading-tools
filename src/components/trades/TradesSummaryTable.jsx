import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

const shapeData = (data) => {
  return {
    ...data,
    alpacaProfitLoss: data.brokerage.profitLoss,
    time: data.brokerage.timeDisplay,
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
            Header: "Alpaca Profit/Loss",
            accessor: "alpacaProfitLoss",
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
