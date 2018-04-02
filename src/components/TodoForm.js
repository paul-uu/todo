import React from 'react';
import generateId from '../utilities/generateId';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo({ 
      text: this.state.value,
      id: generateId()
    });
    this.state.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='todoForm'>
        <input 
          type="text" 
          value={this.state.value} onChange={this.handleChange} 
          placeholder='Add Todo' />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TodoForm;