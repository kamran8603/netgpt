import React from 'react'
import Body from './compoennet/Body'
import appStore from './utils/appStore'
import { Provider } from 'react-redux'

function App() {
  return (
    <div>
        <Provider store={appStore}>
        <Body/>
        </Provider>
  

    </div>
  )
}

export default App
