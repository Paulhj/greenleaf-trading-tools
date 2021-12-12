import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

const MultiplePairAnalysisReportDetails = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Pair Anaysis Details",
        columns: [
          {
            Header: "Run Time",
            accessor: "analysisRunDt",
          },
        ],
      },
      {
        Header: "Z Scores",
        columns: [
          {
            Header: "Open Trade",
            accessor: "stdDevToOpenTrade",
          },
          {
            Header: "Close Trade",
            accessor: "stdDevToCloseTrade",
          },
          {
            Header: "Stop Loss",
            accessor: "stdDevToStopLoss",
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
    ],
    []
  );

  return (
    <BasicTableStyles>
      <Table columns={columns} data={[data]} />
    </BasicTableStyles>
  );
};

export default MultiplePairAnalysisReportDetails;
