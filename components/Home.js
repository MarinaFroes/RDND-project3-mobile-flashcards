import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DeckList from './DeckList'
import NewDeck from './NewDeck'
import Card from './Card'

const Stack = createStackNavigator()

export class Home extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Decks'
            component={DeckList}
          />
          <Stack.Screen
            name='New Deck'
            component={NewDeck}
          />
          <Stack.Screen
            name='Card'
            component={Card}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Home
