import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { white, gainsboro } from '../utils/color'

import Btn from './Btn'

export class NewDeck extends Component {
  state = {
    text: ''
  }

  onPress = () => {
    // TODO
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="My Deck"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          multiline={true}
        />
        <Btn
          onPress={this.onPress}
        >
          <Text> Create deck </Text>
        </Btn>
        <Text style={{ padding: 10, fontSize: 20, color: 'red' }}>
          {this.state.text}
        </Text>
      </View>
    )
  }
}

export default NewDeck

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: gainsboro,
    width: '100%',
    height: 40,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  }
})