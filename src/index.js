import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-119704837-2');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(
  
  <App/>,
  document.getElementById('root')
);
