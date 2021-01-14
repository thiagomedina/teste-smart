
import { all, fork } from 'redux-saga/effects';
import Product from './Product'
export default function* rootSaga() {
    yield all([
        fork(Product)
    ])
}