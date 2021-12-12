import React from "react";
import MultiplePairAnalysisReportDetails from "./MultiplePairAnalysisReportDetails";
import useMultiplePairAnalysis from "../../hooks/useMultiplePairAnalysis";
import MultiplePairsAnalysisChart from "./MultiplePairAnalysisChart";
import MultiplePairAnalysisDetails from "./MultiplePairAnalysisDetails";

const MultiplePairAnalysisReport = ({
  ticker1,
  ticker2,
  dayAnalysisBeginDt,
  dayAnalysisEndDt,
  numOfDaysInAnalysis,
  minuteAnalysisBeginDt,
  minuteAnalysisEndDt,
  stdDevToOpenTrade,
  stdDevToCloseTrade,
  stdDevToStopLoss,
}) => {
  const { data, status, error } = useMultiplePairAnalysis();

  if (status === "idle") {
    return <div>Please submit a ticker to get the details...</div>;
  } else if (status === "pending") {
    return <div>Request pending...</div>;
  } else if (status === "rejected") {
    return <div>{error}</div>;
  } else if (status === "resolved") {
    return (
      <div>
        <MultiplePairAnalysisReportDetails data={data} />
        <MultiplePairsAnalysisChart data={data.pairAnalysisResults} />
        <MultiplePairAnalysisDetails data={data.pairAnalysisResults} />
      </div>
    );
  }
};

export default MultiplePairAnalysisReport;
