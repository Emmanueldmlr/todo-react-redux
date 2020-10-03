import axios from "axios";
class HttpService {
  baseLaravelUrl = "http://localhost:1300/api";
  baseApiUrl = "https://jsonplaceholder.typicode.com";
  
  postData = async (item, url) => {
    const token = await localStorage.getItem("token");
    const requestOption = {
      headers: {
        Authorization: "Bearer ".concat(token),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    return axios({
      method: "post",
      url: this.baseLaravelUrl + "/" + url,
      data: item,
      requestOption,
    })
      .then((res) => res.data)
      .catch((error) => error.response.data);
  };

  getData = async (url) => {
    return axios
      .get(this.baseApiUrl + "/" + url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res)
      .catch((error) => error);
  };

  getLaravelData = async (url) => {
    const token = await localStorage.getItem("token");
    return axios
      .get(this.baseLaravelUrl + "/" + url, {
        headers: {
           Authorization: "Bearer ".concat(token),
          "Content-Type": "application/json",
           Accept: "application/json",
        },
      })
      .then((res) => res.data)
      .catch((error) => error.response.data);
  };

  putData = async (item, url) => {
    const token = await localStorage.getItem("token");
    return axios
      .put(this.baseUrl + "/" + url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: item,
      })
      .then((res) => res.data)
      .catch((error) => error.response.data);
  };
}

export default HttpService;