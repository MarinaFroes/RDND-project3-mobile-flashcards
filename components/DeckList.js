import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Deck from './Deck'

export class DeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Deck List </Text>
        <Deck />
      </View>
    )
  }
}

export default DeckList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
})