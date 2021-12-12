import { useEffect } from "react";
import { api } from "../api";
import useAsync from "./useAsync";

const fetchSectorsData = (delay = 1500) => {
  const options = {
    method: "get",
    url: "/Sectors",
    params: {},
    transformRequest: [
      (data, headers) => {
        return JSON.stringify(data);
      },
    ],
  };

  return api(options)
    .then(async (response) => {
      //const { response } = await response;
      if (response.status === 200) {
        const details = response?.data;
        if (details) {
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
        return Promise.reject(`No sectors found`);
      }
      return Promise.reject(error.response.data.error);
    });
};

const useSectors = () => {
  const { data, status, error, run } = useAsync({
    status: "pending",
    data: null,
  });

  useEffect(() => {
    run(
      fetchSectorsData().then((sectorsData) => {
        return sectorsData;
      })
    );
  }, [run]);

  return {
    data,
    status,
    error,
  };
};

export default useSectors;
