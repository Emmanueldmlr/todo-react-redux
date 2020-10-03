import { v4 as uuidv4 } from "uuid";
const initialState = {
  todos: [],
  isLoading: false,
  todoResponse: null,
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EMPTY_FIELD":
      return {
        ...state,
        todoResponse: "Todo Field Cannot be Empty",
      };

    case "TOGGLE_IS_LOADING":
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    case "FETCH_TODO_SUCCESS":
      return {
        ...state,
        todoResponse: "",
        todos: action.payload,
      };

    case "DELETE_TODO_SUCCESS":
      const todos = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todoResponse: "",
        todos: todos
      };

    case "ADD_TODO_SUCCESS":
      const todo = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, todo]
      };

    case "UPDATE_TODO_SUCCESS":
       const newtodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
        });
      return { 
        ...state, 
        todos: newtodos
      }
     
    case "CODE_ERROR":
      return {
        ...state,
        todoResponse: "Action Could not be Completed",
      };
    case "FETCH_TODO_ERROR":
      return {
        ...state,
        todoResponse: action.payload,
      };

    default:
      return state;
  }
};

export default TodoReducer;
