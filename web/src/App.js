import React from 'react'
import GlobalStyle from './theme/globalStyle';
import Routes from './routes'
import { Provider } from 'react-redux';
import store from './store/index';
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
