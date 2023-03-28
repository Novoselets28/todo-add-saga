import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTodoListFailure, fetchTodoListSuccess, FETCH_TODO_LIST_REQUEST } from './actions';


function* fetchTodoList() {

    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos');
        const data = yield response.json();
        yield put(fetchTodoListSuccess(data));
    } catch (error) {
        yield put(fetchTodoListFailure(error));
    }
}

function* watchFetchTodoList() {
    yield takeLatest(FETCH_TODO_LIST_REQUEST, fetchTodoList);
}

export default function* todoSaga() {
    yield watchFetchTodoList();
}