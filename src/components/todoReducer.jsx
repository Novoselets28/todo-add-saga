import { ADD_TODO } from "./actions";

const initialState = {
  items: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, { text: action.payload.text, completed: false }],
      };
    default:
      return state;
  }
};

export default todosReducer;