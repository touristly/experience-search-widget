import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  chip: {
    cursor: "pointer",
    border: "1px solid #d9dbe0",
    borderRadius: "40px",
    height: hp("3.6%"),
    paddingLeft: "15px",
    paddingRight: "15px",
    marginRight: "15px",
    marginBottom: hp("1.4"),
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  tileTitle: {
    fontSize: hp("1.7")
  },
  img: {
    height: hp("1.7"),
    width: hp("1.7"),
    marginRight: "8px"
  }
});

const Chip = ({ title = "Activities & experiences", slug = "" }) => (
  <View style={styles.chip}>
    <Image style={styles.img} source={`../../static/images/${slug}.svg`} />
    <Text style={styles.tileTitle}>{title}</Text>
  </View>
);

export default Chip;
