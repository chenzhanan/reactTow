import React from 'react';

import {Route, Redirect} from 'react-router-dom'

import connect from "react-redux/es/connect/connect";

const Auth =  ({component:Component, user, ...rest})=>{
  console.log(user)
  return (  <Route {...rest} render={(rest)=>(
      
    user ?
      <Component {...rest} data={user.data} /> :
      <Redirect to="/login"  />
  )}/>)
};
  const initMapStateToProps=state=>({
    user:state.user
  });
  
  
  export default connect(
    initMapStateToProps,
    null
  )(Auth)