import {actionTypes as balance} from '../reducers/user/userMangeBalance'
import {put, take, call, select} from 'redux-saga/effects'

export function* getAllbalance() {
//fetching data ----> set balance
       try {
         return yield call(get, '/');
       } catch (err) {
         console.log('Error happened!')
       } finally {
        //  yield put({type: IndexActionTypes.FETCH_END})
         console.log('Finish fetching')
       }
}


export function* getAllbalanceFlow() {
        while (true) {
        yield take(balance.GET_ALL_BALANCE);
        let res = yield call(getAllbalance);
        if (res.code === 0) {
            let tempArr = [];
            for (let i = 0; i < res.data.length; i++) {
                tempArr.push(res.data[i].name)
            }
            yield put({type: balance.SET_BALANCE, data: tempArr});
        } 
    }
}

