import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    minHeight: hp("6%"),
    color: "#212124",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  },
  title: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontWeight: 300,
    fontSize: hp("1.7%"),
    width: "80%",
    float: "left"
  },
  city: {
    fontWeight: 500,
    float: "right",
    fontSize: hp("1.7%")
  }
});

const List = ({ activities = [] }) => {
  return (
    <View>
      <FlatList
        data={activities}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.city}>{item.city}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default List;
