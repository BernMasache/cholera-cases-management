import axios from "axios";

export default class HttpVerbs {
  get = async (url, headers) => {
    try {
      const response = await axios.get(url, headers);
      return response;
    } catch (e) {
      return e;
    }
  };
  getByParams = async (url, params, headers) => {
    try {
      const response = await axios.get(`${url}/${params}`, {
        headers: headers,
      });
      return response;
    } catch (e) {
      return e;
    }
  };
  post = async (url, body, headers) => {
    try {
      const response = await axios.post(`${url}`, body, {
        headers: headers,
      });
      return response;
    } catch (e) {
      return e;
    }
  };
  update = async (url, params, body, headers) => {
    try {
      const response = await axios.patch(`${url}/${params}`, body, {
        headers: headers,
      });
      return response;
    } catch (e) {
      return e;
    }
  };

  delete = async (url, params, headers) => {
    try {
      const response = await axios.patch(`${url}/${params}`, {
        headers: headers,
      });
      return response;
    } catch (e) {
      return e;
    }
  };
}
