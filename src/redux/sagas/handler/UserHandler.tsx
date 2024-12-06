import { put, takeLatest, call, select } from 'redux-saga/effects';
import { getAuthSuccess, getAuthLoading, getAuthFailure } from '../../slices/UserSlice';
import { url } from '../../../api/Url';
import request from '../../../api/ApiRequest';

export function* getAuthHadler(action: any) {

    const token: String = yield select(
        (state: any) => state
    );
    // return token;
    console.log('hendel token------', token);

    const data = JSON.stringify(action.payload);
    console.log('data------', data);

    const config = {
        method: 'POST',
        url: url.loginUrl,
        data: data,
        headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };

    try {
        yield put(getAuthLoading());
        const response: { data: any } = yield call(request, config);
        console.log("response", response?.data);

        // const { data } = response;

        yield put(getAuthSuccess(response?.data));

    } catch (error) {
        yield put(getAuthFailure('Error in signing up !'));
        console.log(error, 'Error in signing up !');
    }
}
