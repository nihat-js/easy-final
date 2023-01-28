import React from 'react';
import ReactDOM from 'react-dom/client';

import Provider from './context/mainContext';

import IndexRouter from './routers/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <IndexRouter />
    </Provider>
  </React.StrictMode>
);
