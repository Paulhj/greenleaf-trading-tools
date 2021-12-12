import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

const CorrMatrixDetails = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Correlation Matrix Details",
        columns: [
          {
            Header: "Sector",
            accessor: "sectorName",
          },
          {
            Header: "Run Time",
            accessor: "analysisRunDt",
          },
        ],
      },
      {
        Header: "Run Parameters",
        columns: [
          {
            Header: "Close Data From Date",
            accessor: "closeDataFromDt",
          },
          {
            Header: "Close Data To Date",
            accessor: "closeDataToDt",
          },
          {
            Header: "Coefficient Cutoff",
            accessor: "coefficientCutoff",
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

export default CorrMatrixDetails;
