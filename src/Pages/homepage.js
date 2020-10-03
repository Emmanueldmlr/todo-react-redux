import React, {useEffect} from 'react'
import { getTodo } from "../Store/actions/todoAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/header"
import Todo from "../Components/todo"
import {connect} from 'react-redux'

const Homepage = (props) => {
  const {data, isLoading, todoResponse,getTodo } = props;
  useEffect(() => {
    getTodo();
    return () => {
      getTodo()
    };
  },[getTodo]);
  return (
    <>
      <Header />
      <div>
        { isLoading ? (
          <div className="offset-5" style={{ marginTop: "50px" }}>
            <FontAwesomeIcon icon={faSpinner} pulse size="3x" />
            <p style={{ color: "red" }}>Loading...</p>
          </div>
        ) : todoResponse !== "" ? (
          <div className="offset-5" style={{ marginTop: "50px" }}>
            <p style={{ color: "red" }}>Data Could Not be Fetched</p>
          </div>
        ) : data.length < 1 ? (
          <div className="offset-5" style={{ marginTop: "50px" }}>
            <p style={{ color: "red" }}>No Pending Todo</p>
          </div>
        ) : (
          <ul id="myUL">
            <Todo />
          </ul>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.todo.isLoading,
        data:state.todo.todos,
        todoResponse:state.todo.todoResponse
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodo: () => {
            dispatch(getTodo())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage)
