import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from "react-bootstrap";

const TodoItem = props => {
    return (
      <li
        key={props.todo.id}
        className={
          props.todo.complete ? "todos__item completed" : "todos__item"
        }
      >
        <Form.Check
          className="todos__item-checkbox"
          custom
          type="checkbox"
          id={`todos__item-checkbox-${props.todo.id}`}
          label={props.todo.title}
          checked={props.todo.complete}
          onChange={event =>
            props.markCompleted(props.todo, props.index, event)
          }
        />
        <Button
          variant="danger"
          size="sm"
          className="todos__item-remove"
          onClick={event => props.deleteTodo(props.index)}
        >
          &times;
        </Button>
      </li>
    );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoItem;
