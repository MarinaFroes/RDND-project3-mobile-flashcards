import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/index'
import middleware from './middleware/index'
import Home from './components/Home'

const store = createStore(reducer, middleware)

function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    </Provider>
  )
}

export default App