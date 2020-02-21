import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'

import { gray } from '../utils/color'
import Loading from './Loading'
import DeckPreview from './DeckPreview'
// import { handleReceiveDecks } from '../actions/decks'
import { receiveDecks } from '../actions'
import { getDecks, clearStorage } from '../utils/api'

export class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    
    // dispatch(handleReceiveDecks())
    getDecks().then((decks) => dispatch(receiveDecks(decks)))
  }

  handleClearStorage = () => {
    return clearStorage()
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
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => this.handleClearStorage()}
          >
            <FontAwesome
              name='times'
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
