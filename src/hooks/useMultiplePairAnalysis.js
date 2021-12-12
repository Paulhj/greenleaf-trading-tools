import { useEffect } from "react";
import { apigreenleaf } from "../api";
import useAsync from "./useAsync";
import { useReportParams } from "./useReportParams";

const fetchPairAnalysisData = (
  pairs,
  dayAnalysisBeginDt,
  dayAnalysisEndDt,
  numOfDaysInAnalysis,
  minuteAnalysisBeginDt,
  minuteAnalysisEndDt,
  stdDevToOpenTrade,
  stdDevToCloseTrade,
  stdDevToStopLoss,
  delay = 1500
) => {
  const options = {
    method: "post",
    url: "/PairAnalysis",
    data: {
      dayAnalysisBeginDt: dayAnalysisBeginDt,
      dayAnalysisEndDt: dayAnalysisEndDt,
      numOfDaysInAnalysis: numOfDaysInAnalysis,
      minuteAnalysisBeginDt: minuteAnalysisBeginDt,
      minuteAnalysisEndDt: minuteAnalysisEndDt,
      stdDevToOpenTrade: stdDevToOpenTrade,
      stdDevToCloseTrade: stdDevToCloseTrade,
      stdDevToStopLoss: stdDevToStopLoss,
      pairs: pairs,
    },
    transformRequest: [
      (data, headers) => {
        return JSON.stringify(data);
      },
    ],
  };

  return apigreenleaf(options)
    .then(async (response) => {
      //const { response } = await response;
      if (response.status === 200) {
        const details = response?.data;
        if (details) {
          //details.fetchedAt = formatDate(new Date())
          return details;
        } else {
          return Promise.reject(response?.data.error);
          //return Promise.reject(
          //  new Error(`No sector with this id "${sectorId}"`)
          //);
        }
      } else {
        // handle the errors
        const error = {
          message: response?.errors?.map((e) => e.message).join("\n"),
        };
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      if (error.request.status === 404) {
        return Promise.reject(`No Ticker found with id}`);
      }
      return Promise.reject(error.response.data.error);
    });
};

const useMultiplePairAnalysis = () => {
  const [state] = useReportParams();

  const { data, status, error, run } = useAsync({
    status: state.pairAnalysisItems.length === 0 ? "pending" : "idle",
    data: {
      pairs: [],
      analysisRunDt: null,
      dayAnalysisBeginDt: null,
      dayAnalysisEndDt: null,
      numOfDaysInAnalysis: 0,
      minuteAnalysisBeginDt: null,
      minuteAnalysisEndDt: null,
      spreadAverage: 0,
      stdDev: 0,
      minuteCloseData: [],
    },
  });

  useEffect(() => {
    run(
      fetchPairAnalysisData(
        state.pairAnalysisItems,
        state.dayAnalysisBeginDt,
        state.dayAnalysisEndDt,
        state.numOfDaysInAnalysis,
        state.minuteAnalysisBeginDt,
        state.minuteAnalysisEndDt,
        state.stdDevToOpenTrade,
        state.stdDevToCloseTrade,
        state.stdDevToStopLoss
      ).then((analysisData) => {
        return analysisData;
      })
    );
  }, [
    run,
    state.dayAnalysisBeginDt,
    state.dayAnalysisEndDt,
    state.minuteAnalysisBeginDt,
    state.minuteAnalysisEndDt,
    state.numOfDaysInAnalysis,
    state.pairAnalysisItems,
    state.stdDevToCloseTrade,
    state.stdDevToOpenTrade,
    state.stdDevToStopLoss,
  ]);

  return {
    data,
    status,
    error,
  };
};

export default useMultiplePairAnalysis;
