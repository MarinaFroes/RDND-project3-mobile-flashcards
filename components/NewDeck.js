import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import { white } from '../utils/color'
import { connect } from 'react-redux'

import { handleSaveDeckTitle } from '../actions/decks'
import { generateUID } from '../utils/_DATA'

export class NewDeck extends Component {
  state = {
    deckTitle: '',
    toDeck: false,
  }

  onPress = () => {
    const { dispatch, navigation } = this.props
    const { deckTitle } = this.state

    if (deckTitle === '') {
      return alert('Please, add a title')
    }

    const deck_id = generateUID()

    dispatch(handleSaveDeckTitle({ deckTitle, deck_id }))

    this.setState({
      deckTitle: ''
    })

    return navigation.navigate('Deck', {
      deck_id,
    })
  }

  render() {
    const { deckTitle } = this.state
    
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a deck title"
          onChangeText={(deckTitle) => this.setState({ deckTitle })}
          value={deckTitle}
          multiline={true}
        />
        <Button
          title='Create deck'
          onPress={this.onPress}
        />  
      </View>
    )
  }
}

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
  },
  successMessage: {
    fontSize: 22,
    textAlign: 'center'
  }
})

export default connect()(NewDeck)