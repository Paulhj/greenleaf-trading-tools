import React from "react";
import { BasicTableStyles } from "../common/BasicTableStyles";
import PairTradeBlockTableDef from "./PairTradeBlockTableDef";

const PairTradeBlockTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Pair Trade Blocks",
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
          {
            Header: "Delete",
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
        No pair block data found, make sure you have selected a valid date
        range.
      </div>
    );
  }

  return (
    <BasicTableStyles>
      <PairTradeBlockTableDef columns={columns} data={data} />
    </BasicTableStyles>
  );
};

export default PairTradeBlockTable;
