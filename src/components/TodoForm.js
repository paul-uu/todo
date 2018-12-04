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
      todo: '',
      hasError: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.enterKeySubmit = this.enterKeySubmit.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.enterKeySubmit, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.enterKeySubmit, false);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.todo.length > 0) {
      const { dispatch } = this.props;
      dispatch(addTodo({
        text: this.state.todo,
        isComplete: false,
        createdOn: new Date()
      }));
      this.setState({ todo: '', hasError: false });
    }
    else {
      this.setState({ hasError: true })
    }
  }

  enterKeySubmit(e) {
    if (e.keyCode === 13 && this.state.todo)
      this.handleSubmit();
  }

  handleInputChange(e) {
    this.setState({ 
      todo: e.target.value,
      hasError: false
    });
  }

  render() {
    const hasError = this.state.hasError;
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <TextField 
          className='todo-form__input'
          error={hasError}
          onChange={this.handleInputChange}
          value={this.state.todo}
          label={hasError ? 'Please add a new todo' : 'Add new todo'}
          margin='normal'
        />
        <Button type='submit' variant='contained' color='default'>Add Todo</Button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(TodoForm);