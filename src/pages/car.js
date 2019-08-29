import React from "react"
import "./car.css"
import ReactRoutreDom,{NavLink} from "react-router-dom"
export default class Car extends React.Component{
    render(){
        return (
            <div>
                
                <div className="tit margin">
                    <img className="bc" src="https://www.flyco.com/theme/feike_pc/images/cart_tit.png" />
                </div>
                <table className="tb margin">
                    <tr>
                      
                        <th className="te">商品</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>小计</th>
                        <th>操作</th>
                    </tr>
                    <tr>
                        
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <div id="shangchu" className="margin">
                    <h4><a href="#" className="kong">清空购物车</a></h4>
                    <h4><a href="#" className="del">删除选中项</a></h4>
                </div>
                <div id="all" className="margin">
                    <p>
                        <span>商品总计:</span><span className="money">￥0元</span>
                    </p>
                </div>

                <div className="clear margin">
                    <form>
                        <input type="button" className="clear-te1" value="继续"/>
                        <input type="button" className="clear-te2" value="去结算"/>
                    </form>
                </div>
            </div>
        )
    }
}