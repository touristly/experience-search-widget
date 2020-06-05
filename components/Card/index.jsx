import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const ellipsis = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
};

const styles = StyleSheet.create({
  card: {
    width: hp("20%"),
    marginRight: "15px",
    marginBottom: "15px"
  },
  image: {
    borderTopRightRadius: "4px",
    borderTopLeftRadius: "4px",
    width: hp("20%"),
    height: hp("21%")
  },
  info: {
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
    borderRadius: "4px",
    padding: "15px"
  },
  title: {
    fontWeight: 400,
    fontSize: hp("1.7%"),
    minHeight: hp("9%"),
    lineHeight: hp("2.2%"),
    color: "#333333"
  },
  price: {
    textAlign: "right",
    marginTop: hp("0.8%"),
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "baseline"
  },
  currency: {
    fontSize: hp("1.3%"),
    marginRight: "5px"
  },
  amount: {
    fontSize: 20,
    fontSize: hp("1.9%"),
    fontWeight: 500
  },
  cardMobile: {
    width: "100%",
    marginRight: "15px",
    marginBottom: "15px"
  },
  infoMobile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 0
  },
  titleMobile: {
    // fontWeight: 400,
    fontSize: hp("2.0%"),
    width: "80%",
    minHeight: hp("5%"),
    lineHeight: hp("2.9%"),
    color: "#333333"
  },
  priceMobile: {
    textAlign: "right",
    fontWeight: "bold",
    width: "20%",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end"
  },
  amountMobile: {
    fontSize: hp("1.9%"),
    fontWeight: 600
  }
});

const Card = ({
  isMobile = false,
  title = "Small-Group Historical Malacca Day Tour from Kuala Lumpur"
}) => {
  return isMobile ? (
    <View style={styles.cardMobile}>
      <View style={styles.infoMobile}>
        <Text style={styles.titleMobile}>{title}</Text>
        <View style={styles.priceMobile}>
          <Text style={styles.currency}>MYR</Text>
          <Text style={styles.amountMobile}>200</Text>
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source="https://images.unsplash.com/photo-1507868162883-6b769c1a88c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.price}>
          <Text style={styles.currency}>MYR </Text>
          <Text style={styles.amount}>200</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
