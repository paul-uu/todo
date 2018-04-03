import React from 'react';
import generateId from '../utilities/generateId';
import actionCreators from '../actions';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { store } = this.props;
    store.dispatch(actionCreators.addTodo({
      text: this.input.value,
      id: generateId(),
      complete: false
    }))


    this.input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='todoForm'>
        <input 
          type="text" 
          ref={(input) => this.input = input}
          placeholder='Add Todo' />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TodoForm;