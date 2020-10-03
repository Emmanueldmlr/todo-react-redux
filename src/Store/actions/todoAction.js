import { getTodoService } from "../services/TodoService";

export const getTodo = () => {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_IS_LOADING",
    });

    getTodoService()
      .then((res) => {
        if (res.status === 200) {
            console.log(res)
          dispatch({
            type: "FETCH_TODO_SUCCESS",
            payload: res.data
          });

          dispatch({
            type: "TOGGLE_IS_LOADING",
          });

        } else {
          dispatch({
            type: "FETCH_TODO_ERROR",
            payload: res.error,
          });
          dispatch({
            type: "TOGGLE_IS_LOADING",
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: "CODE_ERROR",
          payload: error,
        });
        dispatch({
          type: "TOGGLE_IS_LOADING",
        });
      });
  };
};

export const updateTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_IS_LOADING",
    });

    dispatch({
        type: "UPDATE_TODO_SUCCESS",
        payload: id,
    });
     
    dispatch({
        type: "TOGGLE_IS_LOADING",
    });
        
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_IS_LOADING",
    });

    dispatch({
        type: "DELETE_TODO_SUCCESS",
        payload: id,
    });

    dispatch({
        type: "TOGGLE_IS_LOADING",
    });
        
  };
};

export const addTodo = (title) => {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_IS_LOADING",
    });

    dispatch({
        type: "ADD_TODO_SUCCESS",
        payload: title,
    });

    dispatch({
        type: "TOGGLE_IS_LOADING",
    });
        
  };
};
