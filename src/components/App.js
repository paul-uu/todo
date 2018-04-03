import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../App.css';

import store from '../store';
import actionCreators from '../actions';

class App extends Component {

  componentDidMount() {
    const { store } = this.props;
    store.subscribe( () => this.forceUpdate() );
  }
  
  render() {
    return (
      <div className="App">
        <TodoForm store={this.props.store} />
        <TodoList store={this.props.store} />
      </div>
    );
  }
}

export default App;
