import React from 'react';

// Routes
import { Router } from 'react-router-dom';
import Routes from './routes';

// Utils
import history from './utils/services/history';


function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
    </>
  );
}

export default App;
