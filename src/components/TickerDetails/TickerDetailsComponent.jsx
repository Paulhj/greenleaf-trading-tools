import { useState } from "react";
import TickerDisplayArea from "./TickerDisplayArea";
import TickerDetailsInput from "./TickerDetailsInput";

const TickerDetailsComponent = () => {
  const [ticker, setTicker] = useState("");

  function handleSubmit(newTicker) {
    setTicker(newTicker);
  }

  function handleReset() {
    setTicker("");
  }

  function handleSelect(newTicker) {
    setTicker(newTicker);
  }

  return (
    <div>
      <TickerDetailsInput ticker={ticker} onSubmit={handleSubmit} />
      <hr />
      <TickerDisplayArea
        onSelect={handleSelect}
        onReset={handleReset}
        ticker={ticker}
      />
    </div>
  );
};

export default TickerDetailsComponent;
