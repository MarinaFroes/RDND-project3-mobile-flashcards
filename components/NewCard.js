import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Picker, Button } from 'react-native'
import { connect } from 'react-redux'

import { white } from '../utils/color'
// import { handleUpdateDecks } from '../actions/decks'
// import { handleAddCard } from '../actions/cards'
import { addCardToDeckAction } from '../actions'
import { addCardToDeck } from '../utils/api'


class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  onPress = () => {
    const { dispatch, navigation } = this.props
    const { question, answer } = this.state
    const deck_id = this.props.route.params.deck_id

    if (question === '' || answer === '') {
      return alert('Please, add question and answer')
    }

    const card = {
      deck_id,
      question,
      answer
    }
    
    dispatch(addCardToDeckAction(card))
    addCardToDeck(card)

    // dispatch(handleAddCard(card))
    // dispatch(handleUpdateDecks())

    this.setState({
      question: '',
      answer: '',
    })

    return navigation.navigate('Deck', {
      deck_id
    })
  }

  render() {
    const { question } = this.state

    return (
      <View style={styles.container}>
        
        <TextInput
          style={styles.textInput}
          placeholder="Type here your question"
          onChangeText={question => this.setState({ question })}
          value={question}
          multiline={true}
        />
        
        <Button
          title="Create card"
          onPress={this.onPress}
        />
          
        <Picker
          selectedValue={this.state.answer}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ answer: itemValue })
          }>
          <Picker.Item label="Correct" value="correct" />
          <Picker.Item label="Incorrect" value="incorrect" />
        </Picker>
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
    backgroundColor: white,
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    marginBottom: 10,
  }
})