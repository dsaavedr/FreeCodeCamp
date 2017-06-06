import React from 'react';
import { render } from 'react-dom';
import { App, SecondApp } from './components/App.js';

render(
<App />,
document.getElementById('react-root')
);

// evaluate(1,2,"div") == .5 && evaluate(1, 2, "-") == -1 ? console.log("API works!!") : console.log("API broken");
