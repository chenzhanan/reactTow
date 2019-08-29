import React from "react"
import "./header.css"
import ReactRoutreDom,{NavLink} from "react-router-dom"
export default class Header extends React.Component{
    render(){
        return (
            <div>
                 <div id="t">
                    <div id="top" className="margin">
                        <div className="top-l">
                            <span>
                                <img src="http://localhost/fk/shouye/img/collect.jpg"/>
                                收藏
                            </span>
                            <span>
                                <img src="http://localhost/fk/shouye/img/weixin1.jpg"/>
                                微信
                            </span>
                        </div>
                        <div className="topr">
                            <span>
                                <NavLink to="/reg">注册</NavLink>
                            </span>
                            <span>
                                <NavLink to="/login">登录</NavLink>
                            </span>
                        </div>
                    </div>
                </div>

                    <div className="headerchild margin">
                        <div className="logo">
                            <NavLink to="/user">
                                <img src="https://pic.flyco.net.cn/sources/new_pc/logo.gif" />
                            </NavLink>
                        </div>
                        <div className="sy">
                            <NavLink to="/home">
                            
                                <span>首页</span>
                            </NavLink>
                        </div>
                        <p className="valign">
                            <NavLink to="/car">
                                <img src="http://localhost/fk/shouye/img/cartp.png"/>
                                <span>购物车</span>
                                <i>(0)</i>
                            </NavLink>
                        </p>
                        <form>
                            <input type="text" className="txt" placeholder="剃须刀"/>
                            <input type="button" className="btn" />
                        </form>
                    </div>
            </div>
        )
    }
}