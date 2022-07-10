import './assets/scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

//* router
import { BrowserRouter as Router } from 'react-router-dom';

//* i18n
import '#/utils/i18n';

//* redux
import { Provider } from 'react-redux';
import { store } from './store/store';

//* pages
import App from './pages/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
