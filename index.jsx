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

const Panel = ({ isMobile }) => {
  return (
    <View style={[isMobile ? styles.panel : { ...styles.panel, ...styles.deskPanel }]}>
      <View>
        <Text style={styles.panelTitle}>All Activities</Text>
        <Text style={styles.panelDesc}>Browse all activities and experiences</Text>
        <View style={styles.chipCont}>
          <Chip />
          <Chip />
          <Chip />
          <Chip />
        </View>
      </View>
      <View>
        <Text style={styles.panelTitle}>Explore more location</Text>
        <Text style={styles.panelDesc}>Check out the best locations for your next vacation</Text>
        <View style={styles.panelCont}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </View>
      </View>
      <View>
        <Text style={styles.panelTitle}>Best Activities near you</Text>
        <Text style={styles.panelDesc}>Most popular activities booked by travelers</Text>
        <View style={styles.panelCont}>
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
  const [isMobile, setIsMobile] = useState(false)
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

  const onLayout = v => {
    const { nativeEvent: { layout: { width } } } = v

    if (width <= '768') {
      console.log('mobile');
      setIsMobile(true)
    }
  }

  const searchBtn = (
    <TouchableHighlight disabled={disableBtn} style={styles.searchBtn} >
      <Text style={styles.searchText}>Search</Text>
    </TouchableHighlight>
  )

  // document.body.addEventListener("click", () => setSearchActive(false))

  return (
    <View style={styles.searchBox} onLayout={(v) => onLayout(v)}>
      <View style={styles.searchWrapper}>
        <View style={styles.inputSearchWrapper}>
          <TextInput placeholderTextColor='#C5C9D0' spellcheck onChangeText={(e) => searchQueryEntered(e)} type='search' placeholder='Search by activity or attraction' style={styles.inputBox} />
          {!isMobile && searchBtn}
        </View>
        {searchActive && <Panel isMobile={isMobile} />}
      </View>
    </View>
  )
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('app') });