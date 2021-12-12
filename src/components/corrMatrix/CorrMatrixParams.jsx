import React from "react";
import { useReportParams } from "../../hooks/useReportParams";
import { useAddPairTradeBlockMutation } from "../../app/services/pairTradeBlocks";

const CorrMatrixParams = () => {
  const [state, dispatch] = useReportParams();
  const [addPairTradeBlock] = useAddPairTradeBlockMutation();

  const setCoefficientCutoff = (dispatch, coefficientCutoff) =>
    dispatch({ type: "updateCoefficientCutoff", value: coefficientCutoff });

  const setCloseDateFromDt = (dispatch, closeDataFromDt) =>
    dispatch({ type: "updateCloseDataFromDt", value: closeDataFromDt });

  const setCloseDateToDt = (dispatch, closeDataToDt) =>
    dispatch({ type: "updateCloseDataToDt", value: closeDataToDt });

  return (
    <div
      style={{
        width: "350px",
        padding: "1rem",
        border: "1px solid black",
      }}
    >
      <b>Corr. Matrix Parameters</b>
      <div>
        <label htmlFor="closeDataFromDt-input">Close Data From Date: </label>
        <input
          type="date"
          className="closeDataFromDt-input"
          id="closeDataFromDt-input"
          name="closeDataFromDt"
          placeholder="YYYY-MM-DD"
          value={state.closeDataFromDt}
          onChange={(e) => setCloseDateFromDt(dispatch, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="closeDataToDt-input">Close Data To Date: </label>
        <input
          type="date"
          className="closeDataToDt-input"
          id="closeDataToDt-input"
          name="closeDataToDt"
          value={state.closeDataToDt}
          onChange={(e) => setCloseDateToDt(dispatch, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="coefficientCutoff-input">Coefficient Cutoff: </label>
        <input
          className="coefficientCutoff-input"
          id="coefficientCutoff-input"
          name="coefficientCutoff"
          placeholder=".88"
          value={state.coefficientCutoff}
          onChange={(e) => setCoefficientCutoff(dispatch, e.target.value)}
        />
      </div>
      <button
        onClick={() =>
          addPairTradeBlock({
            closeDataFromDt: state.closeDataFromDt,
            closeDataToDt: state.closeDataToDt,
            coefficientCutoff: state.coefficientCutoff,
          })
        }
      >
        Create Pair Trade Block
      </button>
    </div>
  );
};

export default CorrMatrixParams;
