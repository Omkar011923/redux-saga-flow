// sagas.js
import { takeEvery, put } from 'redux-saga/effects';// Your action types and creators
import { SOME_ACTION, someActionSuccess, startLoader } from './action';

function* someSaga(action) {
    yield put(startLoader()); // Dispatch an action to update the store
    let data = yield fetch('https://fakestoreapi.com/products');
    let parsedData = yield data.json();
    yield put(someActionSuccess(parsedData)); // Dispatch an action to update the store
}

export function* watchSomeSaga() {
    yield takeEvery(SOME_ACTION, someSaga);
}
