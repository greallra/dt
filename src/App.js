import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import MainRouter from './router/MainRouter';

const store = configureStore();
function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
          <MainRouter />
      </ReduxProvider>
    </div>
  );
}

export default App;
