import React from "react";
import { BasicTableStyles } from "../common/BasicTableStyles";
import Table from "../common/Table";

const TickersTable = ({ data, sectorName }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: `${sectorName} Tickers`,
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
        ],
      },
    ],
    [sectorName]
  );

  return (
    <BasicTableStyles>
      <Table columns={columns} data={data} />
    </BasicTableStyles>
  );
};

export default TickersTable;
