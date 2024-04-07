// sagas.js
import { all } from 'redux-saga/effects';
import { watchSomeSaga } from './saga';


export default function* rootSaga() {
    yield all([
      watchSomeSaga(), 
        // Add more sagas here if needed
    ]);
}