import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './pages/Layout';

// const app = $('#app');
const app = document.getElementById('app');

ReactDOM.render(
  <div>
    <Layout />
  </div>
, app);
