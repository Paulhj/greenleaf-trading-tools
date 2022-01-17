import { useGetTickersBySectorIdQuery } from "../../app/services/tickers";
import TickersTable from "./TickersTable";

const SectorTickers = ({ sectorId }) => {
  const { data, error, isError, isLoading } =
    useGetTickersBySectorIdQuery(sectorId);

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
        <TickersTable data={data.data} />
      </div>
    );
  }
};

export default SectorTickers;
