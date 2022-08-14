import React, { FC } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './src/navigation/routes';
import { store } from './src/store/index'

const App: FC = () => {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
