import { all, takeEvery, takeLatest } from 'redux-saga/effects';


// import { getAuthFetch } from '../slices/authSlice';
import { getAuthFetch } from '../slices/UserSlice';
import { getAuthHadler } from './handler/UserHandler';
import { getProductHadler } from './handler/ProductHandler';
import { getProductReq } from '../slices/ProductSlice';



export default function* rootSaga() {
    yield all([
        takeLatest(getAuthFetch.type, getAuthHadler),
        takeLatest(getProductReq.type, getProductHadler),

    ]);
}
