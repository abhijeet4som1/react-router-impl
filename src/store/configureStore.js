import { createStore, applyMiddleware, compose } from "redux";
import {rootReducer} from './rootReducer';
//import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from './rootSaga';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => {
    const middlewares = [sagaMiddleware];
    let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = createStore(rootReducer, initialState, composeEnhancer(
        applyMiddleware(...middlewares)));
    sagaMiddleware.run(rootSaga);
    return store;
}

export {
    configureStore
}