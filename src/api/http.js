import axios from "axios";

axios.interceptors.request.use(
  config => {
    const token = "";
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error);
    return Promise.resolve(error.response);
  }
);

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.timeout = 10000;

// 统一检查返回状态值
function checkStatus(response) {
  console.log(response);
  if (response && (response.status === 200 || response.status === 304) && response.data.code !== -1) {
    return response.data;
  } else {
    
    if (response.status) {
      
      return response.data;
    }
  }
}
// get请求
function getRequest(url, params, type = false) {
  return new Promise(resolve => {
    axios.get(url, params).then(response => {
      resolve(checkStatus(response));
    });
  });
}
// post请求
function postRequest(url, params, type = false) {
  return new Promise(resolve => {
    axios.post(url, params).then(response => {
      resolve(checkStatus(response));
    });
  });
}

export default {
  getRequest,
  postRequest
};
