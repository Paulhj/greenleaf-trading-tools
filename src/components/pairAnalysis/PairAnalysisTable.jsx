import React from "react";
import { BasicTableStyles } from "../common/BasicTableStyles";
import PairAnalysisTableDef from "./PairAnalysisTableDef";

const PairAnalysisTable = ({ minuteCloseData }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Minute Close Data Pair Analysis",
        columns: [
          {
            Header: "Time",
            accessor: "time",
          },
          {
            Header: "Symbol 1",
            accessor: "ticker1",
          },
          {
            Header: "Symbol 2",
            accessor: "ticker2",
          },
          {
            Header: "Close S1",
            accessor: "closeT1",
          },
          {
            Header: "Close S2",
            accessor: "closeT2",
          },
          {
            Header: "Volume S1",
            accessor: "volumeT1",
          },
          {
            Header: "Volume S2",
            accessor: "volumeT2",
          },
          {
            Header: "Delta",
            accessor: "delta",
          },
          {
            Header: "DD",
            accessor: "doubleDelta",
          },
          {
            Header: "A. Std Dev",
            accessor: "actualStdDev",
          },
        ],
      },
    ],
    []
  );

  return (
    <BasicTableStyles>
      <PairAnalysisTableDef columns={columns} data={minuteCloseData} />
    </BasicTableStyles>
  );
};

export default PairAnalysisTable;
