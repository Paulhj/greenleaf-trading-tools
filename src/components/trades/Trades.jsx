import { useGetAllTradesQuery } from "../../app/services/trades";
import TradesTable from "./TradesTable";

const Trades = () => {
  const { data, error, isError, isLoading, refetch } = useGetAllTradesQuery();

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
        <button onClick={() => refetch()}>Refresh Table</button>
        <TradesTable data={data.data} />
      </pre>
    );
  }
};

export default Trades;
