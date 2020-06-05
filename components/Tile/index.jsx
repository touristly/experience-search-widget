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

const Tile = ({ city = "Langkawi" }) => {
  return (
    <View style={styles.tile}>
      <Image
        style={styles.tileImg}
        source="https://images.unsplash.com/photo-1507868162883-6b769c1a88c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80"
      />
      <Text style={styles.tileTitle}>{city}</Text>
    </View>
  );
};

export default Tile;
