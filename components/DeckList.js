import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'
import { white, mediumvioletred } from '../utils/color'

import Deck from './Deck'

export class DeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Deck List </Text>

        <Deck />

        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />

        <Button
          title="Create deck"
          onPress={() => this.props.navigation.navigate('NewDeck', { name: 'Jane' })}
        />
      </View>
    )
  }
}

export default DeckList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    color: mediumvioletred,
  }
})

/**
 * function HomeScreen({navigation}) {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
  );
}
 */