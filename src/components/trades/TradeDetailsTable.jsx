import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

const TradeDetailsTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Trade Details",
        columns: [
          {
            Header: "S. Avg",
            accessor: "spreadAverage",
          },
          {
            Header: "S. Std Dev",
            accessor: "spreadStdDev",
          },
          {
            Header: "O. Spread",
            accessor: "openSpread",
          },
          {
            Header: "C. Spread",
            accessor: "closeSpread",
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

export default TradeDetailsTable;
