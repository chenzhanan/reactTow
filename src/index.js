import React,{Component} from "react"
import ReactDom from "react-dom"

import App from "./pages/app"
import store from "./store"
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Provider>
  
  ,
  document.getElementById('root')
);