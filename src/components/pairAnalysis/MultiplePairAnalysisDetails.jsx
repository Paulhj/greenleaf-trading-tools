import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

const MultiplePairAnalysisDetails = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Pair Anaysis",
        columns: [
          {
            Header: "Ticker 1",
            accessor: "ticker1",
          },
          {
            Header: "Ticker 2",
            accessor: "ticker2",
          },
        ],
      },
      {
        Header: "Calculations",
        columns: [
          {
            Header: "Spread Average",
            accessor: "spreadAverage",
          },
          {
            Header: "Std. Dev.",
            accessor: "stdDev",
          },
        ],
      },
    ],
    []
  );

  const getSeriesData = (data) => {
    const seriesData = data.map((pair) => ({
      ticker1: pair.ticker1,
      ticker2: pair.ticker2,
      spreadAverage: pair.spreadAverage,
      stdDev: pair.stdDev,
    }));

    return seriesData;
  };

  return (
    <BasicTableStyles>
      <Table columns={columns} data={getSeriesData(data)} />
    </BasicTableStyles>
  );
};

export default MultiplePairAnalysisDetails;
