import React from "react";

const ReportParamsContext = React.createContext();

function ReportParamsProvider({
  initialCoefficientCutoff = 0.88,
  initialCloseDataFromDt = getCurrentDate("-"),
  initialCloseDataToDt = getCurrentDate("-"),
  initialDayAnalysisBeginDt = getCurrentDate("-"),
  initialDayAnalysisEndDt = getCurrentDate("-"),
  initialNumOfDaysInAnalysis = 5,
  initialMinuteAnalysisBeginDt = getCurrentDate("-"),
  initialMinuteAnalysisEndDt = getCurrentDate("-"),
  initialStdDevToOpenTrade = 2,
  initialStdDevToCloseTrade = 1,
  initialStdDevToStopLoss = 3,
  initialPairAnalysisItems = [],
  ...props
}) {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "updateCoefficientCutoff": {
          return {
            ...state,
            coefficientCutoff: action.value,
          };
        }
        case "updateCloseDataFromDt": {
          return {
            ...state,
            closeDataFromDt: action.value,
          };
        }
        case "updateCloseDataToDt": {
          return {
            ...state,
            closeDataToDt: action.value,
          };
        }
        case "updateDayAnalysisBeginDt": {
          return {
            ...state,
            dayAnalysisBeginDt: action.value,
          };
        }
        case "updateDayAnalysisEndDt": {
          return {
            ...state,
            dayAnalysisEndDt: action.value,
          };
        }
        case "updateNumOfDaysInAnalysis": {
          return {
            ...state,
            numOfDaysInAnalysis: action.value,
          };
        }
        case "updateMinuteAnalysisBeginDt": {
          return {
            ...state,
            minuteAnalysisBeginDt: action.value,
          };
        }
        case "updateMinuteAnalysisEndDt": {
          return {
            ...state,
            minuteAnalysisEndDt: action.value,
          };
        }
        case "updateStdDevToOpenTrade": {
          return {
            ...state,
            stdDevToOpenTrade: action.value,
          };
        }
        case "updateStdDevToCloseTrade": {
          return {
            ...state,
            stdDevToCloseTrade: action.value,
          };
        }
        case "updateStdDevToStopLoss": {
          return {
            ...state,
            stdDevToStopLoss: action.value,
          };
        }
        case "updatePairAnalysisItems": {
          return {
            ...state,
            pairAnalysisItems: action.value,
          };
        }
        case "updatePairAnalysisParams": {
          return {
            ...state,
            dayAnalysisBeginDt: action.value.dayAnalysisBeginDt,
            dayAnalysisEndDt: action.value.dayAnalysisEndDt,
            numOfDaysInAnalysis: action.value.numOfDaysInAnalysis,
            minuteAnalysisBeginDt: action.value.minuteAnalysisBeginDt,
            minuteAnalysisEndDt: action.value.minuteAnalysisEndDt,
            stdDevToOpenTrade: action.value.stdDevToOpenTrade,
            stdDevToCloseTrade: action.value.stdDevToCloseTrade,
            stdDevToStopLoss: action.value.stdDevToStopLoss,
          };
        }
        default: {
          throw new Error(`Unhandled action type: ${action.type}`);
        }
      }
    },
    {
      closeDataFromDt: initialCloseDataFromDt,
      closeDataToDt: initialCloseDataToDt,
      coefficientCutoff: initialCoefficientCutoff,
      dayAnalysisBeginDt: initialDayAnalysisBeginDt,
      dayAnalysisEndDt: initialDayAnalysisEndDt,
      numOfDaysInAnalysis: initialNumOfDaysInAnalysis,
      minuteAnalysisBeginDt: initialMinuteAnalysisBeginDt,
      minuteAnalysisEndDt: initialMinuteAnalysisEndDt,
      stdDevToOpenTrade: initialStdDevToOpenTrade,
      stdDevToCloseTrade: initialStdDevToCloseTrade,
      stdDevToStopLoss: initialStdDevToStopLoss,
      pairAnalysisItems: initialPairAnalysisItems,
    }
  );

  return <ReportParamsContext.Provider value={[state, dispatch]} {...props} />;
}

function useReportParams() {
  const context = React.useContext(ReportParamsContext);
  if (context === undefined) {
    throw new Error(
      `useReportParams must be used within a ReportParamsProvider`
    );
  }
  return context;
}

function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

export { ReportParamsProvider, useReportParams };
