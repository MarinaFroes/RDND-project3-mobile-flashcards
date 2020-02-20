import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Card from './Card'
import Btn from './Btn'

export class Quiz extends Component {
  state = {
    index: 0,
    correctAnswers: 0,
  }

  onPress = (answer) => {
    const deck_id = this.props.route.params.deck_id
    const deck = this.props.decks[deck_id]
    const lastIndex = deck.questions.length
    const { index } = this.state

    if (answer === deck.questions[index].answer.toString()) {
      this.setState(prevState => {
        return {
          index: prevState.index < lastIndex ? prevState.index + 1 : prevState.index,
          correctAnswers: prevState.correctAnswers + 1
        }
      })
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index < lastIndex ? prevState.index + 1 : prevState.index,
          correctAnswers: prevState.correctAnswers
        }
      })
    }
  }

  handleRestartQuiz = () => {
    this.setState({
      index: 0,
      correctAnswers: 0
    })
  }

  render() {
    const deck_id = this.props.route.params.deck_id
    const deck = this.props.decks[deck_id]
    const { index, correctAnswers } = this.state

    return (
      <View style={styles.quizContainer}>
        {
          deck.questions[index]
            ? (
              <View>
                <Card
                  index={index}
                  deck={deck}
                  card={deck.questions[index]}
                />
                <View style={styles.btnContainer}>
                  <Btn onPress={() => this.onPress('correct')}>
                    <Text>Correct</Text>
                  </Btn> 
                  <Btn onPress={() => this.onPress('incorrect')}>
                    <Text>Incorrect</Text>
                  </Btn>
                </View>
              </View>
            ) : (
              <View style={styles.messageContainer}>
                <Text style={styles.finalMessage}>You finished the quiz</Text>
                <Text style={styles.finalMessage} >You got {(correctAnswers / deck.questions.length * 100).toFixed(2)}% of correct answers</Text>

                <Button title='Back to Deck' onPress={() => this.props.navigation.navigate('Deck', {
                  deck_id
                })} />

                <Button title='Restart quiz' onPress={this.handleRestartQuiz} />
              </View>
            )
        }
      </View>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    color: 'red'
  },
  finalMessage: {
    fontSize: 22,
    textAlign: 'center',
    margin: 20,
  },
  messageContainer: {
    height: 200,
  }
})