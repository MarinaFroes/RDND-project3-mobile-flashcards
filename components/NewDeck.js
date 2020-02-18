import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableHighlight } from 'react-native'

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
        <Text> New Deck </Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Deck title"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress}
        >
          <Text> Create deck </Text>
        </TouchableHighlight>
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
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
})