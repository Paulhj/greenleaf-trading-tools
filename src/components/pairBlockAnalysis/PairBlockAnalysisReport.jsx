//import usePairBlockAnalysis from "../../hooks/usePairBlockAnalysis";
import usePairBlockAnalysisV2 from "../../hooks/usePairBlockAnalysisV2";
import PairAnalysisParams from "../pairAnalysis/PairAnalysisParams";
import PairBlockAnalysisTable from "./PairBlockAnalysisTable";

const PairBlockAnalysisReport = ({ selectedPairBlockId }) => {
  //const { data, status, error } = usePairBlockAnalysis(selectedPairBlockId);
  const { status, data, error, isFetching } =
    usePairBlockAnalysisV2(selectedPairBlockId);

  return (
    <div>
      {!selectedPairBlockId || status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <PairAnalysisParams />
          <hr />
          <PairBlockAnalysisTable analysisReport={data.analysisReport} />
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );

  /*
  if (status === "idle") {
    return (
      <div>Please verify the Pair Analysis Parameters and Run Report...</div>
    );
  } else if (status === "pending") {
    return <div>Request pending...</div>;
  } else if (status === "rejected") {
    return <div>{error}</div>;
  } else if (status === "resolved") {
    return (
      <div>
        <PairAnalysisParams />
        <hr />
        <PairBlockAnalysisTable analysisReport={data.analysisReport} />
      </div>
    );
  }*/
};

export default PairBlockAnalysisReport;
