import React from "react"
import "./user.css"

import {connect} from "react-redux"
import mapStateToProps from "react-redux/es/connect/mapStateToProps";
class User extends React.Component{
    
    render(){
        return (
            <div>
              <p className="user">{this.props.nikename}</p>
            </div>
        )
    }
    componentDidMount(){
        
    //   let nikename=JSON.parse(this.props.user)
        // console.log(this.props.nikename)
        // console.log(JSON.parse(this.props.nikename).nikename)
        console.log(this.props.nikename)
    }
}

const MapStateToProps=(state)=>{
    return {
        nikename:JSON.parse(state.user).nikename
    }
}
const MapDispatchToProps=(dipatch)=>{
    return {

    }
}
export default connect(MapStateToProps,MapDispatchToProps)(User)