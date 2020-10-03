import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../Store/actions/todoAction'


const Header = (props) => {
  const [text, setText] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);
  const submitTodo = () => {
    if (text === "") {
      updateErrorMessage("Title must not be empty");
      return;
    } else {
      props.addTodo(text);
      setTimeout(() => {
        setText("");
      }, 5000);
      updateSuccessMessage("New Todo Task Successfully Created");
    }
  };

  const updateErrorMessage = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 10000);
  };

  const updateSuccessMessage = (message) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess(null);
    }, 10000);
  };
  return (
    <div id="myDIV" className="header">
      <h2 style={{ margin: "5px" }}>My To Do List</h2>
      {error !== null ? (
        <h4 style={{ margin: "5px", color: "yellow" }}>{error}</h4>
      ) : null}
      {success !== null ? (
        <h4 style={{ margin: "5px", color: "green" }}>{success}</h4>
      ) : null}
      <input
        value={text}
        id="myInput"
        onChange={(e) => setText(e.target.value)}
        placeholder="Title..."
      />
      <span onClick={submitTodo} className="addBtn">
        Add
      </span>
    </div>
  );
};


 const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (title) => {
      dispatch(addTodo(title))
    }
  }
}


export default connect(null, mapDispatchToProps)(Header)
