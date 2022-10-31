import React, { FC } from 'react'
import { Provider } from 'react-redux'
import Routes from './src/navigation/routes'
import { store } from './src/store/index'
import SplashScreen from 'react-native-splash-screen'

const App: FC = () => {

  React.useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
