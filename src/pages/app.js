import React,{Component} from "react"
import ReactRouterDom,{Link,Route,NavLink,Switch,Redirect} from "react-router-dom"
import Errorpage from "./error"
import Home from "./home.js"
import Jinhua from "./jinhua"
import Lifa from "./lifa"
import Login from "./login"
import Reg from "./reg"
import Tanfa from "./tanfa"
import Tixu from "./tixu"
import User from "./user"
import Car from "./car"
import Header from "../components/header"
import Foot from "../components/foot"
import Detail from "../pages/detail"
import axios from "../plugins/axios"
import {connect} from 'react-redux';
import AuthRoute from "../guard/auth"
class App extends Component{

   constructor(){
       super()

   }
    state={

    }
   
    render(){
        // console.log(this.props)
        return (
            <div id="App">  
           
                <Header/>
                {/* <Home/> */}
                {/* <Detail/>
                <Login/>
                <Reg/>
                <Car/> */}
              
                {/* <NavLink to="/home">首页</NavLink>
                <NavLink to="/goods">商品</NavLink>
                <NavLink to="/user">用户</NavLink>
                <NavLink to="/login">登录</NavLink>
                <NavLink to="/reg">注册</NavLink> */}
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/car" component={Car}/>
                    <Route path="/Jinhua" to={Jinhua}/>
                    <Route path="/lifa" component={Lifa}/>
                    <Route path="/tixu" component={Tixu}/>
                    
                    <AuthRoute path="/user" component={User}/>
                    <Route path="/user" component={User}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/tanfa" component={Tanfa}/>
                    <Route path="/detail" component={Detail}/>
                    {/* <Redirect exact from="/" to="/home"/> */}
                    <Route component={Errorpage}/>
                   
                </Switch>
                <Foot/>
            </div>
        )
    }
    componentWillDid(){
        this.props.user()
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
const mapStateToProps=(state,ownProps)=>{
    return {}
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        user:dispatch({type:"user",payload:window.localStorage.getItem("user")})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)