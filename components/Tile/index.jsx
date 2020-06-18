import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  tile: {
    cursor: "pointer",
    marginTop: "5px",
    marginRight: "15px",
    color: "white",
    position: "relative"
  },
  tileImg: {
    borderRadius: "5px",
    width: hp("16%"),
    height: hp("16%")
  },
  tileTitle: {
    color: "white",
    position: "absolute",
    bottom: 0,
    paddingBottom: 10,
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 57.3%, rgba(0, 0, 0, 0.351) 100%)",
    left: "0",
    right: "0",
    textAlign: "center",
    fontWeight: "500",
    fontSize: hp("1.8"),
    textTransform: "capitalize"
  }
});

const Tile = ({ city = "Langkawi", image = "" }) => {
  return (
    <View style={styles.tile}>
      <Image style={styles.tileImg} source={image} />
      <Text style={styles.tileTitle}>{city}</Text>
    </View>
  );
};

export default Tile;
