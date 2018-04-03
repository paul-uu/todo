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

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  addTodo(todo) {
    this.state.todos.push(todo);
    this.setState({ todos: this.state.todos });
  }

  removeTodo(todoId) {
    let filteredTodos = this.state.todos.filter(todo => todo.id !== todoId);
    this.setState({ todos: filteredTodos });
  }

  toggleTodo(todoId) {
    let updatedTodos = this.state.todos.map(todo => 
      todo.id !== todoId ? todo : Object.assign(todo, {complete: !todo.complete}) 
    )
    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <div className="App">
        <TodoForm
          addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos} 
          removeTodo={this.removeTodo} 
          toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
