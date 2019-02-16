import { combineReducers } from 'redux';
import {reducer as reduxReducer} from 'redux-form';

import {UserReducer} from '../users';

const rootReducer = combineReducers({
    users : UserReducer,
    forms: reduxReducer
});

export {
    rootReducer
}