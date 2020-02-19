import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { mediumvioletred, white } from '../utils/color'

const Btn = ({ children, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  )
}

export default Btn

const styles = StyleSheet.create({
  btn: {
    backgroundColor: mediumvioletred,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  text: {
    color: 'white',
    textAlign: 'center',
  }
})


