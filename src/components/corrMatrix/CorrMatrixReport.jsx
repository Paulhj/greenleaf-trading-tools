import React from "react";
import CorrMatrixAnalysis from "./CorrMatrixAnalysis";
import CorrMatrixDailyCloseData from "./CorrMatrixDailyCloseData";
import CorrMatrixDetails from "./CorrMatrixDetails";
import CorrMatrixMatches from "./CorrMatrixMatches";
import useCorrMatrixAnalysis from "./useCorrMatrixAnalysis";

const CorrMatrixReport = React.memo(
  ({ sectorId, closeDataFromDt, closeDataToDt, coefficientCutoff }) => {
    console.log(
      "why is this still re-rendering when the img value hasn't changed?"
    );
    const {
      corrMatrixDetails,
      corrMatrixResultsColumns,
      corrMatrixResultsRows,
      corrMatrixResultsMatches,
      dailyCloseDataColumns,
      dailyCloseDataRows,
      status,
      // eslint-disable-next-line no-unused-vars
      error,
    } = useCorrMatrixAnalysis(
      sectorId,
      closeDataFromDt,
      closeDataToDt,
      coefficientCutoff
    );

    if (status === "idle") {
      return <div>Please submit a ticker to get the details...</div>;
    } else if (status === "pending") {
      return <div>Request pending...</div>;
    } else if (status === "rejected") {
      return <div>ERROR!!</div>; //NEED TO FIX THIS SO GET ERROR MSG for error
    } else if (status === "resolved") {
      return (
        <div>
          <CorrMatrixDetails data={corrMatrixDetails} />
          <CorrMatrixMatches
            corrMatrixResultsMatches={corrMatrixResultsMatches}
          />
          <CorrMatrixAnalysis
            corrMatrixResultsColumns={corrMatrixResultsColumns}
            corrMatrixResultsRows={corrMatrixResultsRows}
          />
          <CorrMatrixDailyCloseData
            dailyCloseDataColumns={dailyCloseDataColumns}
            dailyCloseDataRows={dailyCloseDataRows}
          />
        </div>
      );
    }
  },
  corrMatrixPropsAreEqual
);

function corrMatrixPropsAreEqual(prev, next) {
  return (
    prev.sectorId === next.sectorId &&
    prev.closeDataFromDt === next.closeDataFromDt &&
    prev.closeDataToDt === next.closeDataToDt &&
    prev.coefficientCutoff === next.coefficientCutoff
  );
}

export default CorrMatrixReport;
