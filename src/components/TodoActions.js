import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

const TodoActions = props => {
    return (
      <div className="todo__actions">
        <Button
          variant="outline-dark"
          className={
            props.filter === "all"
              ? "todo__action-btn todo__action-all active"
              : "todo__action-btn todo__action-all"
          }
          onClick={() => props.updateFilter("all")}
        >
          All
        </Button>{" "}
        <Button
          variant="outline-info"
          className={
            props.filter === "active"
              ? "todo__action-btn todo__action-active active"
              : "todo__action-btn todo__action-active"
          }
          onClick={() => props.updateFilter("active")}
        >
          Active
        </Button>{" "}
        <Button
          variant="outline-success"
          className={
            props.filter === "completed"
              ? "todo__action-btn todo__action-completed active"
              : "todo__action-btn todo__action-completed"
          }
          onClick={() => props.updateFilter("completed")}
        >
          Completed
        </Button>{" "}
      </div>
    );
};

TodoActions.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

export default TodoActions;
