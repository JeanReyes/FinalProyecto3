import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// import Counter from './Counter';
// import App from './App';
import './index.css';
import Lienzo from './lienzo';

// logica de las rutas
const direcciones  =(
  <Router history={browserHistory}>
      <Route path="/" component={Lienzo} />
    </Router>
);

ReactDOM.render(
 direcciones,
  document.getElementById('root')
);
