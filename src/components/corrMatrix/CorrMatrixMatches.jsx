import React from "react";
import { useHistory } from "react-router-dom";
import { useReportParams } from "../../hooks/useReportParams";
import { BasicTableStyles } from "../common/BasicTableStyles";
import CorrMatrixMatchesTableDef from "./CorrMatrixMatchesTableDef";

const CorrMatrixMatches = ({ corrMatrixResultsMatches }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReportParams();
  const history = useHistory();

  const setPairAnalysisItems = (dispatch, corrMatrixResultsMatches) => {
    const pairs = corrMatrixResultsMatches.map((pair) => ({
      ticker1: pair.ticker1,
      ticker2: pair.ticker2,
    }));
    dispatch({ type: "updatePairAnalysisItems", value: pairs });
  };

  const analysisReportCallback = () => {
    setPairAnalysisItems(dispatch, corrMatrixResultsMatches);
    history.push("/multiplepairanalysisreport");
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Correlation Matrix Matches",
        columns: [
          {
            Header: "Symbol 1",
            accessor: "ticker1",
          },
          {
            Header: "Symbol 2",
            accessor: "ticker2",
          },
          {
            Header: "Coefficient",
            accessor: "coefficient",
          },
          {
            Header: "PA",
            accessor: "id",
          },
        ],
      },
    ],
    []
  );

  return (
    <BasicTableStyles>
      <CorrMatrixMatchesTableDef
        columns={columns}
        data={corrMatrixResultsMatches}
        analysisReportCallback={analysisReportCallback}
      />
    </BasicTableStyles>
  );
};

export default CorrMatrixMatches;
