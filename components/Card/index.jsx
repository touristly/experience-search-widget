import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native'


const ellipsis = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const styles = StyleSheet.create({
  deskCard: {
    cursor: 'pointer',
    color: '#333333',
    backgroundColor: 'white',
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.16)',
    borderRadius: '4px',
    width: '20%',
    marginRight: '20px',
  },
  mobileCard: {
    width: '100%',
  },
  mobileTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'row',
    paddingLeft: 0,
    padding: '10px',
    borderBottomColor: '#F7F9FC',
    borderBottomWidth: '1px'
  },
  cardImg: {
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    height: '300px',
    width: '100%'
  },
  mobileTitle: {
    ...ellipsis,
    paddingLeft: 0,
    width: '60%',
  },
  title: {
    ...ellipsis,
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
  mobilePriceWrapper: {
    display: 'inline-block'
  },
  priceCurrency: {
    fontSize: '1em'
  },
  mobilePrice: {
    paddingLeft: '5px',
    fontWeight: 'bold',
  },
  price: {
    fontSize: '1.2em',
    paddingLeft: '5px',
    fontWeight: 'bold'
  }
})

const Card = ({ imgUrl, title, link }) => {
  const [isMobile, setIsMobile] = useState(false)

  const onLayout = v => {
    const { nativeEvent: { layout: { width } } } = v

    if (width <= '768') {
      console.log('mobile');
      setIsMobile(true)
    }
  }

  return (
    <View style={isMobile ? styles.mobileCard : styles.deskCard} onLayout={(v) => onLayout(v)}>
      {!isMobile && <Image style={styles.cardImg} source="https://images.unsplash.com/photo-1507868162883-6b769c1a88c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80" />}
      <View style={styles.mobileTitleWrapper}>
        <Text style={isMobile ? styles.mobileTitle : styles.title}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet odio deserunt dolores dicta expedita reiciendis perspiciatis nostrum, optio cupiditate voluptatem eos aut quisquam iste modi sapiente. Corporis, ad molestiae!
        </Text>
        <View style={isMobile ? styles.mobilePriceWrapper : styles.priceWrapper}>
          <Text style={isMobile && styles.mobilePrice}>MYR</Text>
          <Text style={isMobile ? styles.mobilePrice : styles.price}>200</Text>
        </View>
      </View>
    </View>
  )

}

export default Card