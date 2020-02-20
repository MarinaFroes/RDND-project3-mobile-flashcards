import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { gray } from '../utils/color'

function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingMessage}>
        Loading...
      </Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  loadingMessage: {
    textAlign: 'center',
    fontSize: 22,
    color: gray
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 200,
  }
})
