import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import generateId from '../utilities/generateId';
import { addTodo } from '../actions';

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
          type='text'
          onChange={this.handleInputChange}
          value={this.state.todo}
          floatingLabelText="Add new todo"
        />
        <RaisedButton label="Add Todo" onClick={this.handleSubmit} primary={true} />
      </form>
    );
  }
}

TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(TodoForm);