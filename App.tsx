import React, { FC } from 'react'
import { Provider } from 'react-redux'
import Routes from './src/navigation/routes'
import { store } from './src/store/index'
import SplashScreen from 'react-native-splash-screen'
import { StatusBar } from 'react-native'
import { COLORS } from './src/services/colors'


const App: FC = () => {

  React.useEffect(() => {

    SplashScreen.hide()
    console.log('app start')
  }, [])

  return (
    <Provider store={store}>
      <>

        <StatusBar 
        barStyle = "dark-content" 
        hidden = {false} 
        backgroundColor = {COLORS.colorHeader}
        translucent = {true}/>
        <Routes />
      </>
      
    </Provider>
  );
};

export default App;
