const PairTradeBlockParams = ({ params, setParams }) => {
  function handleChange(e) {
    const { name, value } = e.target;
    setParams((inputs) => ({ ...inputs, [name]: value }));
  }

  return (
    <div>
      <b>Search Parameters</b>
      <div>
        <div>
          <label htmlFor="beginDt-input">Begin Date: </label>
          <input
            type="date"
            className="beginDt-input"
            id="beginDt-input"
            name="beginDt"
            value={params.beginDt}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="endDt-input">End Date: </label>
          <input
            type="date"
            className="endDt-input"
            id="endDt-input"
            name="endDt"
            value={params.endDt}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default PairTradeBlockParams;
