import { put, takeLatest, call, select } from 'redux-saga/effects';
import { getProductFailure, getProductLoading, getProductSuccess } from '../../slices/ProductSlice';
import { url } from '../../../api/Url';
import request from '../../../api/ApiRequest';

export function* getProductHadler() {

    const config = {
        method: 'GET',
        url: url.products,
        headers: {
            // 'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };

    try {
        yield put(getProductLoading());
        const response: { data: any } = yield call(request, config);
        console.log("response", response?.data);

        yield put(getProductSuccess(response?.data));

    } catch (e) {
        yield put(getProductFailure(e));
        console.log(e, 'Error in products get data!');
    }
}
