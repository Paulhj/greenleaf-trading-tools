import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

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
        ],
      },
    ],
    []
  );

  return (
    <BasicTableStyles>
      <Table columns={columns} data={[data]} />
    </BasicTableStyles>
  );
};

export default TradesSummaryTable;
