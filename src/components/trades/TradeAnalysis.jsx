import { useGetPairAnalysisQuery } from "../../app/services/pairTradeBlockAnalysis";
import PairAnalysisDetails from "../pairAnalysis/PairAnalysisDetails";
import PairsAnalysisChart from "../pairAnalysis/PairAnalysisChart";
import PairAnalysisTable from "../pairAnalysis/PairAnalysisTable";
import PairDayDataTable from "./PairDayDataTable";

const TradeAnalysis = ({ s1, s2, analysisInputs }) => {
  const params = {
    ticker1: s1,
    ticker2: s2,
    dayAnalysisBeginDt: analysisInputs.dayAnalysisBeginDt,
    dayAnalysisEndDt: analysisInputs.dayAnalysisEndDt,
    numOfDaysInAnalysis: analysisInputs.numOfDaysInAnalysis,
    minuteAnalysisBeginDt: analysisInputs.minuteAnalysisBeginDt,
    minuteAnalysisEndDt: analysisInputs.minuteAnalysisEndDt,
    stdDevToOpenTrade: analysisInputs.stdDevToOpenTrade,
    stdDevToCloseTrade: analysisInputs.stdDevToCloseTrade,
    stdDevToStopLoss: analysisInputs.stdDevToStopLoss,
  };

  const { data, error, isError, isLoading } = useGetPairAnalysisQuery(params);

  if (isLoading) {
    return (
      <div>
        Loading pair analysis for {s1} abd {s2} ...
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
        <PairAnalysisDetails data={data} />
        <PairsAnalysisChart
          ticker1={data.ticker1}
          ticker2={data.ticker2}
          spreadMean={data.spreadAverage}
          stdDev={data.stdDev}
          data={data.minuteCloseData}
        />
        <PairAnalysisTable minuteCloseData={data.minuteCloseData} />
        <PairDayDataTable data={data.dayCloseData} />
      </div>
    );
  }
};

export default TradeAnalysis;
