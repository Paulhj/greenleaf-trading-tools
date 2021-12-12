import React, { useState } from "react";
import PairTradeBlockHeader from "./PairTradeBlockHeader";
import PairTradeBlockAnalysisParams from "./PairTradeBlockAnalysisParams";
import PairTradeBlockAnalysisHeader from "./PairTradeBlockAnalysisHeader";
import PairBlockAnalysisTable from "../pairBlockAnalysis/PairBlockAnalysisTable";
import {
  useLazyRunPairTradeBlockAnalysisQuery,
  useGetPairTradeBlockQuery,
} from "../../app/services/pairTradeBlockAnalysis";
import { useReportParams } from "../../hooks/useReportParams";

const PairTradeBlockAnalysis = ({ pairTradeBlockId }) => {
  const { data } = useGetPairTradeBlockQuery(pairTradeBlockId);
  const [trigger, result] = useLazyRunPairTradeBlockAnalysisQuery();
  const [state] = useReportParams();

  const defaultParams = {
    pairTradeBlockId: pairTradeBlockId,
    dayAnalysisBeginDt: state.dayAnalysisBeginDt,
    dayAnalysisEndDt: state.dayAnalysisEndDt,
    numOfDaysInAnalysis: state.numOfDaysInAnalysis,
    minuteAnalysisBeginDt: state.minuteAnalysisBeginDt,
    minuteAnalysisEndDt: state.minuteAnalysisEndDt,
    stdDevToOpenTrade: state.stdDevToOpenTrade,
    stdDevToCloseTrade: state.stdDevToCloseTrade,
    stdDevToStopLoss: state.stdDevToStopLoss,
  };

  const [params, setParams] = useState({ ...defaultParams });

  return (
    <div>
      {data !== undefined && <PairTradeBlockHeader data={data.data} />}
      <PairTradeBlockAnalysisParams
        params={params}
        setParams={setParams}
        refetch={trigger}
      />
      {(result.isLoading || result.isFetching) && (
        <div>Loading Pair Trade Blocks...Todd be patient!!!</div>
      )}
      {result.isError && (
        <div>
          <h3>{result.error.data.error.message}</h3>
          <ul>
            {Object.values(result.error.data.data).map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </div>
      )}
      {result.isSuccess && (
        <div>
          <PairTradeBlockAnalysisHeader data={result.data} />
          <PairBlockAnalysisTable
            analysisReport={result.data.analysisReport}
            pairTradeBlockId={pairTradeBlockId}
          />
        </div>
      )}
    </div>
  );
};

export default PairTradeBlockAnalysis;
