import React, { Component } from 'react';
import './App.css';
import { createStore } from  'redux';
import { Provider } from  'react-redux'; 
import Result from './Containers/Result';
import Reducer from './Reducers';


const  store = createStore(Reducer);
//createStore, the global state of the application

class App extends Component {
  render() {
    return (
      //Provider that provide the store
      <Provider store={store}>
        <div className="App">
        <Result />
            
        </div>
      </Provider>
    );
  }
}

export default App;
