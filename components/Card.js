import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { skyblue, white } from '../utils/color'

import Button from './Button'

export class Card extends Component {
  onPress = () => {
    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}> Card </Text>
          <Button onPress={this.onPress}>
            <Text>Flip card</Text>
          </Button>
        </View>
      </View>
    )
  }
}


export default Card

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: '30%',
    width: '90%',
    backgroundColor: skyblue,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 22,
    textAlign: 'center'
  }
})
