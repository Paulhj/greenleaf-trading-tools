import { useGetAllTradesQuery } from "../../app/services/trades";
import TradesTable from "./TradesTable";

const Trades = () => {
  const { data, error, isError, isLoading } = useGetAllTradesQuery();

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
        <TradesTable data={data.data} />
      </pre>
    );
  }
};

export default Trades;
