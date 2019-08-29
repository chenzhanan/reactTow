import React from "react"
import "./detail.css"
import ReactRoutreDom,{NavLink} from "react-router-dom"
export default class Detail extends React.Component{
    render(){
        return (
            <div>
              <div id="main" className="margin">
        <div className="main-l">

            <div className="tu">
                <div className="cont">
                    <img src="https://pic.flyco.net.cn/sources/goods/FS375/FS375_big.jpg?aa=112@1e_1c_0o_0l__450h_450w.src"/>
                    <span></span>
                    <div className="imgbox">
                        <img src="https://pic.flyco.net.cn/sources/goods/FS375/FS375_big.jpg?aa=112@1e_1c_0o_0l__450h_450w.src"/>
                    </div>
                </div>   
            </div>
            <ul>
                <li><img src="https://pic.flyco.net.cn/sources/goods/FS375/FS375_000_01.jpg?aa=112@1e_1c_0o_0l__84h_84w.src"/></li>
                <li><img src="https://pic.flyco.net.cn/sources/goods/FS375/FS375_000_02.jpg"/></li>
                <li><img src="https://pic.flyco.net.cn/sources/goods/FS373/FS373_big.jpg?ah=11@1e_1c_0o_0l__240h_240w.src"/></li>
                <li><img src="https://pic.flyco.net.cn/sources/goods/FS372/FS372_big.jpg?ah=11@1e_1c_0o_0l__240h_240w.src"/></li>
                <li><img src="https://pic.flyco.net.cn/sources/goods/FS372/FS372_big.jpg?ah=11@1e_1c_0o_0l__240h_240w.src"/></li>
            </ul>
        </div>
        <div className="main-r">
            <h1 className="name">飞科智能剃须刀FS375</h1>
            <div className="des">
                <p>
                    【爆款特卖】闪耀巨献  大气优雅   全新设计理念  精雕细作  完美升级<br/>
                    【功能特点】全身水洗七级防水  智能操控  双环三头极速浮动剃须 USB充电  1小时快速充电<br/>
                    【品质保证】官方商城品质保证　7天无理由退货 15天无理由换货 全国联保2年 售后无忧放心购买<br/>  
                </p>
            </div>
            <div className="price">
                <p><span>商城价&nbsp;:&nbsp;&nbsp;</span><span>339.00元</span></p>
                <p><span>到手价&nbsp;:&nbsp;&nbsp;</span>$<span calss="price">139.00</span></p>
            </div>    
            <div className="main-r-b">
                <h2>客户评价: 501人评价</h2>
                <h3>商品累计月销量 <span>132540</span></h3>
                <h4>
                    <span>购买数量:</span>
                    <input type="button" value="-" className="jian"/>
                    <input type="button" value="1" className="num"/>
                    <input type="button" value="+" className="jia"/>
                    <span>库存94493</span>
                </h4>
                <h5>
                    <span className="mai">立即购买</span>
                    <span className="car">加入购物车</span>
                </h5>
                <h6>
                    <p>全场免运费（部分配件除外）</p>
                    <p>收藏改商品</p>
                </h6>
            </div>            
        </div>

    </div>


            </div>
        )
    }
}