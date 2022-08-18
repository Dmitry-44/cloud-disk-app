import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import axios, { AxiosRequestConfig } from 'axios';
import { config } from 'process';

const store = setupStore()
const API_URL='http://localhost:3001';
axios.defaults.baseURL=API_URL
axios.interceptors.request.use((config: AxiosRequestConfig):AxiosRequestConfig => {
  config.headers!.Authorization=`Bearer ${localStorage.getItem('CloudDisk-token')}`;
  return config
})
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('CloudDisk-token')}` || '';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

