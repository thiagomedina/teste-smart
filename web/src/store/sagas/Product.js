import { call, takeLatest, all, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Types } from '../ducks/Product';

function* addProduct(payload) {
    let response = {};
    try {
        response = yield call(api.post, 'product', payload.payload);

    } catch (e) {
        console.log(e);
        yield put({ type: Types.ADD_PRODUCT_FAILURE, errorMessage: 'error' });
    }
}

function* getProduct() {
    let response = {};
    try {
        response = yield call(api.get, 'product');
        yield put({ type: Types.ADD_PRODUCT_SUCCESS, payload: response.data });
    } catch (e) {
        console.log(e);
        yield put({ type: Types.GET_PRODUCT_FAILURE, errorMessage: 'error' });
    }
}

export default function* () {
    yield all([
        takeLatest(Types.ADD_PRODUCT, addProduct),
        takeLatest(Types.GET_PRODUCT, getProduct),
    ]);
}