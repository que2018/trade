import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions} from '../../reducers/adminManagerTags'


const {get_all_tags,delete_tag,add_tag} = actions;

class balance extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const { inputVisible, inputValue } = this.state;
        const {balance} = this.props;
        return(
            <div>
                 <h2> {balance} </h2>
            </div>
        )
    }

    componentDidMount() {
        // this.props.getAllTags();
    }
}

function mapStateToProps(state) {
    return{
        tags:state.admin.tags
    }
}

function mapDispatchToProps(dispatch) {
    return{
        // getAllTags : bindActionCreators(get_all_tags,dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminManagerTags)