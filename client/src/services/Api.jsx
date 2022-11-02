import axios from 'axios';

const api = axios.create({
    // baseURL: process.env.REACT_APP_API_URL
    baseURL: 'http://127.0.0.1:5000' 
  });

  export { api }