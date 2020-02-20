import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import { white, gainsboro } from '../utils/color'
import { connect } from 'react-redux'

import { handleSaveDeckTitle } from '../actions/decks'
import { generateUID } from '../utils/_DATA'
import Btn from './Btn'

export class NewDeck extends Component {
  state = {
    deckTitle: '',
    toDeck: false,
  }

  onPress = () => {
    const { dispatch, navigation } = this.props
    const { deckTitle } = this.state
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
          placeholder="My Deck"
          onChangeText={(deckTitle) => this.setState({ deckTitle })}
          value={deckTitle}
          multiline={true}
        />
        <Btn
          onPress={this.onPress}
        >
          <Text> Create deck </Text>
        </Btn>
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
    backgroundColor: gainsboro,
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