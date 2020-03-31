import React from 'react';
import { Form } from "react-bootstrap";
import PropTypes from 'prop-types';

const TodoTextFiled = props => {
    return (
      <Form.Control
        type="text"
        className="todo-input"
        placeholder="Type at least 3 characters & press Enter &#8617;"
        ref={props.todoInputEl}
        onKeyUp={props.addTodo}
      />
    );
};

TodoTextFiled.propTypes = {
    todoInputEl: PropTypes.object.isRequired,
    addTodo: PropTypes.func.isRequired

};

export default TodoTextFiled;
