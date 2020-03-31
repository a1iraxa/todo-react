import React from "react";
import '../App.css';
import InputStateMachine from './InputStateMachine';
import BsModal from "./BsModal";
import {Container, Row, Col, Jumbotron} from "react-bootstrap";
import TodoRemaining from "./TodoRemaining";
import TodoItem from "./TodoItem";
import TodosCheckAll from "./TodosCheckAll";
import TodoActions from "./TodoActions";
import TodoClearCompleted from "./TodoClearCompleted";
import TodoTextFiled from "./TodoTextFiled";

class Todo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col sm={{ span: 6, offset: 3 }}>
              <Jumbotron className="todos">
                <h1 className="text-center">Todo APP</h1>

                <TodoActions
                  updateFilter={this.updateFilter}
                  filter={this.state.filter}
                />

                <TodosCheckAll
                  anyRemaining={this.anyRemaining}
                  markAllCompleted={this.markAllCompleted}
                />

                <ul className="todos__list">
                  {this.todosFiltered().map((todo, index) => (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      markCompleted={this.markCompleted}
                      deleteTodo={this.deleteTodo}
                      index={index}
                    />
                  ))}
                </ul>

                <TodoTextFiled
                  todoInputEl={this.todoInputEl}
                  addTodo={this.addTodo}
                />
                <TodoRemaining remaining={this.remaining()} />

                {this.showClearCompletedBtn() > 0 && (
                  <TodoClearCompleted clearComplete={this.clearComplete} />
                )}
              </Jumbotron>
            </Col>
          </Row>
        </Container>

        <div className="todos-container"></div>
      </React.Fragment>
    );
  }
  addTodo = event => {
    if (event.key === "Enter") {
      const newTodo = this.todoInputEl.current.value;

      if (newTodo.trim().length === 0) {
        return;
      }
      if (newTodo.trim().length < 3) {
        return;
      }

      this.setState((prevState, props) => {
        let autoIncretment = prevState.autoIncretment + 1;

        let newTodoObj = {
          id: autoIncretment,
          title: newTodo,
          complete: false,
          editing: false
        };

        let todos = prevState.todos.concat(newTodoObj);

        return { todos, autoIncretment };
      });

      this.todoInputEl.current.value = "";
    }
  };

  markCompleted = (todo, index, event) => {
    let { todos } = this.state;
    todos[index].complete = !todo.complete;
    this.setState({ todos });
  };

  deleteTodo = index => {
    this.state.todos.splice(index, 1);

    this.setState((prevState, props) => {
      return { todos: this.state.todos };
    });
  };

  remaining = () => {
    return this.state.todos.filter(todo => !todo.complete).length;
  };

  anyRemaining = () => {
    return this.remaining() !== 0;
  };

  showClearCompletedBtn = () => {
    return this.state.todos.filter(todo => todo.complete).length;
  };

  clearComplete = () => {
    this.setState((prevState, props) => {
      return {
        todos: prevState.todos.filter(todo => !todo.complete),
        filter: "all"
      };
    });
  };

  updateFilter = filter => {
    this.setState({ filter });
  };

  todosFiltered = () => {
    if (this.state.filter === "all") {
      return this.state.todos;
    }
    if (this.state.filter === "active") {
      return this.state.todos.filter(todo => !todo.complete);
    }
    if (this.state.filter === "completed") {
      return this.state.todos.filter(todo => todo.complete);
    }
  };
  markAllCompleted = event => {
    event.persist();

    let { todos } = this.state;

    todos.forEach(todo => (todo.complete = event.target.checked));
    this.setState({ todos });
  };

  todoInputEl = React.createRef();
  state = {
    autoIncretment: 6,
    filter: "all",
    todos: [
      {
        id: 1,
        title: "Wake up",
        complete: false,
        editing: false
      },
      {
        id: 2,
        title: "Eat breakfast",
        complete: true,
        editing: false
      },
      {
        id: 3,
        title: "Go to work",
        complete: true,
        editing: false
      },
      {
        id: 4,
        title: "Daily Scrum",
        complete: false,
        editing: false
      },
      {
        id: 5,
        title: "Pay bills",
        complete: true,
        editing: false
      },
      {
        id: 6,
        title: "Start project discission",
        complete: false,
        editing: false
      }
    ]
  };
}

export default Todo;
