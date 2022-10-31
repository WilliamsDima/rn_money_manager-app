import React, { createContext, FC } from 'react'

const store = {
  themeApp: 'light',
  setThemeApp: (value) => {}
}

export const AppContext = createContext(store)

export const AppContextProvider: FC = (props) => (
  <AppContext.Provider value={props.store}>
    {props.children}
  </AppContext.Provider>
)
