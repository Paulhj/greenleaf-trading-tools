import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import CorrMatrixParams from "../components/corrMatrix/CorrMatrixParams";
import CorrMatrixReport from "../components/corrMatrix/CorrMatrixReport";
import MultiplePairAnalysisReport from "../components/pairAnalysis/MultiplePairAnalysisReport";
import PairAnalysisParams from "../components/pairAnalysis/PairAnalysisParams";
import PairAnalysisReport from "../components/pairAnalysis/PairAnalysisReport";
import PairBlockReport from "../components/pairBlocks/PairBlockReport";
import PairTradeBlocks from "../components/pairTradeBlocks/PairTradeBlocks";
import Sectors from "../components/sector/Sectors";
import TickerDetailsComponent from "../components/TickerDetails/TickerDetailsComponent";
import {
  ReportParamsProvider,
  useReportParams,
} from "../hooks/useReportParams";
import { selectIsAuthenticated } from "../components/auth/authSlice";
import Login from "../components/auth/Login";
import PairTradeBlockAnalysis from "../components/pairTradeBlockAnalysis/PairTradeBlockAnalysis";

const MainRouter = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Sectors</Link>
          </li>
          <li>
            <Link to="/pairtradeblocks">Pair Trade Blocks</Link>
          </li>
        </ul>
        <hr />

        <ReportParamsProvider>
          <Switch>
            <Route exact path="/">
              <Sectors />
            </Route>
            <Route path="/corrMatrixReport/:sectorId">
              <PairAnalysisParams />
              <hr />
              <CorrMatrixReportWrapper />
            </Route>
            <Route path="/pairanalysisreport/:s1/:s2/:pairTradeBlockId">
              <PairAnalysisReportWrapper />
            </Route>
            <Route path="/multiplepairanalysisreport">
              <MultiplePairAnalysisReportWrapper />
            </Route>
            <Route path="/pairblockanalysisreport">
              <PairBlockReport />
            </Route>
            <Route path="/pairtradeblocks">
              <CorrMatrixParams />
              <hr />
              <PairTradeBlocksWrapper />
            </Route>
            <Route path="/pairtradeblockanalysis/:pairTradeBlockId">
              <PairTradeBlockAnalysisWrapper />
            </Route>
            <Route path="/tickerdetails">
              <TickerDetailsComponentWrapper />
            </Route>
          </Switch>
        </ReportParamsProvider>
      </div>
    </Router>
  );
};

function CorrMatrixReportWrapper() {
  let { sectorId } = useParams();
  const [state] = useReportParams();

  return (
    <CorrMatrixReport
      sectorId={sectorId}
      closeDataFromDt={state.closeDataFromDt}
      closeDataToDt={state.closeDataToDt}
      coefficientCutoff={state.coefficientCutoff}
    />
  );
}

function TickerDetailsComponentWrapper() {
  return <TickerDetailsComponent />;
}

function PairAnalysisReportWrapper() {
  let { s1, s2, pairTradeBlockId } = useParams();

  return (
    <PairAnalysisReport
      ticker1={s1}
      ticker2={s2}
      pairTradeBlockId={pairTradeBlockId}
    />
  );
}

function MultiplePairAnalysisReportWrapper() {
  return <MultiplePairAnalysisReport />;
}

function PairTradeBlocksWrapper() {
  return <PairTradeBlocks />;
}

function PairTradeBlockAnalysisWrapper() {
  let { pairTradeBlockId } = useParams();
  return <PairTradeBlockAnalysis pairTradeBlockId={pairTradeBlockId} />;
}

export default MainRouter;
