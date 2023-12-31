import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App/App';
import { Provider } from 'react-redux';
import {persistor, store} from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';

import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}> 
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
 