import { useReducer } from "react";

const tickerCacheReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TICKER": {
      return { ...state, [action.tickerSymbol]: action.tickerData };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TickerCacheProvider = (props) => {
  const [cache, dispatch] = useReducer(tickerCacheReducer, {});
  const value = [cache, dispatch];
  return <TickerCacheProvider.Provider value={value} {...props} />;
};

export default TickerCacheProvider;
