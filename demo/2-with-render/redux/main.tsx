import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { reduxStore } from './redux-store';
import { App } from './app-comp';

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);

setTimeout(() => {
  reduxStore.dispatch({ type: 'force', payload: { reduxNum: 7777 } });
}, 500);
setTimeout(() => {
  reduxStore.dispatch({ type: 'force', payload: { reduxStr: 'Hello' } });
}, 1000);
setTimeout(() => {
  reduxStore.dispatch({ type: 'force', payload: { reduxStr: 'Redux' } });
}, 1500);
