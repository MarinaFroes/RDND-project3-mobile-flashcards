import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Quiz extends Component {
  render() {
    return (
      <View>
        <Text> Quiz </Text>
        <Text> {this.props.route.params.deck_id} </Text>
      </View>
    )
  }
}

export default Quiz
