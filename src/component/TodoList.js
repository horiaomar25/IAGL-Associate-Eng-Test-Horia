import React, {Component} from "react";
import Todo from "./Todo";
import {fetchTodos} from "../actions";
import {connect} from "react-redux";
import AddToDo from "./addToDo";

class TodoList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const {todos} = this.props.data;
    return (
      <>
      
      <AddToDo />
      <section className="todo-container">
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
          return <Todo key={`todo-${index}`} todo={todo.task}/>;
        })
        : "No todos, yay!"}
    </ul></section></>);
  }
}

const mapStateToProps = ({data = {}, isLoadingData = false}) => ({
  data,
  isLoadingData
});
export default connect(
  mapStateToProps,
  {
    fetchTodos
  }
)(TodoList);