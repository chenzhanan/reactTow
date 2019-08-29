import axios from "../plugins/axios"
export default ({apiName,method="get",nikename,icon,username,password,params})=>{
    // console.log(apiName)
    // console.log(method)
    // console.log(username,password)
    let formData = new FormData()
    nikename&&formData.append("nikename",nikename)
    icon&&formData.append("icon",icon)
    username&&formData.append("username",username)
    password&&formData.append("password",password)
  
    return axios({
        url:"/api/"+apiName,
        params:params||null,
        method:method,
        data:formData
    })
 
}