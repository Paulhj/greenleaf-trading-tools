const AnalysisParams = ({ analysisInputs, setAnalysisInputs }) => {
  function handleChange(e) {
    const { name, value } = e.target;
    setAnalysisInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  return (
    <div>
      <b>Analysis Parameters</b>
      <div>
        <div>
          <label htmlFor="dayAnalysisBeginDt-input">
            Day Analysis Begin Date:{" "}
          </label>
          <input
            type="date"
            className="dayAnalysisBeginDt-input"
            id="dayAnalysisBeginDt-input"
            name="dayAnalysisBeginDt"
            value={analysisInputs.dayAnalysisBeginDt}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="dayAnalysisEndDt-input">
            Day Analysis End Date:{" "}
          </label>
          <input
            type="date"
            className="dayAnalysisEndDt-input"
            id="dayAnalysisEndDt-input"
            name="dayAnalysisEndDt"
            value={analysisInputs.dayAnalysisEndDt}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="numOfDaysInAnalysis-input">
            Num Of Days In Analysis:{" "}
          </label>
          <input
            className="numOfDaysInAnalysis-input"
            id="numOfDaysInAnalysis-input"
            name="numOfDaysInAnalysis"
            placeholder="5"
            value={analysisInputs.numOfDaysInAnalysis}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="minuteAnalysisBeginDt-input">
            Minute Analysis Begin Date:{" "}
          </label>
          <input
            type="date"
            className="minuteAnalysisBeginDt-input"
            id="minuteAnalysisBeginDt-input"
            name="minuteAnalysisBeginDt"
            value={analysisInputs.minuteAnalysisBeginDt}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="minuteAnalysisEndDt-input">
            Minute Analysis End Date:{" "}
          </label>
          <input
            type="date"
            className="minuteAnalysisEndDt-input"
            id="minuteAnalysisEndDt-input"
            name="minuteAnalysisEndDt"
            value={analysisInputs.minuteAnalysisEndDt}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="stdDevToOpenTrade-input">
            Std. Dev. To Open Trade:{" "}
          </label>
          <input
            className="stdDevToOpenTrade-input"
            id="stdDevToOpenTrade-input"
            name="stdDevToOpenTrade"
            placeholder="2"
            value={analysisInputs.stdDevToOpenTrade}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="stdDevToCloseTrade-input">
            Std. Dev. To Close Trade:{" "}
          </label>
          <input
            className="stdDevToCloseTrade-input"
            id="stdDevToCloseTrade-input"
            name="stdDevToCloseTrade"
            placeholder="1"
            value={analysisInputs.stdDevToCloseTrade}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="stdDevToStopLoss-input">
            Std. Dev. To Stop Loss:{" "}
          </label>
          <input
            className="stdDevToStopLoss-input"
            id="stdDevToStopLoss-input"
            name="stdDevToStopLoss"
            placeholder="3"
            value={analysisInputs.stdDevToStopLoss}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalysisParams;
