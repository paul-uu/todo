import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';
import '../App.css';

const App = (props) => {
  return (
    <MuiThemeProvider>
      <div className="App">
        <TodoForm />
        <TodoList />
        <Footer />
      </div>
    </MuiThemeProvider>
  )
}

export default App;
