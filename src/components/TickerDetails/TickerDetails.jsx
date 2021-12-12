import { useContext, useEffect } from "react";
import "./TickerDetails.css";
import useAsync from "../../hooks/useAsync";
import { api } from "../../api";
import { TickerCacheContext } from "./TickerDisplayArea";

export const useTickerCache = () => {
  const context = useContext(TickerCacheContext);
  if (!context) {
    throw new Error("useTickerCache must be used in a TickerCacheProvider");
  }

  return context;
};

const fetchTickerDetails = (ticker, delay = 1500) => {
  return api
    .get(`/symbols/${ticker}/company?&apiKey=pkBtRLAYfAcTjJObnfbUQpS74_yfL4Ka`)
    .then(async (response) => {
      //const { response } = await response;
      if (response.status === 200) {
        const details = response?.data;
        if (details) {
          //details.fetchedAt = formatDate(new Date())
          return details;
        } else {
          return Promise.reject(
            new Error(`No company with this ticker "${ticker}"`)
          );
        }
      } else {
        // handle the errors
        const error = {
          message: response?.errors?.map((e) => e.message).join("\n"),
        };
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      if (error.request.status === 404) {
        return Promise.reject(`No company found with symbol ${ticker}`);
      }
      return Promise.reject(error.response.data.error);
    });
};

const TickerDetails = ({ ticker }) => {
  const [cache, dispatch] = useTickerCache();

  const { data, status, error, run, setData } = useAsync({
    status: ticker ? "pending" : "idle",
  });

  useEffect(() => {
    if (!ticker) {
      return;
    } else if (cache[ticker]) {
      setData(cache[ticker]);
    } else {
      run(
        fetchTickerDetails(ticker).then((tickerData) => {
          dispatch({ type: "ADD_TICKER", ticker, tickerData });
          return tickerData;
        })
      );
    }
  }, [cache, dispatch, ticker, run, setData]);

  if (status === "idle") {
    return <div>Please submit a ticker to get the details...</div>;
  } else if (status === "pending") {
    return <div>Request pending...</div>;
  } else if (status === "rejected") {
    return <div>{error}</div>;
  } else if (status === "resolved") {
    return (
      <div class="card">
        <div class="fixed-header">
          <h3>
            {data.name} ({data.symbol})
          </h3>
          <h4>
            {data.hq_address} - {data.hq_country}
          </h4>
        </div>
        <div class="container">
          <ul>
            <li>
              <b>CEO:</b> {data.ceo}
            </li>
            <li>
              <b>Sector:</b> {data.sector}
            </li>
            <li>
              <b>Empoyees:</b> {data.employees}
            </li>
          </ul>
          <p>{data.description}</p>
        </div>
        <div class="fixed-footer">
          <ul>
            {data.tags.map((tag, i) => {
              return <li key={i}>{tag}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }

  throw new Error("This should be impossible");
};

export default TickerDetails;
