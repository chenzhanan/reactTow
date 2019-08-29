import React from "react"
import "./home.css"
import ReactRoutreDom,{NavLink} from "react-router-dom"
import axios from "../plugins/axios";
import { Carousel } from 'antd';
import { Button } from 'antd';
import {connect} from "react-redux"

class Home extends React.Component{

    constructor(){
        super()
        this.state={
            fire1:"",
            fire2:"",
            list:"",
            loading:""
        }
    }
   
    render(){
        // console.log(store.getState())
        //用this.state.fire1  map 方法用不了?/?
        
        let fire1=this.state.fire1
        // console.log(fire1)
        return (
            <div>
       <div id="header" className="margin">
          
       </div>
       <div id="banner" className="margin">
           <div className="banner-t">
               <ul className="one">
                       <li><NavLink to="/tixu"><span style={{color:"#fff"}}>电动剃须刀</span><span> > </span></NavLink></li>
                       <li><a href="#"><span>电吹风</span><span> > </span></a></li>
                       <li><a href="#"><span>理发器</span><span> > </span></a></li>
                       <li><a href="#"><span>烫发器</span><span> > </span></a></li>
                       <li><a href="#"><span>熨烫系列</span><span> > </span></a></li>
                       <li><a href="#"><span>吸尘器</span><span> > </span></a></li>
                       <li><a href="#"><span>空气净化器</span><span> > </span></a></li>
                       <li><a href="#"><span>加湿器</span><span> > </span></a></li>
                       <li><a href="#"><span>毛球修剪器</span><span> > </span></a></li>
                       <li><a href="#"><span>女士剃毛器</span><span> > </span></a></li>
                       <li><a href="#"><span>鼻毛修剪器</span><span> > </span></a></li>
                       <li><a href="#"><span>健康秤</span><span> > </span></a></li>
                       <li><a href="#"><span>智能插座</span><span> > </span></a></li>
                       <li><a href="#"><span>配件</span><span> > </span></a></li>
                   </ul>
                   
                   <div className="two"></div>
   
   
   
                   <div className="imgbox">
                   <Carousel autoplay dotPosition="bottom">
                        <div>
                       <img src="https://pic.flyco.net.cn/sources/act/20190530/index/1.jpg?a=1"/>
                        </div>
                        <div>
                      <img src="https://pic.flyco.net.cn/sources/act/20190530/index/1240.jpg"/>
                        </div>
                        <div>
                       <img src="https://pic.flyco.net.cn/sources/act/20190509/banner/pc/2.jpg?a=1"/>
                        </div>
                        <div>
                        <img src="https://pic.flyco.net.cn/sources/act/20190430/banner/pc/3.jpg"/>
                        </div>
                        <div>
                       <img src="https://pic.flyco.net.cn/sources/act/20190430/banner/pc/5.jpg"/>
                        </div>
                    </Carousel>
                       {/* <input type="button" className="left" value="<<<"/>
                       <input type="button" className="right" value=">>>"/> */}
                   </div>
           </div>
           <ul className="banner-b margin">
                   <li><img src="https://pic.flyco.net.cn/sources/act/20181221/index/pc/1.jpg?a=1"/></li>
                   <li><img src="https://pic.flyco.net.cn/sources/act/20181221/index/pc/2.jpg?a=1"/></li>
                   <li><img src="https://pic.flyco.net.cn/sources/act/20181221/index/pc/3.jpg?a=1"/></li>
           </ul>
       </div>
       <div id="main">
           <div id="fire" className="margin">
               <h1>热卖单品</h1>
               <div className="fire-c">
                   <div  className="fire-c-l">
                       <NavLink to="/detail">
                           <h3>飞科智能剃须刀FS375</h3>
                           <p>3D智能浮动系列/充插两用/智能水洗...</p>
                           <p><span>139元</span>&nbsp;&nbsp;<span>339元</span></p>
                       </NavLink>
                   </div>
                   <ul className="fire-c-u">  
                    
                   {fire1&&fire1.map((item,index)=>{
                            return ( <li key={index}>
                                    <a>
                                     <h4>{item.name}</h4>
                                     <h5>{item.market} &nbsp;<span>{item.num}</span></h5>
                                     <p>{item.price}</p>
                                     <img src={item.src}/>
                                     </a>
                            </li>)
                            
                        })}
                   </ul>
               </div>
               <div className="fire-b">
                   <div className="fire-b-l">
                       <a>
                           <h3>飞科理发器FC5908</h3>
                           <h4>强劲模式&nbsp;/&nbsp;全球电压&nbsp;/&nbsp;冲插两用</h4>
                           <p><span>129元</span>&nbsp;<span>149元</span></p>
                           <img src="https://pic.flyco.net.cn/sources/act/20190429/index/FC5908.png?a=3"/>
                       
                       </a>
                   </div>
                   <ul className="fire-b-u">
                   </ul>
               </div> 
           </div>
       </div>
       <h2 className="margin">新品上市</h2>
       <div id="new" className="margin">  
           <div className="new-l">
                   <a>
                       <h3>飞科剃须刀FS310</h3>
                       <h4 className="over">全身水洗&nbsp;/&nbsp;智能充电显示&nbsp;/&nbsp;智能防水</h4>
                       <p><span>119元</span>&nbsp;<span>139元</span></p>
                       <img src="https://flycopic.oss-cn-hangzhou.aliyuncs.com/sources/act/20190430/pc/FS310.png?a=1"/>
                   </a>
               </div>
               <ul className="new-u">
                   <li>
                       <a>
                           <img src="https://pic.flyco.net.cn/sources/act/20190429/index/FH7006.png"/>
                           <h3>飞科健康秤FH7006 139元</h3>
                           <h4>智能蓝牙连接&nbsp;/&nbsp;智能云端数据管理&nbsp;/...</h4>
                       </a>
                   </li>
               </ul>
       </div>
       <div id="main-te">
           <div id="te" className="margin">
               <h2>特价商品</h2>
               <div className="te-b">
                   <dl>
                       <dd>
                           <a href="#">
                               <h3>飞科电吹风FH6257</h3>
                               <h4>快速造型&nbsp;/&nbsp;健康护发</h4>
                               <p><span>39元</span>&nbsp;<span>59元</span></p>
                               <img src="https://pic.flyco.net.cn/sources/act/20190310/pc/FH6257.png"/>
                           </a>
                       </dd>
                       <dd>
                           <a>
                               <h3>飞科剃须刀FS871</h3>
                               <h4>全球水洗&nbsp;/&nbsp;全球电压</h4>
                               <p><span>65元</span>&nbsp;<span>199元</span></p>
                               <img src="https://pic.flyco.net.cn/sources/act/20190429/index/FS871.png"/>
                           </a>
                       </dd>
                   </dl>
                   <ul className="te-u">
                       <li>
                           <a href="#">
                               <h3>发动三刀头</h3>
                               <h4>FS360&nbsp;65元&nbsp;<span>119元</span></h4>
                               <p><span>5.4</span>折</p>
                               <img src="https://pic.flyco.net.cn/sources/act/20190430/pc/FS360.png"/>
                           </a>
                       </li>
                   </ul>
               </div>
           </div>
       </div>
       <div id="foot"></div>
    <div id="list">
        <ul>
            <li>顶部</li>
            <li>热卖</li>
            <li>新品</li>
            <li>特价</li>
        </ul>
    </div>
  

    <input type="button" value="按钮" />
            </div>
        )
    }
    componentDidMount(){
       
        axios({
            url:"api/fire1"
        }).then((res)=>{
            this.setState({
                fire1:res.data.data
            })
        })
        
    //  console.log(1)
        // this.props.fire2()
    // store.dispatch({type:"fire1",payload:'fire1'})
    // console.log(store.getState())
       
      

      }
    
}
const mapStateToProps = (state,ownProps) => ({
    // 这个必须有一个return 对象{}
    list:state.list,
    load:state.loading,
    fire:state.fire2,
    user:state.user
  });
  
  //blue
  const mapDispatchToProps = (dispatch,ownProps) => ({
   loading:(val)=>dispatch({type:'loading',payload:"123"}),
    
//    fire2:(val)=>dispatch((dispatch)=>{axios({
//                                 url:"api/fire1"
//                             }).then((res)=>{
//                                 console.log(res)
//                                dispatch({type:"fire2",payload:res.data})                     
//                             })
//                         }),
  });
  
  
  //容器组件 orange
  export default connect(mapStateToProps,mapDispatchToProps)(Home)