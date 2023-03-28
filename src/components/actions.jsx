
export const FETCH_TODO_LIST_REQUEST = 'FETCH_TODO_LIST_REQUEST';
export const FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS';
export const FETCH_TODO_LIST_FAILURE = 'FETCH_TODO_LIST_FAILURE';
export const UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS';


export function fetchTodoListRequest(todos) {
    return {
        type: FETCH_TODO_LIST_REQUEST,
        payload: {todos} ,
    };
}

export function fetchTodoListSuccess(todoList) {
    return {
        type: FETCH_TODO_LIST_SUCCESS,
        payload: { todoList },
    };
}

export function fetchTodoListFailure(error) {
    return {
        type: FETCH_TODO_LIST_FAILURE,
        payload: { error },
    };
}

export function updateTodoStatus(id, completed) {
    return {
        type: UPDATE_TODO_STATUS,
        payload: { id, completed },
    };
}

export const ADD_TODO = "ADD_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});