
import {reducer as balance} from './userMangeBalance'
import {combineReducers} from 'redux'


const user = combineReducers({
    balance,
});

export default user
