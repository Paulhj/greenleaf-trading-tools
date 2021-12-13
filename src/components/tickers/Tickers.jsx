import SectorsTable from "../sector/SectorsTable";

const Tickers = ({ data, sectorName }) => {
  return <SectorsTable data={data} sectorName={sectorName} />;
};

export default Tickers;
