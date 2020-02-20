import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { gray } from '../utils/color'
import Loading from './Loading'
import DeckPreview from './DeckPreview'
import FloatBtn from './FloatBtn'
import { handleReceiveDecks } from '../actions/decks'

export class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleReceiveDecks())
  }

  render() {
    const { decksIds, decks, navigation, loading } = this.props

    if (loading === true) {
      return <Loading />
    }
 
    return (
      <ScrollView style={{flex: 1}}>
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
              : (
                <View style={styles.noDeckContainer}>
                  <Text style={styles.noDeckMessage}>You don't have any deck yet</Text>
                </View>
              )
          }
        
        <FloatBtn onPress={() => navigation.navigate('New Deck')}/>
      </ScrollView>
    )
  }
}

function mapStateToProps({ decks }) {
  const decksIds = decks ? Object.keys(decks) : null

  return { 
    loading: decks === null ? true : false,
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
  noDeckMessage: {
    textAlign: 'center',
    fontSize: 22,
    color: gray
  },
  noDeckContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 200,
  },
})
