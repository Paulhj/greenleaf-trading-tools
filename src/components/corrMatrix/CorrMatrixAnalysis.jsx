import React from "react";
import CorrMatrixTable from "./CorrMatrixTable";
import { BasicTableStyles } from "../common/BasicTableStyles";

const CorrMatrixAnalysis = ({
  corrMatrixResultsColumns,
  corrMatrixResultsRows,
}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Correlation Matrix Analysis Data",
        columns: corrMatrixResultsColumns.map((column) => ({
          Header: column,
          accessor: column,
        })),
      },
    ],
    [corrMatrixResultsColumns]
  );

  return (
    <BasicTableStyles>
      <CorrMatrixTable columns={columns} data={corrMatrixResultsRows} />
    </BasicTableStyles>
  );
};

export default CorrMatrixAnalysis;
