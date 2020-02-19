import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { skyblue } from '../utils/color'

const Deck = ({ deckTitle }) => {
  return (
    <View style={styles.deck}>
      <Text style={styles.text}>{deckTitle}</Text>
    </View>
  )
}

export default Deck

const styles = StyleSheet.create({
  
  text: {
    fontSize: 22,
    textAlign: 'center'
  },
  deck: {
    flex: 1,
    margin: 10,
    padding: 50,
    backgroundColor: skyblue,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})
