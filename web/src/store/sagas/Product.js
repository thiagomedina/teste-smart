import { call, takeLatest, all, put, delay } from 'redux-saga/effects';
import api from '../../services/api';

import { Types } from '../ducks/Product';

function* addProduct(payload) {
    let response = {};
    try {
        response = yield call(api.post, 'product', payload.payload);
        yield put({ type: Types.SUCCESS });
        alert('salvo com sucesso')
    } catch (e) {
        alert('não foi possível salvar, tente novamente')
        console.log(e);
        yield put({ type: Types.ADD_PRODUCT_FAILURE, errorMessage: 'error' });
    }
}

function* getProduct() {
    let response = {};
    try {
        response = yield call(api.get, 'product');
        yield put({ type: Types.GET_PRODUCT_SUCCESS, payload: response.data });
    } catch (e) {
        console.log(e);
        yield put({ type: Types.GET_PRODUCT_FAILURE, errorMessage: 'error' });
    }
}


function* updateProduct(payload) {

    let response = {};
    try {
        response = yield call(api.put, `product/${payload.payload.id}`, payload.payload);
        yield put({ type: Types.SUCCESS });
        alert('atualizado com sucesso')
    } catch (e) {
        console.log(e);
        yield put({ type: Types.GET_PRODUCT_FAILURE, errorMessage: 'error' });
        alert('não foi possível atualizar')
    }

}



function* removeProduct(payload) {

    let response = {};
    try {
        yield call(api.delete, `product/${payload.payload}`);
        response = yield call(api.get, 'product');
        yield put({ type: Types.GET_PRODUCT_SUCCESS, payload: response.data });

        yield put({ type: Types.SUCCESS });
        alert('excluido com sucesso')
    } catch (e) {
        console.log(e);
        yield put({ type: Types.GET_PRODUCT_FAILURE, errorMessage: 'error' });
        alert('não foi possível excluir')
    }

}




export default function* () {
    yield all([
        takeLatest(Types.ADD_PRODUCT, addProduct),
        takeLatest(Types.GET_PRODUCT, getProduct),
        takeLatest(Types.UPDATE_PRODUCT, updateProduct),
        takeLatest(Types.REMOVE_PRODUCT, removeProduct),

    ]);
}