import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

const PairAnalysisDetails = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Pair Anaysis Details",
        columns: [
          {
            Header: "Symbol 1",
            accessor: "ticker1",
          },
          {
            Header: "Symbol 2",
            accessor: "ticker2",
          },
        ],
      },
      {
        Header: "Calculations",
        columns: [
          {
            Header: "Run Time",
            accessor: "analysisRunDt",
          },
          {
            Header: "Avg. Spread",
            accessor: "spreadAverage",
          },
          {
            Header: "Std. Dev.",
            accessor: "stdDev",
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

export default PairAnalysisDetails;
