import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

const PairDayDataTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Pair Day Close Data",
        columns: [
          {
            Header: "Day",
            accessor: "day",
          },
          {
            Header: "S1 Close",
            accessor: "closeT1",
          },
          {
            Header: "S2 Close",
            accessor: "closeT2",
          },
          {
            Header: "Spread",
            accessor: "spread",
          },
          {
            Header: "RelPerf",
            accessor: "relPerf",
          },
          {
            Header: "S1 Volume",
            accessor: "volumeT1",
          },
          {
            Header: "S2 Volume",
            accessor: "volumeT2",
          },
        ],
      },
    ],
    []
  );

  return (
    <BasicTableStyles>
      <Table columns={columns} data={data} />
    </BasicTableStyles>
  );
};

export default PairDayDataTable;
