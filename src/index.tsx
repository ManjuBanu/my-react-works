import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MyForm} from './form-table';
import { UpdateTime } from './virtual_dom';
import {Mounting} from './mounting';
import {ApiAxios} from './apicall';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import NotFound from './notFoundPage';
import styled from 'styled-components';
import {Routing}  from './routing';


ReactDOM.render(
  <React.Fragment>
  <App />
  <Routing/>
  {/* <MyForm/>
  <UpdateTime/>
 <Mounting/> 
<ApiAxios/> */}
</React.Fragment>,
document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
