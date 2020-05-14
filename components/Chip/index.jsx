import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  chip: {
    cursor: 'pointer',
    color: '#75767A',
    padding: '10px',
    margin: '5px',
    fontWeight: '500',
    display: 'inline-block',
    textAlign: 'center',
    backgroundColor: 'white',
    mixBlendMode: 'normal',
    border: '1px solid #D9DBE0',
    boxSizing: 'border-box',
    borderRadius: '40px'
  },
  chipIcon: {
    marginRight: '5px',
  },
  chipTitle: {
    fontWeight: '500',
    textTransform: 'capitalize',
  }
})



const Chip = () => (
  <View style={styles.chip}>
    <Text style={styles.chipIcon}>icon</Text>
    <Text style={styles.chipTitle}>sample</Text>
  </View>
)

export default Chip