import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

const CorrMatrixDailyCloseData = ({
  dailyCloseDataColumns,
  dailyCloseDataRows,
}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Correlation Matrix Daily Close Data",
        columns: dailyCloseDataColumns.map((column) => ({
          Header: column,
          accessor: column,
        })),
      },
    ],
    [dailyCloseDataColumns]
  );

  return (
    <BasicTableStyles>
      <Table columns={columns} data={dailyCloseDataRows} />
    </BasicTableStyles>
  );
};

export default CorrMatrixDailyCloseData;
