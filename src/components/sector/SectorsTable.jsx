import React from "react";
import { BasicTableStyles } from "../common/BasicTableStyles";
import SectorsTableDef from "./SectorsTableDef";

const SectorsTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Sectors",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Notes",
            accessor: "notes",
          },
          {
            Header: "Symbols",
            accessor: "tickerCount",
          },
          {
            Header: "View",
            accessor: "id",
          },
        ],
      },
    ],
    []
  );

  return (
    <BasicTableStyles>
      <SectorsTableDef columns={columns} data={data} />
    </BasicTableStyles>
  );
};

export default SectorsTable;
