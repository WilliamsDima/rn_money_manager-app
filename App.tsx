import React, { FC } from 'react'
import { Provider } from 'react-redux'
import Routes from './src/navigation/routes'
import { store } from './src/store/index'
import SplashScreen from 'react-native-splash-screen'
import { AppContextProvider } from './src/context/App'
import { useState } from 'react'

const App: FC = () => {

  const [themeApp, setThemeApp] = useState('light')

  React.useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <AppContextProvider store={{themeApp, setThemeApp}}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </AppContextProvider>

  );
};

export default App;
