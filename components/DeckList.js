import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
// import { white, mediumvioletred } from '../utils/color'

// import Deck from './Deck'
// import Btn from './Btn'
import DeckPreview from './DeckPreview'
import FloatBtn from './FloatBtn'
import { handleReceiveDecks } from '../actions/decks'

export class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleReceiveDecks())
  }

  render() {
    // console.warn('----DECK LIST----')
    // console.warn(this.props.decks)
    const { decksIds, decks, navigation } = this.props

    return (
      <View>
        <ScrollView>
          <Text style={styles.header}>Here is your decks list:</Text>
          {
            decksIds !== null
              ? decksIds.map(deck_id => (
                <DeckPreview
                  key={deck_id}
                  deck_id={deck_id}
                  decks={decks}
                  navigation={navigation}
                />
              ))
              : <Text>You don't have any deck yet</Text>
          }
        </ScrollView>
        <View>
          <FloatBtn onPress={() => navigation.navigate('New Deck')}/>
        </View>
     </View>
    )
  }
}

function mapStateToProps({ decks }) {
  const decksIds = decks ? Object.keys(decks) : null

  return { 
    decks,
    decksIds
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