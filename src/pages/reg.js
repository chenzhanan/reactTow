import React from "react"
import reg from "./reg.module.css"
import axios from "../plugins/axios";
export default class Reg extends React.Component{

    state={
        username:"",
        password:"",
        name:""
    }

    reg=()=>{
        let formData = new FormData()
        formData.append("username",this.state.username)
        formData.append("password",this.state.password)
        formData.append("nikename",this.state.name)


  
        axios({
            url:"/api/reg",
            method: 'post',
            data:formData
        }).then((res)=>{
            // console.log(res.data)
           if(res.data.err==0){
                this.props.history.push("login")
           }else{
               alert("账号名已存在")
           }
        })
    }
    name=(ev)=>{
        this.state.name=ev.target.value
    }
    username=(ev)=>{
        this.state.username=ev.target.value
    }
    password=(ev)=>{
        this.state.password=ev.target.value
    }
    render(){
        return (
            <div>
               <div id={reg.main} className="margin">
                <h3>欢迎注册飞科商城</h3>
                <div className={reg.yzm}>
                    <span><img src="img/user-code.png"/></span>
                    <input type="text" placeholder="请输入验证码" className={reg.ma}/>
                    <span>3232</span>
                    <span>换一张</span>
                </div>
                <div >
                    <span><img src="img/user-id.png"/></span>
                    <input type="text" placeholder="请输入id"  className={reg.tel} onChange={this.name}/> 
                </div>
                <div >
                    <span><img src="img/user-pwd.png"/></span>
                    <input type="text" placeholder="请输入账号" className={reg.user} onChange={this.username}/> 
                </div>
                <div >
                    <span><img src="img/user-pwd.png"/></span>
                    <input type="text" placeholder="请输入密码" className={reg.pass} onChange={this.password}/> 
                </div>
                <div className={reg.zhuce}>
                    <p>飞科商城用户服务协议</p>
                    <p className={reg.btn} onClick={this.reg}>同意协议并注册</p>
                </div>
    </div>
  

            </div>
        )
    }

}