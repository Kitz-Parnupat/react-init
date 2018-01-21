import React, { Component } from 'react';
import AppRoute from './AppRoute';
import {Provider} from 'react-redux';
import {createStore,compose} from 'redux';
import reducer from './reducers/main';
window.basedURL = 'http://localhost:3000/api/v1/';

const store = createStore(reducer,compose(
  window.devToolsExtension
      ? window.devToolsExtension()
      : v => v
  ));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppRoute/>
        </Provider>
      </div>
    );
  }
}

export default App;
