import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

const PairTradeBlockHeader = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Selected Pair Trade Block Details",
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
            Header: "Trade Count",
            accessor: "pairTradeCount",
          },
          {
            Header: "From Date",
            accessor: "closeDataFromDt",
          },
          {
            Header: "To Date",
            accessor: "closeDataToDt",
          },
          {
            Header: "Coeff. Cutoff",
            accessor: "coefficientCutoff",
          },
          {
            Header: "Status",
            accessor: "analysisStatus",
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

export default PairTradeBlockHeader;
