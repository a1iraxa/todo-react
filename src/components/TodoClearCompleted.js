import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
const TodoClearCompleted = props => {
    return (
      <Button
        variant="danger"
        size="sm"
        block
        className="todo__clear-complete"
        onClick={props.clearComplete}
      >
        Clear completed tasks
      </Button>
    );
};

TodoClearCompleted.propTypes = {
  clearComplete: PropTypes.func.isRequired
};

export default TodoClearCompleted;
