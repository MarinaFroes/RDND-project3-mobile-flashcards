import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white, gainsboro } from '../utils/color'
import { handleUpdateDecks } from '../actions/decks'
import { handleAddCard } from '../actions/cards'

import Btn from './Btn'

class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  onPress = () => {
    const { dispatch, navigation } = this.props
    const { question, answer } = this.state
    const deck_id = this.props.route.params.deck_id

    const card = {
      deck_id,
      question,
      answer
    }

    dispatch(handleAddCard(card))
    dispatch(handleUpdateDecks())

    this.setState({
      question: '',
      answer: '',
    })

    return navigation.navigate('Deck', {
      deck_id
    })
  }

  render() {
    // console.warn(this.props.route.params.deck_id)
    const { answer, question } = this.state

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="My question"
          onChangeText={(question) => this.setState({ question })}
          value={question}
          multiline={true}
        />
        <TextInput
          style={styles.textInput}
          placeholder="My answer"
          onChangeText={(answer) => this.setState({ answer })}
          value={answer}
          multiline={true}
        />
        <Btn
          onPress={this.onPress}
        >
          <Text> Create card </Text>
        </Btn>
        {/* <Text style={{ padding: 10, fontSize: 20, color: 'red' }}>
          {this.state.question}
        </Text>
        <Text style={{ padding: 10, fontSize: 20, color: 'red' }}>
          {this.state.answer}
        </Text> */}
      </View>
     
    )
  }
}

export default connect()(NewCard)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: gainsboro,
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    marginBottom: 10,
  }
})