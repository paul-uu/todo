import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';

const App = (props) => {
  return (
    <MuiThemeProvider>
      <Paper className='App App--Paper' zDepth={2}>
        <TodoForm />
        <TodoList />
        <Footer />
      </Paper>
    </MuiThemeProvider>
  )
}

export default App;
