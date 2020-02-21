import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { gray } from '../utils/color'
import Loading from './Loading'
import DeckPreview from './DeckPreview'
import { receiveDecks } from '../actions'
import { getDecks } from '../utils/api'

export class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    
    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
  }

  render() {
    const { decksIds, decks, navigation, loading } = this.props

    if (loading === true) {
      return <Loading />
    }
 
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Deck list
          </Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('New Deck')}
          >
            <MaterialCommunityIcons
              name='plus'
              size={40}
              color={gray}
            />
          </TouchableOpacity>
        </View>
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
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  const decksIds = state ? Object.keys(state) : null
  console.log('---DECK LIST---')
  // console.log(state)
  console.log(state)
  console.log('---END OF DECK LIST---')
  return { 
    loading: state === null ? true : false,
    decks: state,
    decksIds
  }
}

export default connect(mapStateToProps)(DeckList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
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
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  addButton: {
    width: 40,
    height: 40,
  }
})
