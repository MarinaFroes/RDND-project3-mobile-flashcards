import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

// import { gainsboro } from '../utils/color'
// import Btn from './Btn'

class Deck extends Component {

  render() {
  const deck_id = this.props.route.params.deck_id
  const deck = this.props.decks[deck_id]
  
  if (!deck) {
    return <Text>Loading</Text>
  }

  return (
    <View style={styles.deck}>
      <View style={styles.card}>
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
        onPress={() => this.props.navigation.navigate('Quiz', {
          deck_id
        })}
        title='Start quiz'
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

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    height: 120,
  },
  card: {
    padding: 40,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
  title: {
    fontSize: 26,
    textAlign: 'center'
  }
  
})



/**
 * return (
    <div style={{border: '2px solid green'}}>
      <p>{deck.title}</p>
      <p>{deck.questions.length} cards </p>
      <Link to={{
        pathname: "/newcard",
        state: {
          deck_id: deck_id
        }
      }}>Add card</Link>

      <Link to={`/quiz/${deck_id}`}>Start quiz</Link>

      {
        deck.questions.length === 0
          ? <p>You don't have any cards yet</p>
          : deck.questions.map((card, index) => (
            <Card
              key={index}
              card={card}
              deck={deck}
              index={index}
            />
          ))
      }
    </div>
  )
 */