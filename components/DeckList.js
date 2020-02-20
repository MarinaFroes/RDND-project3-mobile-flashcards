import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { white, mediumvioletred } from '../utils/color'

import Deck from './Deck'
// import Btn from './Btn'
import FloatBtn from './FloatBtn'
import { handleReceiveDecks } from '../actions/decks'

export class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleReceiveDecks())
  }

  render() {
    console.log(this.props.decks)
    return (
      <View>
        <ScrollView>
          <Text style={styles.header}>Here is you decks list:</Text>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
          <Deck deckTitle="React"/>
        </ScrollView>
        <View>
          <FloatBtn onPress={() => this.props.navigation.navigate('New Deck')}/>
        </View>
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
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
})

{/* <Btn
            onPress={() => this.props.navigation.navigate('New Deck')}
          >
            <Text>Create deck</Text>
          </Btn>
          <Btn
            onPress={() => this.props.navigation.navigate('New Card')}
          >
            <Text>Create card</Text>
          </Btn> */}