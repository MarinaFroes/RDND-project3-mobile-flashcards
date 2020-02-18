import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export class NewDeck extends Component {
  state = {
    text: ''
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
        <Text style={{ padding: 10, fontSize: 42 }}>
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
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
})