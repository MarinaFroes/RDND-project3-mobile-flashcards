import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Card from './components/Card'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DeckList}
        />
        <Stack.Screen name="New Deck" component={NewDeck} />
        <Stack.Screen name="Card" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
{/* <Stack.Screen
  name="Home"
  component={DeckList}
  options={{ title: 'Welcome' }}
/> */}