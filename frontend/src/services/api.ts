import axios from "axios";
const axiosClient = axios.create({
  baseURL: `http://localhost:3001/api/v1/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

axiosClient.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    let res = error.response;
    if (res.status === 401) {
      //do something
    }
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.request.use(
  function (request: any) {
    return request;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

export default axiosClient;
