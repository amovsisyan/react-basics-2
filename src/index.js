import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.common['Content-type'] = 'application/json';

axios.interceptors.request.use((requestConfig) => {
    console.log(233, requestConfig);
    return requestConfig;
}, (error) => {
    console.log(error, 'Hereeeee');
    return Promise.reject(error)
});

axios.interceptors.response.use((responseConfig) => {
    console.log(400, responseConfig);
    return responseConfig;
}, (error) => {
    console.log(error, 'Hereeeee');
    return Promise.reject(error)
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
