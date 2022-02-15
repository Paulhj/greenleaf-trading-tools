import React, { useState } from "react";
import { useGetTradesByDateRangeQuery } from "../../app/services/trades";
import TradesParams from "./TradesParams";
import TradesTable from "./TradesTable";
import TradesSummaryTable from "./TradesSummaryTable";

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

  const [inputs, setInputs] = useState(defaultFilter);

  const { data, error, isError, isLoading, refetch } =
    useGetTradesByDateRangeQuery(inputs);

  if (isLoading) {
    return <div>Loading Trades...</div>;
  } else if (isError) {
    return (
      <div>
        Error Status: {error.status} Msg: {error.data}
      </div>
    );
  } else if (data !== null) {
    return (
      <pre
        style={{
          fontSize: "12px",
        }}
      >
        <TradesParams inputs={inputs} setInputs={setInputs} />
        <hr />
        <button onClick={() => refetch()}>Refresh Table</button>
        <TradesSummaryTable data={data.data} />
        <TradesTable data={data.data.trades} />
      </pre>
    );
  }
};

export default Trades;
