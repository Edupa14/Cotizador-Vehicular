import React from 'react'
import ReactDom from 'react-dom';
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';

const app = document.querySelector('#cotizador-app');

ReactDom.render(<App />,app)