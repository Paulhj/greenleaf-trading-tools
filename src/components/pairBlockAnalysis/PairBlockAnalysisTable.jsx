import React from "react";
import { BasicTableStyles } from "../common/BasicTableStyles";
import PairBlockAnalysisTableDef from "./PairBlockAnalysisTableDef";

const PairBlockAnalysisTable = ({ analysisReport, pairTradeBlockId }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Minute Close Data Pair Analysis",
        columns: [
          {
            Header: "Sector",
            accessor: "sectorName",
          },
          {
            Header: "Symbol 1",
            accessor: "ticker1",
          },
          {
            Header: "Symbol 2",
            accessor: "ticker2",
          },
          {
            Header: "Open Time",
            accessor: "positionOpenDt",
          },
          {
            Header: "Close Time",
            accessor: "positionCloseDt",
          },
          {
            Header: "Open StdDev",
            accessor: "positionOpenStdDev",
          },
          {
            Header: "Close StdDev",
            accessor: "positionCloseStdDev",
          },
          {
            Header: "S1 Pos.",
            accessor: "ticker1Position",
          },
          {
            Header: "S1 Open",
            accessor: "positionOpenT1",
          },
          {
            Header: "S1 Close",
            accessor: "positionCloseT1",
          },
          {
            Header: "S2 Pos.",
            accessor: "ticker2Position",
          },
          {
            Header: "S2 Open",
            accessor: "positionOpenT2",
          },
          {
            Header: "S2 Close",
            accessor: "positionCloseT2",
          },
          {
            Header: "Open Spread",
            accessor: "positionOpenSpread",
          },
          {
            Header: "Close Spread",
            accessor: "positionCloseSpread",
          },
          {
            Header: "Type",
            accessor: "typeStr",
          },
          {
            Header: "Shares T1",
            accessor: "numOfSharesT1",
          },
          {
            Header: "Shares T2",
            accessor: "numOfSharesT2",
          },
          {
            Header: "Open Amount T1",
            accessor: "tradeOpenAmountT1",
          },
          {
            Header: "Open Amount T2",
            accessor: "tradeOpenAmountT2",
          },
          {
            Header: "Close Amount T1",
            accessor: "tradeCloseAmountT1",
          },
          {
            Header: "Close Amount T2",
            accessor: "tradeCloseAmountT2",
          },
          {
            Header: "P/L T1",
            accessor: "profitLossT1",
          },
          {
            Header: "P/L T2",
            accessor: "profitLossT2",
          },
          {
            Header: "P/L",
            accessor: "profitLoss",
          },
          {
            Header: "PA-Details",
            accessor: "",
          },
        ],
      },
    ],
    []
  );

  return (
    <BasicTableStyles>
      <PairBlockAnalysisTableDef
        columns={columns}
        data={analysisReport}
        pairTradeBlockId={pairTradeBlockId}
      />
    </BasicTableStyles>
  );
};

export default PairBlockAnalysisTable;
