import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import generateId from '../utilities/generateId';
import { addTodo } from '../actions';
import PropTypes from 'prop-types';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.enterKeySubmit = this.enterKeySubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.enterKeySubmit, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.enterKeySubmit, false);
  }

  handleSubmit() {
    const { dispatch } = this.props;
    dispatch(addTodo({
      text: this.state.todo,
      id: generateId(),
      complete: false
    }))
    this.setState({ todo: '' });
  }

  enterKeySubmit(e) {
    if (e.keyCode === 13 && this.state.todo)
      this.handleSubmit();
  }

  handleInputChange(e) {
    this.setState({ todo: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form className='todoForm' onSubmit={this.onSubmit}>
        <TextField 
          onChange={this.handleInputChange}
          value={this.state.todo}
          label="Add new todo"
        />
        <Button variant='contained' onClick={this.handleSubmit} color='default'>Add Todo</Button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(TodoForm);