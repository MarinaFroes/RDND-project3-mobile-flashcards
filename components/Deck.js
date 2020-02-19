import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { gainsboro } from '../utils/color'

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
    justifyContent: 'center',
    marginTop: 10,
    height: 120,
    backgroundColor: gainsboro,
  },
})
