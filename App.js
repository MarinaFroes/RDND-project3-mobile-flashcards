import 'react-native-gesture-handler'

import React from 'react'
// import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Card from './components/Card'
import NewCard from './components/NewCard'
import Deck from './components/Deck'
import Quiz from './components/Quiz'

const Stack = createStackNavigator()

import reducer from './reducers/index'
import middleware from './middleware/index'
// import Home from './components/Home'

const store = createStore(reducer, middleware)

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Decks">
          <Stack.Screen
            name='Decks'
            component={DeckList}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name='New Deck'
            component={NewDeck}
          />
          <Stack.Screen
            name='Deck'
            component={Deck}
          />
          <Stack.Screen
            name='New Card'
            component={NewCard}
          />
          <Stack.Screen
            name='Card'
            component={Card}
          />
          <Stack.Screen
            name='Quiz'
            component={Quiz}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App