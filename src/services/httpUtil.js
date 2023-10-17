import axios from "axios";

const getHeaders =  (headers) => {
  const token = process.env.REACT_APP_AUTH_TOKEN;
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token,
    ...headers,
  };
};

let BASE_URL = `https://mapi.harmoney.dev`;
axios.defaults.baseURL = BASE_URL;

export const httpClient = {
  get:  (path, params = {}, _headers = {}, isAuth = true) => {
    let headers =  getHeaders(_headers);
    console.log(headers,'headers');
    let options = { params, headers /* validateStatus: () => true */ };
    const res =  axios.get(path, options);
    return res;
  },
  post: async (path, data, params = {}, _headers = {}, isAuth = true) => {
    let headers=  getHeaders(_headers);
    
    const options = { params, headers /* validateStatus: () => true */ };
    const res = await axios.post(path, data, options);
    return res;
  },
  patch: async (path, data, params = {}, _headers = {}, isAuth = true) => {
    let headers= getHeaders(_headers);
   
    const options = { params, headers /* validateStatus: () => true */ };
    const res = await axios.patch(path, data, options);
    return res;
  },
  put: async (path, data, params = {}, _headers = {}, isAuth = true) => {
    let headers=getHeaders(_headers);
   
    const options = { params, headers /* validateStatus: () => true */ };
    const res = await axios.put(path, data, options);
    return res;
  },
  delete: async (path, data, params = {}, _headers = {}, isAuth = true) => {
    let headers=getHeaders(_headers);
    
    const options = { data, params, headers };
    const res = await axios.delete(path, options);
    return res;
  },
};
