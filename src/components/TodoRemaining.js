import React from 'react';
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
const TodoRemaining = (props) => {
    return <Alert variant="info">{props.remaining} task(s) left</Alert>;
};

TodoRemaining.propTypes = {
    remaining: PropTypes.number.isRequired
}

export default TodoRemaining;
