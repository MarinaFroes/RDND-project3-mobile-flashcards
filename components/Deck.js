import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { gray } from '../utils/color'
import Card from './Card'
import Loading from './Loading'

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

  render() {
  const deck_id = this.props.route.params.deck_id
  const deck = this.props.decks[deck_id]
  
  if (!deck) {
    return <Loading />
  }

  return (
    <ScrollView>
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
  console.log('---DECK---')
  console.log(state)
  console.log('---END OF DECK---')
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
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

