import { combineReducers } from 'redux';
import {reducer as reduxReducer} from 'redux-form';

import {UserReducer} from '../users';
import FormManireducer from '../FormManiReducer';

const rootReducer = combineReducers({
    users : UserReducer,
    form: reduxReducer,
    formmani: FormManireducer
});

export {
    rootReducer
}