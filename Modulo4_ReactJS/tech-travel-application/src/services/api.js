import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6285864496bccbf32d6425d1.mockapi.io/',
});

export default api;
