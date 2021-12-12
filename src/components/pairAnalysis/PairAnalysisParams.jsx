import React, { useState } from "react";
import { useReportParams } from "../../hooks/useReportParams";

const PairAnalysisParams = () => {
  const [state, dispatch] = useReportParams();
  const [params, setParams] = useState({
    dayAnalysisBeginDt: state.dayAnalysisBeginDt,
    dayAnalysisEndDt: state.dayAnalysisEndDt,
    numOfDaysInAnalysis: state.numOfDaysInAnalysis,
    minuteAnalysisBeginDt: state.minuteAnalysisBeginDt,
    minuteAnalysisEndDt: state.minuteAnalysisEndDt,
    stdDevToOpenTrade: state.stdDevToOpenTrade,
    stdDevToCloseTrade: state.stdDevToCloseTrade,
    stdDevToStopLoss: state.stdDevToStopLoss,
  });

  /*
  const setNumOfDaysInAnalysis = (dispatch, numOfDaysInAnalysis) =>
    dispatch({ type: "updateNumOfDaysInAnalysis", value: numOfDaysInAnalysis });

  const setDayAnalysisBeginDt = (dispatch, dayAnalysisBeginDt) =>
    dispatch({ type: "updateDayAnalysisBeginDt", value: dayAnalysisBeginDt });

  const setDayAnalysisEndDt = (dispatch, dayAnalysisEndDt) =>
    dispatch({ type: "updateDayAnalysisEndDt", value: dayAnalysisEndDt });

  const setMinuteAnalysisBeginDt = (dispatch, minuteAnalysisBeginDt) =>
    dispatch({
      type: "updateMinuteAnalysisBeginDt",
      value: minuteAnalysisBeginDt,
    });

  const setMinuteAnalysisEndDt = (dispatch, minuteAnalysisEndDt) =>
    dispatch({
      type: "updateMinuteAnalysisEndDt",
      value: minuteAnalysisEndDt,
    }); 

  const setStdDevToOpenTrade = (dispatch, stdDevToOpenTrade) =>
    dispatch({ type: "updateStdDevToOpenTrade", value: stdDevToOpenTrade });

  const setStdDevToCloseTrade = (dispatch, stdDevToCloseTrade) =>
    dispatch({ type: "updateStdDevToCloseTrade", value: stdDevToCloseTrade });

  const setStdDevToStopLoss = (dispatch, stdDevToStopLoss) =>
    dispatch({ type: "updateStdDevToStopLoss", value: stdDevToStopLoss });
 */

  const setPairAnalysisParams = (dispatch, params) =>
    dispatch({
      type: "updatePairAnalysisParams",
      value: {
        //THINK WE CAN CHANGE THIS TO ...params
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

  function handleChange(e) {
    const { name, value } = e.target;
    setParams((inputs) => ({ ...params, [name]: value }));
  }

  return (
    <div
      style={{
        width: "400px",
        padding: "1rem",
        border: "1px solid black",
      }}
    >
      <strong>Pair Analysis Parameters</strong>
      <button onClick={() => setPairAnalysisParams(dispatch, params)}>
        Update Pair Analysis Parmas
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

export default PairAnalysisParams;
