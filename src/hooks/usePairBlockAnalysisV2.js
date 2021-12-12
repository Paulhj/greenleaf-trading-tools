//import { useQuery } from "react-query";
//import { apigreenleaf } from "../api";
//import { useReportParams } from "./useReportParams";

/*
const getPostById = async (params) => {
  const options = {
    method: "get",
    url: "/PairTradeBlockAnalysis",
    params: {
      pairBlockId: params.pairBlockId,
      dayAnalysisBeginDt: params.dayAnalysisBeginDt,
      dayAnalysisEndDt: params.dayAnalysisEndDt,
      numOfDaysInAnalysis: params.numOfDaysInAnalysis,
      minuteAnalysisBeginDt: params.minuteAnalysisBeginDt,
      minuteAnalysisEndDt: params.minuteAnalysisEndDt,
      stdDevToOpenTrade: params.stdDevToOpenTrade,
      stdDevToCloseTrade: params.stdDevToCloseTrade,
      stdDevToStopLoss: params.stdDevToStopLoss,
    },
    transformRequest: [
      (data, headers) => {
        return JSON.stringify(data);
      },
    ],
  };

  const { data } = await apigreenleaf(options).then();
  return data;
};
*/

export default function usePairBlockAnalysisV2(pairBlockId) {
  //const [state] = useReportParams();
  //const params = { pairBlockId: pairBlockId, ...state };
  return null; //useQuery(["get", params], () => getPostById(params));
}
