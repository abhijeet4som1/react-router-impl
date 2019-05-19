import { put, takeLatest } from 'redux-saga/effects';
import {LOAD_USER, LOAD_USER_SUCCESS} from './userSagaActions';

function* fetchUser(){
    try{
        let response = yield fetch(`https://jsonplaceholder.typicode.com/users`);
        let data = yield response.json();
        yield put({type: LOAD_USER_SUCCESS, users: data});
    } catch(err){
        console.log("fetch err:", err);
    }
}

function* watchLoadUser(){
    yield takeLatest(LOAD_USER, fetchUser);
}

export {
    watchLoadUser
}