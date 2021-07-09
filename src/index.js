import React from 'react'
import ReactDom from 'react-dom';
import App from "./App";
import '../src/assets/css/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

const app = document.querySelector('#cotizador-app');

ReactDom.render(<App />,app)