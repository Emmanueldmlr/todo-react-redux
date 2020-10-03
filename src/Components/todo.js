import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect} from 'react-redux'
import {updateTodo} from '../Store/actions/todoAction'
import {deleteTodo} from '../Store/actions/todoAction'


const Todo = (props) => {
   const {data} = props
   const handleTodoUpdate = (todoDetails) =>{
       props.updateTodo(todoDetails.id)
   }

   const handleDeleteTodo = (id) => {
      props.deleteTodo(id)
   }
    return (
      <>
        {data.map((todo) => (
          <div key={todo.id}>
            <li className={todo.completed ? "checked" : null}>
              <div onClick={() => handleTodoUpdate(todo)}> # {todo.title}</div>
              <FontAwesomeIcon
                onClick={() => handleDeleteTodo(todo.id)}
                style={{ color: "red", marginTop: "-20px" }}
                className="float-right"
                icon={faTrash}
              />
            </li>
          </div>
        ))}
      </>
    );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.todo.isLoading,
    data: state.todo.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      updateTodo: ( id) => {
        dispatch(updateTodo(id));
      },
      deleteTodo: (id) => {
        dispatch(deleteTodo(id));
      },
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Todo)
