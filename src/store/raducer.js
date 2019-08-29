import axios from "../plugins/axios"

const reducer = (state,action)=>{
    let {type,payload}=action
    switch(type){
        case "fire1": 
            return {...state,fire1:payload}
     
        case "loading":
            console.log(action,state)
            return {...state,loading:"qwe"}
            return {...state, loading:payload};
        case "fire2":
            console.log(state,action)
            return {...state,fire2:payload.data}
            break;
        case "user":
            console.log(state,action)
            return {...state,user:payload}
            break;
        default: return state;

    }
}

export default reducer