import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'

const styles = StyleSheet.create({
  card: {
    cursor: 'pointer',
    color: '#333333',
    backgroundColor: 'white',
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.16)',
    borderRadius: '4px',
    width: '20%',
    marginRight: '20px',
  },
  cardImg: {
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    height: '300px',
    width: '100%'
  },
  title: {
    overflow: 'hidden',
    padding: '15px',
    textTransform: 'capitalize',
    fontFamily: 'DM Sans',
    lineHeight: '20px',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1.2em',
  },
  priceWrapper: {
    marginTop: '10px',
    textAlign: 'right',
    display: 'inline-block'
  },
  priceCurrency: {
    fontSize: '1em'
  },
  price: {
    fontSize: '1.2em',
    paddingLeft: '5px',
    fontWeight: 'bold'
  }
})

const Card = ({ imgUrl, title, link }) => {

  return (
    <View style={styles.card}>
      <Image style={styles.cardImg} source="https://images.unsplash.com/photo-1507868162883-6b769c1a88c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80" />
      <View style={styles.title}>
        <Text style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          Small-Group Historical Malacca Day Tour from Kuala Lumpur
        </Text>
        <View style={styles.priceWrapper}>
          <Text>MYR</Text>
          <Text style={styles.price}>200</Text>
        </View>
      </View>
    </View>
  )

}

export default Card