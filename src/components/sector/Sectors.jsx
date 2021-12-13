import { useGetSectorsQuery } from "../../app/services/sectors";
import SectorsTable from "./SectorsTable";

const Sectors = () => {
  const { data, error, isError, isLoading } = useGetSectorsQuery();

  if (isLoading) {
    return <div>Loading Sectors...</div>;
  } else if (isError) {
    return (
      <div>
        Error Status: {error.status} Msg: {error.data}
      </div>
    );
  } else if (data !== null) {
    return (
      <div>
        <SectorsTable data={data.data} />
      </div>
    );
  }
};

export default Sectors;
