import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.truyenvui.online/',
});

instance.interceptors.request.use(
  (config) => {
    // You can modify the request config here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // You can modify the response here if needed
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ({ app }, inject) => {
  // Inject the instance to the context as "$axiosInstance"
  inject('axiosInstance', instance);
};
