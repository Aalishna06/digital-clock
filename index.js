import React from 'react';
import ReactDOM from 'react-dom';
import DigitalClock from './App';  // We renamed App.js to DigitalClock component

ReactDOM.render(
  <React.StrictMode>
    <DigitalClock />
  </React.StrictMode>,
  document.getElementById('root')
);

