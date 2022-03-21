import { useState } from "react";
import { useGetPairTradeBlocksByDateRangeQuery } from "../../app/services/pairTradeBlocks";
import PairTradeBlockParams from "./PairTradeBlockParams";
import PairTradeBlockTable from "./PairTradeBlockTable";

const PairTradeBlocks = () => {
  const defaultParams = {
    beginDt: null,
    endDt: null,
  };

  const [params, setParams] = useState(defaultParams);

  const { data, error, isError, isLoading, refetch } =
    useGetPairTradeBlocksByDateRangeQuery(params);

  if (isLoading) {
    return <div>Loading Pair Trade Blocks...</div>;
  } else if (isError) {
    return (
      <div>
        Error Status: {error.status} Msg: {error.data}
      </div>
    );
  } else if (data !== null) {
    return (
      <div>
        <PairTradeBlockParams params={params} setParams={setParams} />
        <button onClick={() => refetch()}>Refresh Table</button>
        <PairTradeBlockTable data={data.data} />
      </div>
    );
  }
};

export default PairTradeBlocks;
