import React from "react"
import "./foot.css"
import ReactRoutreDom,{NavLink} from "react-router-dom"
export default class Foot extends React.Component{
    render(){
        return (
            <div>
                <div className="foot margin">
            <div className="margin">
                <ul className="foot-t">
                    <li>领导品牌&nbsp;品质保证</li>
                    <li>7天退货&nbsp;15天换货</li>
                    <li>全场免运费&nbsp;（部分配件除外</li>
                    <li>全国网点&nbsp;联保服务</li>
                </ul>
                <div className="foot-c">
                    <dl>
                        <dt>购物服务</dt>
                        <dd>购物指南</dd>
                        <dd>配送方式</dd>
                        <dd>支付方式</dd>
                    </dl>
                    <dl>
                        <dt>服务支持</dt>
                        <dd>售后网点</dd>
                        <dd>积分规则</dd>
                        <dd>保修政策</dd>
                    </dl>
                    <dl>
                        <dt>关注我们</dt>
                        <dd>新浪微博</dd>
                        <dd>关注微信</dd>
                        <dd>APP下载
                            </dd>
                    </dl>
                    <dl>
                        <dt>关于飞科</dt>
                        <dd>飞科介绍</dd>
                        <dd>飞科新闻</dd>
                        <dd>联系我们</dd>
                    </dl>
                    <div className="ma">
                        <img src="https://www.flyco.com/theme/feike_pc/images/qr_code.jpg"/>
                        <p>关注飞科电器官方微信</p>
                    </div>
                   <div className="tel">
                       <img src="https://www.flyco.com/theme/feike_pc/images/service1.png"/>
                   </div>
                </div>
            </div>
            <div className="foot-b margin">
                <div className="foot-b-l">
                    <img src="https://pic.flyco.net.cn/sources/service/minilogo.jpg"/>
                </div>
                <div className="foot-b-c">
                    <p>Copyright © 2013-2016上海飞科电器股份有限公司 | 版权所有 | 网站备案/许可证号：沪ICP备13041208号</p>
                    <p>增值电信营业经营许可认证:沪B2-20160083 | <span><img src="https://www.flyco.com/theme/feike_pc/images/fkab.png"/></span>沪公网安备 31010502001341号</p>
                    
                </div>
                <ul>
                    <li><img src="https://www.flyco.com/theme/feike_pc/images/img/rightimg1.jpg"/></li>
                    <li><img src="https://www.flyco.com/theme/feike_pc/images/img/rightimg2.jpg"/></li>
                    <li><img src="https://www.flyco.com/theme/feike_pc/images/img/rightimg3.jpg"/></li>
                    <li><img src="https://www.flyco.com/theme/feike_pc/images/img/rightimg4.jpg"/></li>
                </ul>
            </div>
        </div>
            </div>
        )
    }
}