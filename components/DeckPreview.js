import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import { gainsboro } from '../utils/color'

function DeckPreview({ decks, deck_id }) {
  return (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck', {
      deck_id,
    })}>
      <View style={styles.deck}>
        <Text style={styles.deckTitle}>{decks[deck_id].title}</Text>
        <Text style={styles.text}>{decks[deck_id].questions ? decks[deck_id].questions.length : 0} cards</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DeckPreview

const styles = StyleSheet.create({
  deckTitle: {
    fontSize: 22,
    textAlign: 'center',
    padding: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  deck: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 10,
    height: 120,
    backgroundColor: gainsboro,
  },
})
