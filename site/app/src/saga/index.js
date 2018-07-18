import {fork} from 'redux-saga/effects'
import {getAllbalanceFlow} from './balance'

export default function* rootSaga() {
    yield fork(getAllbalanceFlow);
}
