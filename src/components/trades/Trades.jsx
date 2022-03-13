import React, { useState } from "react";
import { useGetTradesByDateRangeQuery } from "../../app/services/trades";
import TradesParams from "./TradesParams";
import TradesTable from "./TradesTable";
import TradesSummaryTable from "./TradesSummaryTable";
import AnalysisParams from "./AnalysisParams";
import TradeAnalysisChart from "./TradeAnalysisChart";
import "./trades.css";

const Trades = () => {
  function getCurrentDate(separator = "-") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  const defaultFilter = {
    beginDate: getCurrentDate(),
    endDate: getCurrentDate(),
  };

  const defaultAnalysisParams = {
    dayAnalysisBeginDt: getCurrentDate(),
    dayAnalysisEndDt: getCurrentDate(),
    numOfDaysInAnalysis: 5,
    minuteAnalysisBeginDt: getCurrentDate(),
    minuteAnalysisEndDt: getCurrentDate(),
    stdDevToOpenTrade: 2,
    stdDevToCloseTrade: 3,
    stdDevToStopLoss: 1,
  };

  const [inputs, setInputs] = useState(defaultFilter);
  const [analysisInputs, setAnalysisInputs] = useState(defaultAnalysisParams);

  const { data, error, isError, isLoading, refetch } =
    useGetTradesByDateRangeQuery(inputs, {
      pollingInterval: 50000, // 50000 ms
    });

  if (isLoading) {
    return <div>Loading Trades...</div>;
  } else if (isError) {
    return (
      <div>
        Error Status: {error.status} Msg: {error.data.error.message}
      </div>
    );
  } else if (data !== null) {
    return (
      <pre
        style={{
          fontSize: "12px",
        }}
      >
        <div className="rowC">
          <div className="tradeparams">
            <TradesParams inputs={inputs} setInputs={setInputs} />
          </div>
          <AnalysisParams
            analysisInputs={analysisInputs}
            setAnalysisInputs={setAnalysisInputs}
          />
        </div>
        <hr />
        <button onClick={() => refetch()}>Refresh Table</button>
        <TradesSummaryTable data={data.data} />
        <TradesTable data={data.data.trades} analysisInputs={analysisInputs} />
      </pre>
    );
  }
};

export default Trades;
