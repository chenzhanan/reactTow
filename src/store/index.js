import {createStore,applyMiddleware} from "redux"
import reducer from "./raducer"
import state from "./state"
import thunk from "redux-thunk"
import 'antd/dist/antd.css'; // 全局的样式
//实例
const store = createStore(reducer,state,applyMiddleware(thunk))
export default store