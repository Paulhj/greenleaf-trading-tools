import { useGetAllPairTradeBlocksQuery } from "../../app/services/pairTradeBlocks";
import PairTradeBlockTable from "./PairTradeBlockTable";

const PairTradeBlocks = () => {
  const { data, error, isError, isLoading, refetch } =
    useGetAllPairTradeBlocksQuery();

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
        <button onClick={() => refetch()}>Refresh Table</button>
        <PairTradeBlockTable data={data.data} />
      </div>
    );
  }
};

export default PairTradeBlocks;
