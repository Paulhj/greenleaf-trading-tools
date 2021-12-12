import React, { useState } from "react";
import PairAnalysisParams from "../pairAnalysis/PairAnalysisParams";
import PairBlockAnalysisReport from "../pairBlockAnalysis/PairBlockAnalysisReport";

const PairBlockReport = () => {
  const tempPairBlockId = "e330a617-da2d-4163-84e7-aaed20cf4457";
  const [selectedPairBlockId, setSelectedPairBlockId] = useState("");

  if (!selectedPairBlockId) {
    return (
      <div>
        <PairAnalysisParams />
        <button onClick={() => setSelectedPairBlockId(tempPairBlockId)}>
          Run Pair Block Analysis Report
        </button>
      </div>
    );
  }

  return (
    <div>
      <PairBlockAnalysisReport selectedPairBlockId={selectedPairBlockId} />
    </div>
  );
};

export default PairBlockReport;
