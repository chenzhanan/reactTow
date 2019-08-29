import React from "react"
import login from "./login.module.css"
import ReactRoutreDom,{NavLink} from "react-router-dom"
import axios from "../plugins/axios";
import {connect} from "react-redux"
import actionAsync from "../store/actionAxios"
import { whenMapStateToPropsIsFunction } from "react-redux/es/connect/mapStateToProps";
class Login extends React.Component{
    state={
        apiname:"login",
        nikname:"",
        method:"post",
        username:"",
        password:""
    }
    user=(ev)=>{
        this.state.username=ev.target.value
    }
    nikname=(ev)=>{
        this.state.nikname=ev.target.value
    }
    pass=(ev)=>{
        this.state.password=ev.target.value
    }
    login=()=>{
        // let formData=new FormData()
        // formData.append("username",this.state.username)
        // formData.append("password",this.state.password)
        // axios({
        //     url:"/api/login",
        //     method:"post",
        //     data:formData
        // }).then((res)=>{
        //     // console.log(this)
        //     if(res.data.err==0){
        //         this.props.history.push("home")
        //     }else{
        //         alert("账号或者密码错误")
        //     }
        // })
        let username=this.state.username
        let password=this.state.password
        let apiName=this.state.apiname
        let method=this.state.method
        this.props.login(apiName,method,username,password)

    }
 
    render(){
        return (
            <div>
               <div id={login.main} className="margin"> 
        <h3>欢迎登录飞科商城</h3>
        <h4>
            <span>注册用户登录</span>
            <span>手机动态验证码登录</span>
        </h4>
        <form>
            <span><img src="img/user-id.png"/></span>
            <input type="text" className={login.user} placeholder="账号" onChange={this.user}/>
            <span><img src="img/user-pwd.png"/></span>
            <input type="text" className="pass" placeholder="密码"onChange={this.pass}/>
            <p className={login.btn} onClick={this.login}>登录</p>
        </form>
        <div className={login.cookie}>  
            
                <span className={login.free}> <input type="checkbox" />两周内免登录</span>
                <span> | </span>
                <span className={login.rem}>忘记密码?</span>&nbsp;
                <span>还没有账号?</span>
                <NavLink to="/reg">
                <span className={login.add} >立即注册</span>
                </NavLink>
              
               
            </div>
    </div>
    <div id={login.other}>

        <p>
            <span></span>
            <span>其他方式登录</span>
            <span></span>
        </p>
       
             
    </div>
            </div>
        )
    }
}

const MapStateToProps=(state)=>{
    return {
        user:state.user
    }
}
const MapDispatchToProps=(dispatch,ownProps)=>{
   
    return {
      login:(apiName,method,username,password)=>{
    //  console.log(method)
        // console.log(ownProps)  容器组件上传下来的props 拿不到state
     
        // console.log(username,password)

        actionAsync({apiName,username,password,method}).then((res)=>{
            if(res.data.err==0){
                dispatch({type:"user",payload:JSON.stringify(res.data.data)})
                ownProps.history.push("/home")
              
                window.localStorage.setItem("user", JSON.stringify(res.data.data)  )

            }else{
                alert("账号或者密码错误")
            }

        })
  }
    }
    
 
}
export default connect(MapStateToProps,MapDispatchToProps)(Login)



// const mapStateToProps = (state,ownProps) => ({
//     // 这个必须有一个return 对象{}
//     list:state.list,
//     load:state.loading,
//     fire:state.fire2
//   });
  
//   //blue
//   const mapDispatchToProps = (dispatch,ownProps) => ({
//    loading:(val)=>dispatch({type:'loading',payload:"123"}),
    
// //    fire2:(val)=>dispatch((dispatch)=>{axios({
// //                                 url:"api/fire1"
// //                             }).then((res)=>{
// //                                 console.log(res)
// //                                dispatch({type:"fire2",payload:res.data})                     
// //                             })
// //                         }),
//   });
  
  
//   //容器组件 orange
//   export default connect(mapStateToProps,mapDispatchToProps)(Home)