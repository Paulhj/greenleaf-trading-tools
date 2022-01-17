import React from "react";
import { BasicTableStyles } from "../common/BasicTableStyles";
import TickersTableDef from "./TickersTableDef";

const TickersTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: `Sector Tickers`,
        columns: [
          {
            Header: "Sector Name",
            accessor: "sectorName",
          },
          {
            Header: "Ticker",
            accessor: "name",
          },
          {
            Header: "Exclude From Trading",
            accessor: "excludeFromTrading",
          },
          {
            Header: "Id",
            accessor: "id",
          },
        ],
      },
    ],
    []
  );

  return (
    <BasicTableStyles>
      <TickersTableDef columns={columns} data={data} />
    </BasicTableStyles>
  );
};

export default TickersTable;
