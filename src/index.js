import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import reportWebVitals from './reportWebVitals';
 import AppRouter from './components/AppRouter';
import 'react-toastify/dist/ReactToastify.css'
import {Provider} from 'react-redux'
import store from './redux/store/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
     <Provider store={store}>
    <AppRouter/>
    </Provider>
  </div>
);

reportWebVitals();
