import { useContext } from "react";

const useTickerCache = ({ tickerSymbol }) => {
  const context = useContext(null);
  if (!context) {
    throw new Error("useTickerCache must be used in a TickerCacheProvider");
  }

  return context;
};

export default useTickerCache;
