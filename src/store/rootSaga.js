import { all, call } from 'redux-saga/effects';
import {watchLoadUser} from '../users/UserSaga';

export default function* rootSaga() {
    yield all([
        call(watchLoadUser)
    ]);
}