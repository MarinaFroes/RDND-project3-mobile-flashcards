import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { skyblue } from '../utils/color'

const Deck = ({ deckTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{deckTitle}</Text>
    </View>
  )
}

export default Deck

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: skyblue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '85%',
  },
  text: {
    fontSize: 22,
  }
})
