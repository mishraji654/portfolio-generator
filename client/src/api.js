import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5002', // backend port
  headers: { 'Content-Type': 'application/json' }
});

export default api;
