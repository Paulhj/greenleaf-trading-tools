import { useState } from "react"

const TickerDetailsInput = ({
    ticker: externalTicker,
    initialTicker = externalTicker || '',
    onSubmit,
}) => {
    const [ticker, setTicker] = useState(initialTicker)

    function handleChange(e) {
        setTicker(e.target.value)
      }

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(ticker)
      }
    
      function handleSelect(newTicker) {
        setTicker(newTicker)
        onSubmit(newTicker)
      }

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="ticker-input">Ticker</label>
          <small>
            Try{' '}
            <button
              className="invisible-button"
              type="button"
              onClick={() => handleSelect('AAPL')}
            >
              "AAPL"
            </button>
            {', '}
            <button
              className="invisible-button"
              type="button"
              onClick={() => handleSelect('MSFT')}
            >
              "MSFT"
            </button>
            {', or '}
            <button
              className="invisible-button"
              type="button"
              onClick={() => handleSelect('IBM')}
            >
              "IBM"
            </button>
          </small>
          <div>
            <input
              className="ticker-input"
              id="ticker-input"
              name="ticker"
              placeholder="Ticker Symbol..."
              value={ticker}
              onChange={handleChange}
            />
            <button type="submit" disabled={!ticker.length}>
              Submit
            </button>
          </div>
        </form>
      )
}

export default TickerDetailsInput;