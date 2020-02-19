import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'
import { connect } from 'react-redux'
import { white, mediumvioletred } from '../utils/color'

import Deck from './Deck'

export class DeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Deck List </Text>
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
          renderItem={({ item }) => <Deck deckTitle={item.key}/>}
        />

        <Button
          title="Create deck"
          onPress={() => this.props.navigation.navigate('New Deck')}
        />
        <Button
          title="Create card"
          onPress={() => this.props.navigation.navigate('Card')}
        />
      </View>
    )
  }
}

function mapStateToProps({ decks }) {
  return { 
    decks
  }
}

export default connect(mapStateToProps)(DeckList)

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
