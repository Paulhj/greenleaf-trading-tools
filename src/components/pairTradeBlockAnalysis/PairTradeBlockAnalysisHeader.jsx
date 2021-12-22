import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

const PairTradeBlockAnalysisHeader = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Pair Trade Block Anaysis Details",
        columns: [
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Run Time",
            accessor: "analysisRunDt",
          },
          {
            Header: "Std. Open",
            accessor: "stdDevToOpenTrade",
          },
          {
            Header: "Std. Close",
            accessor: "stdDevToCloseTrade",
          },
          {
            Header: "Std. Stop Loss",
            accessor: "stdDevStopLoss",
          },
        ],
      },
      {
        Header: "Day Analysis Dates",
        columns: [
          {
            Header: "Begin",
            accessor: "dayAnalysisBeginDt",
          },
          {
            Header: "End",
            accessor: "dayAnalysisEndDt",
          },
          {
            Header: "Days",
            accessor: "numOfDaysInAnalysis",
          },
        ],
      },
      {
        Header: "Minute Analysis Dates",
        columns: [
          {
            Header: "Begin",
            accessor: "minuteAnalysisBeginDt",
          },
          {
            Header: "End",
            accessor: "minuteAnalysisEndDt",
          },
        ],
      },
      {
        Header: "Profit/Loss",
        columns: [
          {
            Header: "Close",
            accessor: "countClose",
          },
          {
            Header: "Stop Loss",
            accessor: "countStopLoss",
          },
          {
            Header: "End Of Day",
            accessor: "countEndOfDay",
          },
          {
            Header: "Total",
            accessor: "profitLossTotal",
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

export default PairTradeBlockAnalysisHeader;
