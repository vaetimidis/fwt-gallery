import './assets/scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

//* router
import { BrowserRouter as Router } from 'react-router-dom';

//* pages
import App from './pages/App';

//* i18n
import '#/utils/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
