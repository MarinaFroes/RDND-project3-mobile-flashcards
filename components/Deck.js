import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'

import { gray } from '../utils/color'
import Card from './Card'
import Loading from './Loading'
import { removeDeck } from '../utils/api'
import { deleteDeck } from '../actions/index'

class Deck extends Component {
  onPress = () => {
    const deck_id = this.props.route.params.deck_id
    const deck = this.props.decks[deck_id]

    if (deck.questions.length === 0) {
      return alert('Add cards to start a quiz')
    }

    return this.props.navigation.navigate('Quiz', {
      deck_id
    })
  }

  handleDelete = () => {
    const deck_id = this.props.route.params.deck_id
    this.props.dispatch(deleteDeck(deck_id))
    removeDeck(deck_id)

    return this.props.navigation.navigate('Decks')
  }

  render() {
  const deck_id = this.props.route.params.deck_id
  const deck = this.props.decks[deck_id]
  
  if (!deck) {
    return <Loading />
  }

  return (
    <ScrollView>
      <TouchableOpacity style={styles.trash} onPress={this.handleDelete}>
        <FontAwesome  name='trash-o' size={30} color={gray} />
      </TouchableOpacity>
      
      <View style={styles.deckHeader}>
        <Text style={styles.title}>
          {deck.title}
        </Text>
        <Text style={styles.text}>{deck.questions.length} cards</Text>
      </View>
      <Button
        onPress={() => this.props.navigation.navigate('New Card', {
          deck_id
        })}
        title='Add new card'
      />  
      <Button
        onPress={this.onPress}
        title='Start quiz'
      />  
      <View>
        <Text style={styles.subtitle}>
          Cards added to this deck:
        </Text>
        {
          deck.questions.length === 0
            ? (
              <View style={styles.noCardsContainer}>
                <Text style={styles.noCardsMessage}>You don't have any cards yet</Text>
                <Text style={styles.noCardsMessage}>Add a card to be able to start a quiz</Text>
              </View>
            )
            : deck.questions.map((card, index) => (
              <Card
                key={index}
                card={card}
                deck={deck}
                index={index}
              />
            ))
        }
      </View>
    </ScrollView>
  )
  }
}

function mapStateToProps(state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
  trash: {
    alignSelf: 'flex-end',
    margin: 10,
  },
  deckHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    height: 120,
  },
  deckHeader: {
    padding: 40,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
  },
  subtitle: {
    fontSize: 22,
    textAlign: 'center',
    padding: 10,
    marginTop: 20,
  },
  noCardsMessage: {
    textAlign: 'center',
    fontSize: 20,
    color: gray
  },
  noCardsContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 200,
  }
})

