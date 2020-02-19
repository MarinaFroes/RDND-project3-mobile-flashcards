import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { white, mediumvioletred } from '../utils/color'

import Deck from './Deck'
import Btn from './Btn'

export class DeckList extends Component {
  render() {
    console.log(this.props.decks)
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <FlatList
            data={[
              { title: 'React' },
              { title: 'JavaScript' },
              { title: 'Redux' },
              { title: 'React Native' }
            ]}
            renderItem={({ item }) => <Deck  deckTitle={item.title}/>}
          /> */}
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Btn
            onPress={() => this.props.navigation.navigate('New Deck')}
          >
            <Text>Create deck</Text>
          </Btn>
          <Btn
            onPress={() => this.props.navigation.navigate('New Card')}
          >
            <Text>Create card</Text>
          </Btn>
        </View>
      </ScrollView>
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
  },
})
