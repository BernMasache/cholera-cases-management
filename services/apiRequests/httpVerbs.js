import axios from "axios";
const headers = new Headers({
  Authorization: `Basic ${btoa("admin:district")}`,
  "Content-type": "application/json",
  Accept: "application/json",
});
export default class HttpVerbs {
  get = async (url) => {
    try {
      const response = await axios.get(url, {
        mode: "cors",
        credentials: "include",
        headers,
      });
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
