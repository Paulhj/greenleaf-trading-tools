import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:44372/api",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const apigreenleaf = axios.create({
  //baseURL: "https://localhost:5001/api",
  baseURL: "https://pairtradingapi.azurewebsites.net/api",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});
