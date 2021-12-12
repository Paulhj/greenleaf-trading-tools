import { useEffect } from "react";
import { apigreenleaf } from "../../api";
import useAsync from "../../hooks/useAsync";

const fetchSectorCorrMatrixAnalysisDetailsV2 = (
  sectorId,
  closeDataFromDt,
  closeDataToDt,
  coefficientCutoff,
  delay = 1500
) => {
  const options = {
    method: "get",
    url: "/CorrMatrixAnalysis",
    params: {
      sectorId: sectorId,
      closeDataFromDt: closeDataFromDt,
      closeDataToDt: closeDataToDt,
      coefficientCutoff: coefficientCutoff,
    },
    transformRequest: [
      (data, headers) => {
        return JSON.stringify(data);
      },
    ],
  };

  return apigreenleaf(options)
    .then(async (response) => {
      //const { response } = await response;
      if (response.status === 200) {
        const details = response?.data;
        if (details.succeeded) {
          //details.fetchedAt = formatDate(new Date())
          return details.data;
        } else {
          return Promise.reject(response?.data.error);
          //return Promise.reject(
          //  new Error(`No sector with this id "${sectorId}"`)
          //);
        }
      } else {
        // handle the errors
        const error = {
          message: response?.errors?.map((e) => e.message).join("\n"),
        };
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      if (error.request.status === 404) {
        return Promise.reject(`No sector found with id ${sectorId}`);
      }
      return Promise.reject(error.response.data.error);
    });
};

const useCorrMatrixAnalysis = (
  sectorId,
  closeDataFromDt,
  closeDataToDt,
  coefficientCutoff
) => {
  const { data, status, error, run } = useAsync({
    status: sectorId ? "pending" : "idle",
    data: {
      corrMatrixResult: {
        columns: [],
        rows: [],
        matches: [],
      },
      dailyCloseDataResult: {
        columns: [],
        rows: [],
      },
    },
  });

  useEffect(() => {
    if (!sectorId) {
      return;
    } else {
      run(
        fetchSectorCorrMatrixAnalysisDetailsV2(
          sectorId,
          closeDataFromDt,
          closeDataToDt,
          coefficientCutoff
        ).then((analysisData) => {
          return analysisData;
        })
      );
    }
  }, [closeDataFromDt, closeDataToDt, coefficientCutoff, run, sectorId]);

  return {
    corrMatrixDetails: {
      sectorName: data.sectorName,
      analysisRunDt: data.analysisRunDt,
      closeDataFromDt: data.closeDataFromDt,
      closeDataToDt: data.closeDataToDt,
      coefficientCutoff: data.coefficientCutoff,
    },
    corrMatrixResultsColumns: data?.corrMatrixResult.columns,
    corrMatrixResultsRows: data?.corrMatrixResult.rows,
    corrMatrixResultsMatches: data?.corrMatrixResult.matches,
    dailyCloseDataColumns: data?.dailyCloseDataResult.columns,
    dailyCloseDataRows: data?.dailyCloseDataResult.rows,
    status,
    error,
  };
};

export default useCorrMatrixAnalysis;
