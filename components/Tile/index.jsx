import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  tile: {
    cursor: 'pointer',
    marginTop: '5px',
    marginRight: '15px',
    width: '120px',
    height: '120px',
    color: 'white',
    position: 'relative'
  },
  tileImg: {
    borderRadius: '5px',
    width: '120px',
    height: '120px'
  },
  tileTitle: {
    color: 'white',
    position: 'absolute',
    bottom: '10',
    left: '0',
    right: '0',
    textAlign: 'center',
    fontWeight: '500',
    textTransform: 'capitalize'
  }
})

const Tile = () => {
  return (
    <View style={styles.tile}>
      <Image style={styles.tileImg} source="https://images.unsplash.com/photo-1507868162883-6b769c1a88c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80" />
      <Text style={styles.tileTitle}>sample</Text>
    </View>
  )
}

export default Tile