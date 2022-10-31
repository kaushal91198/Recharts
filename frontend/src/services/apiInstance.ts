import axiosClient from "./api";

export const getData = async (url: string) => {
  try {
    const res = await axiosClient.get(url);
    return res;
  } catch (error: any) {
    console.log(error.res);
    return error.res;
  }
};

export const postData = async (url: string, data: any) => {
  try {
    const res = await axiosClient.post(url, data);
    return res;
  } catch (error: any) {
    console.log(error.res);
    return error.res;
  }
};
