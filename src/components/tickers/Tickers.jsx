import {
  useGetAllTickersQuery,
  useUpdateTickerMutation,
} from "../../app/services/tickers";
import TickersTable from "./TickersTable";

const Tickers = ({ sectorId }) => {
  const { data, error, isError, isLoading } = useGetAllTickersQuery(sectorId);
  const [updateTicker] = useUpdateTickerMutation();

  const setAllExcludeFromTradingToFalse = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Do you want to reset all to false?")) {
      data.data.forEach((item) => {
        if (item.excludeFromTrading) {
          updateTicker({
            id: item.id,
            name: "",
            excludeFromTrading: false,
          });
        }
      });
    }
  };

  if (isLoading) {
    return <div>Loading Tickers...</div>;
  } else if (isError) {
    return (
      <div>
        Error Status: {error.status} Msg: {error.data}
      </div>
    );
  } else if (data !== null) {
    return (
      <div>
        <button onClick={() => setAllExcludeFromTradingToFalse()}>
          Reset All To False
        </button>
        <TickersTable data={data.data} />
      </div>
    );
  }
};

export default Tickers;
