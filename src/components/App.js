import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  addTodo(todo) {
    this.state.todos.push(todo);
    this.setState({ todos: this.state.todos });
  }

  removeTodo(todoId) {
    let filteredTodos = this.state.todos.filter(todo => todo.id !== todoId);
    this.setState({ todos: filteredTodos });
  }

  render() {
    return (
      <div className="App">
        <TodoForm
          addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.todos} 
          removeTodo={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
