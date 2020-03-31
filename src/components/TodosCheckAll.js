import React from 'react';
import PropTypes from 'prop-types';
import { Form } from "react-bootstrap";

const TodosCheckAll = props => {
    return (
      <Form.Check
        id="todos__item-checkbox-all"
        className="todos__item-checkbox-all"
        type="checkbox"
        checked={!props.anyRemaining()}
        onChange={event => props.markAllCompleted(event)}
        custom
        label="Check All Completed!"
      />
    );
};

TodosCheckAll.propTypes = {
  anyRemaining: PropTypes.func.isRequired,
  markAllCompleted: PropTypes.func.isRequired
};

export default TodosCheckAll;
