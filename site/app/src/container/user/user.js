import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Tag, Input, Tooltip, Button} from 'antd'
import balance from './asset'
import Sidebar from "./components/siderbar"

class user extends Component{
    constructor(props){
        super(props);
        this.state={
            undefined
        }
    }
    render(){
        return(
            <div>
                <Sidebar/>
            </div>
        )
    }

    // componentDidMount() {
    // }
}

// function mapStateToProps(state) {
// }

// function mapDispatchToProps(dispatch) {
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(user)


export default user 