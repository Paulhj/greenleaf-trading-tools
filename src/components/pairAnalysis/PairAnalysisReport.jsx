import React from "react";
import PairsAnalysisChart from "./PairAnalysisChart";
import PairAnalysisDetails from "./PairAnalysisDetails";
import PairAnalysisTable from "./PairAnalysisTable";
import { useGetPairAnalysisQuery } from "../../app/services/pairTradeBlockAnalysis";
import { useReportParams } from "../../hooks/useReportParams";
import { Link } from "react-router-dom";

const PairAnalysisReport = ({ ticker1, ticker2, pairTradeBlockId }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReportParams();
  const url1 = `/pairtradeblockanalysis/${pairTradeBlockId}`;
  const params = {
    ticker1: ticker1,
    ticker2: ticker2,
    dayAnalysisBeginDt: state.dayAnalysisBeginDt,
    dayAnalysisEndDt: state.dayAnalysisEndDt,
    numOfDaysInAnalysis: state.numOfDaysInAnalysis,
    minuteAnalysisBeginDt: state.minuteAnalysisBeginDt,
    minuteAnalysisEndDt: state.minuteAnalysisEndDt,
    stdDevToOpenTrade: state.stdDevToOpenTrade,
    stdDevToCloseTrade: state.stdDevToCloseTrade,
    stdDevToStopLoss: state.stdDevToStopLoss,
  };

  const { data, error, isError, isLoading } = useGetPairAnalysisQuery(params);

  if (isLoading) {
    return (
      <div>
        Loading pair analysis for {ticker1} abd {ticker2} ...
      </div>
    );
  } else if (isError) {
    return (
      <div>
        Error Status: {error.status} Msg: {error.data.error.message}
      </div>
    );
  } else if (data !== undefined) {
    return (
      <div>
        <Link to={url1}>Back to Pair Trade Block</Link>
        <PairAnalysisDetails data={data} />
        <PairsAnalysisChart
          ticker1={data.ticker1}
          ticker2={data.ticker2}
          spreadMean={data.spreadAverage}
          stdDev={data.stdDev}
          data={data.minuteCloseData}
        />
        <PairAnalysisTable minuteCloseData={data.minuteCloseData} />
      </div>
    );
  }
};

export default PairAnalysisReport;
