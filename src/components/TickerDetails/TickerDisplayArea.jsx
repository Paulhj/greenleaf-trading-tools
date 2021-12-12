import { useReducer, createContext } from "react";
import TickerDetails, { useTickerCache } from "./TickerDetails";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../ErrorFallback";

export const TickerCacheContext = createContext();

const tickerCacheReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TICKER": {
      return { ...state, [action.ticker]: action.tickerData };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TickerCacheProvider = (props) => {
  const [cache, dispatch] = useReducer(tickerCacheReducer, {});
  const value = [cache, dispatch];
  return <TickerCacheContext.Provider value={value} {...props} />;
};

function PreviousTicker({ onSelect }) {
  const [cache] = useTickerCache();
  return (
    <div>
      Previous Ticker
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {Object.keys(cache).map((ticker) => (
          <li key={ticker} style={{ margin: "4px auto" }}>
            <button style={{ width: "100%" }} onClick={() => onSelect(ticker)}>
              {ticker}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const TickerDisplayArea = ({ ticker, onSelect, onReset }) => {
  return (
    <TickerCacheProvider>
      <PreviousTicker onSelect={onSelect} />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={onReset}
        resetKeys={[ticker]}
      >
        <TickerDetails ticker={ticker} />
      </ErrorBoundary>
    </TickerCacheProvider>
  );
};

export default TickerDisplayArea;
