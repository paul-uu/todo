import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/css/index.css';
import 'typeface-roboto'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('root')
  );
});

registerServiceWorker();
