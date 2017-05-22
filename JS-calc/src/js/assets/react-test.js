import React from 'react';
import { render } from 'react-dom';
import { App, SecondApp } from './components/App.js';

render(
  <div>
    <App />
    <SecondApp />
  </div>,
document.getElementById('react-root')
);
