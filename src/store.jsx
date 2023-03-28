import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './components/reducer';
import todoSaga from './components/Sags';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    todoReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(todoSaga);

export default store;