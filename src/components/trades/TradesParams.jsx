import React from "react";

const TradesParams = ({ inputs, setInputs }) => {
  const { beginDate, endDate } = inputs;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  return (
    <div
      style={{
        width: "350px",
        padding: "1rem",
        border: "1px solid black",
      }}
    >
      <b>Trades Filter Parameters</b>
      <div>
        <label htmlFor="beginDate-input">Filter Begin Date: </label>
        <input
          type="date"
          className="beginDate-input"
          id="beginDate-input"
          name="beginDate"
          placeholder="YYYY-MM-DD"
          value={beginDate}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="endDate-input">Filter End Date: </label>
        <input
          type="date"
          className="endDate-input"
          id="endDate-input"
          name="endDate"
          value={endDate}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default TradesParams;
