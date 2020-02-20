import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DeckList from './DeckList'
import NewDeck from './NewDeck'
import Card from './Card'
import NewCard from './NewCard'
import Deck from './Deck'

const Stack = createStackNavigator()

export class Home extends Component {
  render() {
    return (
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
            name='Card'
            component={Card}
          />
          <Stack.Screen
            name='New Card'
            component={NewCard}
          />
          <Stack.Screen
            name='Deck'
            component={Deck}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Home
