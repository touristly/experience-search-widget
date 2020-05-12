import React, { useState } from 'react'
import {
  AppRegistry,
  View,
  Text,
  Button,
  TouchableHighlight,
  TextInput
} from 'react-native';

import { Chip, Card, Tile } from './components'
import styles from './style'

const Panel = () => {
  return (
    <View style={styles.panel}>
      <View>
        <Text style={styles.panelTitle}>All Activities</Text>
        <Text style={styles.panelDesc}>Browse all activities and experiences</Text>
        <View style={styles.panelComp}>
          <Chip />
          <Chip />
          <Chip />
          <Chip />
        </View>
      </View>
      <View>
        <Text style={styles.panelTitle}>Explore more location</Text>
        <Text style={styles.panelDesc}>Check out the best locations for your next vacation</Text>
        <View style={styles.panelComp}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </View>
      </View>
      <View>
        <Text style={styles.panelTitle}>Best Activities near you</Text>
        <Text style={styles.panelDesc}>Most popular activities booked by travelers</Text>
        <View style={styles.panelComp}>
          <Card />
          <Card />
          <Card />
          <Card />

        </View>
      </View>
    </View>
  )
}

const ReactNativeWeb = () => {
  const [searchActive, setSearchActive] = useState(true)
  const [disableBtn, setDisableBtn] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const searchQueryEntered = value => {
    if (!value.length) {
      setSearchActive(false)
    } else {
      setSearchActive(true)
      setDisableBtn(false)
      setSearchQuery(value);
    }
  }
  
  // document.body.addEventListener("click", () => setSearchActive(false))

  return (
    <View style={styles.searchBox}>
      <View style={styles.searchWrapper}>
        <View style={styles.inputSearchWrapper}>
          <TextInput placeholderTextColor='#C5C9D0' spellcheck onChangeText={(e) => searchQueryEntered(e)} type='search' placeholder='Search by activity or attraction' style={styles.inputBox} />
          <TouchableHighlight disabled={disableBtn} style={styles.searchBtn} >
            <Text style={styles.searchText}>Search</Text>
          </TouchableHighlight>
        </View>
        {searchActive && <Panel />}
      </View>
    </View>
  )
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('app') });