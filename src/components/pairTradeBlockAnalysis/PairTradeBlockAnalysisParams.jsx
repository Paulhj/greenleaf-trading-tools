import React from "react";
import { useReportParams } from "../../hooks/useReportParams";

const PairTradeBlockAnalysisParams = ({ params, setParams, refetch }) => {
  function handleChange(e) {
    const { name, value } = e.target;
    setParams((inputs) => ({ ...params, [name]: value }));
  }

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReportParams();

  const setPairAnalysisParams = (dispatch, params) =>
    dispatch({
      type: "updatePairAnalysisParams",
      value: {
        dayAnalysisBeginDt: params.dayAnalysisBeginDt,
        dayAnalysisEndDt: params.dayAnalysisEndDt,
        numOfDaysInAnalysis: params.numOfDaysInAnalysis,
        minuteAnalysisBeginDt: params.minuteAnalysisBeginDt,
        minuteAnalysisEndDt: params.minuteAnalysisEndDt,
        stdDevToOpenTrade: params.stdDevToOpenTrade,
        stdDevToCloseTrade: params.stdDevToCloseTrade,
        stdDevToStopLoss: params.stdDevToStopLoss,
      },
    });

  return (
    <div
      style={{
        width: "400px",
        padding: "1rem",
        border: "1px solid black",
      }}
    >
      <strong>Pair Analysis Parameters</strong>
      <button
        onClick={() => {
          setPairAnalysisParams(dispatch, params);
          refetch(params);
        }}
      >
        Run Pair Trade Block Analysis
      </button>
      <div>
        <div>
          <label htmlFor="dayAnalysisBeginDt-input">
            Day Analysis Begin Date:{" "}
          </label>
          <input
            type="date"
            className="dayAnalysisBeginDt-input"
            id="dayAnalysisBeginDt-input"
            name="dayAnalysisBeginDt"
            value={params.dayAnalysisBeginDt}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="dayAnalysisEndDt-input">
            Day Analysis End Date:{" "}
          </label>
          <input
            type="date"
            className="dayAnalysisEndDt-input"
            id="dayAnalysisEndDt-input"
            name="dayAnalysisEndDt"
            value={params.dayAnalysisEndDt}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="numOfDaysInAnalysis-input">
            Num Of Days In Analysis:{" "}
          </label>
          <input
            className="numOfDaysInAnalysis-input"
            id="numOfDaysInAnalysis-input"
            name="numOfDaysInAnalysis"
            placeholder="5"
            value={params.numOfDaysInAnalysis}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="minuteAnalysisBeginDt-input">
            Minute Analysis Begin Date:{" "}
          </label>
          <input
            type="date"
            className="minuteAnalysisBeginDt-input"
            id="minuteAnalysisBeginDt-input"
            name="minuteAnalysisBeginDt"
            value={params.minuteAnalysisBeginDt}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="minuteAnalysisEndDt-input">
            Minute Analysis End Date:{" "}
          </label>
          <input
            type="date"
            className="minuteAnalysisEndDt-input"
            id="minuteAnalysisEndDt-input"
            name="minuteAnalysisEndDt"
            value={params.minuteAnalysisEndDt}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="stdDevToOpenTrade-input">
            Std. Dev. To Open Trade:{" "}
          </label>
          <input
            className="stdDevToOpenTrade-input"
            id="stdDevToOpenTrade-input"
            name="stdDevToOpenTrade"
            placeholder="2"
            value={params.stdDevToOpenTrade}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="stdDevToCloseTrade-input">
            Std. Dev. To Close Trade:{" "}
          </label>
          <input
            className="stdDevToCloseTrade-input"
            id="stdDevToCloseTrade-input"
            name="stdDevToCloseTrade"
            placeholder="1"
            value={params.stdDevToCloseTrade}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="stdDevToStopLoss-input">
            Std. Dev. To Stop Loss:{" "}
          </label>
          <input
            className="stdDevToStopLoss-input"
            id="stdDevToStopLoss-input"
            name="stdDevToStopLoss"
            placeholder="3"
            value={params.stdDevToStopLoss}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default PairTradeBlockAnalysisParams;
