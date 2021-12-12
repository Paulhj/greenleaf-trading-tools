import React from "react";
import useSectors from "../../hooks/useSectors";
import { BasicTableStyles } from "../common/BasicTableStyles";
import SectorTableDef from "./SectorTableDef";

const SectorsTable = () => {
  const { data, status, error } = useSectors();

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
            Header: "CM",
            accessor: "id",
          },
        ],
      },
    ],
    []
  );

  if (data === null) {
    return (
      <div>
        No sector data found, make sure you are connected to the internet.
      </div>
    );
  } else if (status === "pending") {
    return <div>Request pending...</div>;
  } else if (status === "rejected") {
    return <div>{error}</div>;
  } else if (status === "resolved") {
    return (
      <BasicTableStyles>
        <SectorTableDef columns={columns} data={data} />
      </BasicTableStyles>
    );
  }
};

export default SectorsTable;
