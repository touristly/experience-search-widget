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
    marginBottom: "15px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  tileTitle: {
    fontSize: hp("1.6")
  },
  img: {
    height: 18,
    width: 18,
    marginRight: "8px"
  }
});

const Chip = ({ title = "Activities & experiences" }) => (
  <View style={styles.chip}>
    <Image style={styles.img} source={"../../static/images/fandb.png"} />
    <Text style={styles.tileTitle}>{title}</Text>
  </View>
);

export default Chip;
