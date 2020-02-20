import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { steelblue, black } from '../utils/color'

export default function FloatBtn({onPress}) {
  return (
    <TouchableOpacity
      style={styles.floatBtn}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name='plus-circle'
        size={80}
        color={steelblue}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  floatBtn: {
    position: 'absolute',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})