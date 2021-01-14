import { call, takeLatest, all, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Types } from '../ducks/Product';

function* addProduct(payload) {
    let response = {};
    try {

        console.log(payload)

    } catch (e) {
        console.log(e);
        yield put({ type: Types.GET_TOP_TRACKS_SUCCESS, errorMessage: 'error' });
    }
}


export default function* () {
    yield all([
        takeLatest(Types.ADD_PRODUCT, addProduct),
    ]); 
}