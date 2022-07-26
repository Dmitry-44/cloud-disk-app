import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import axios from 'axios';

const store = setupStore()

axios.defaults.baseURL='http://localhost:3001'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('CloudDisk-token')}` || '';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

