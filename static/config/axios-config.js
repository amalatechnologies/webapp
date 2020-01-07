import axios from '@nuxtjs/axios';
import REMOTE_API_BASE from './http-config';

const instance = axios.create({
  baseURL: REMOTE_API_BASE,
  timeout: 10000,
  headers: {
    Authorization: 'Token ' + localStorage.getItem('qAccessToken')
  }
});
export default instance;
