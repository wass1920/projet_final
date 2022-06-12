import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import Store from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
<Provider store={Store}>
<App />
</Provider>

   ,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
