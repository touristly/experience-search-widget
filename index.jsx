import React, { useState, useEffect } from "react";
import {
  AppRegistry,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Dimensions
} from "react-native";

import { Chip, Card, Tile, List } from "./components";
import styles from "./style";
import style from "./newstyle";

const Panel = ({ isMobile = false, searchTerm = "" }) => {
  const contentStyle = isMobile ? style["content-mobile"] : style["content"];
  const cardContStyle = isMobile
    ? style["card-cont-mobile"]
    : style["card-cont"];
  console.log("contentStyle : ", isMobile);

  return (
    <View style={style["dropdown-cont"]}>
      <View style={contentStyle}>
        {searchTerm ? (
          <List />
        ) : (
          <>
            <Text style={style["title"]}>All Activities</Text>
            <Text style={style["subtitle"]}>
              Browse all activities and experiences
            </Text>
            <View style={style["chip-cont"]}>
              <Chip />
              <Chip />
              <Chip />
              <Chip />
            </View>

            <Text style={style["title"]}>Explore more location</Text>
            <Text style={style["subtitle"]}>
              Check out the best locations for your next vacation
            </Text>
            <View style={style["tile-cont"]}>
              <Tile />
              <Tile />
              <Tile />
              <Tile />
            </View>

            <Text style={style["title"]}>Best Activities near you</Text>
            <Text style={style["subtitle"]}>
              Most popular activities booked by travelers
            </Text>
            <View style={cardContStyle}>
              <Card isMobile={isMobile} />
              <Card isMobile={isMobile} />
              <Card isMobile={isMobile} />
              <Card isMobile={isMobile} />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const screenWidth = Math.round(Dimensions.get("window").width);
    console.log("screenWidth : ", screenWidth);

    if (screenWidth <= 768) setIsMobile(true);
  }, []);

  const searchQueryEntered = value => {
    console.log("Value : ", value);
    setSearchTerm(value);
  };

  const onLayout = v => {
    const { width } = v.nativeEvent.layout;
    setIsMobile(width <= "768" ? true : false);
  };
  console.log("Mobile or not : ", isMobile);

  // Desktop View
  return (
    <View onLayout={v => onLayout(v)}>
      {!isMobile ? (
        <View style={style["widget-cont"]}>
          <View style={style["search-box-cont"]}>
            <View style={style["input-box"]}>
              <TextInput
                placeholderTextColor="#747474"
                spellcheck
                onChangeText={e => searchQueryEntered(e)}
                type="search"
                placeholder="Search by activity or attraction"
                style={style["input"]}
              />
              <Panel isMobile={false} searchTerm={searchTerm} />
            </View>
            <TouchableHighlight style={style["button"]}>
              <Text style={style["button-text"]}>Search</Text>
            </TouchableHighlight>
          </View>
        </View>
      ) : (
        <View style={style["widget-cont"]}>
          <View style={style["search-box-cont"]}>
            <View style={style["input-box-mobile"]}>
              <TextInput
                placeholderTextColor="#747474"
                spellcheck
                onChangeText={e => searchQueryEntered(e)}
                type="search"
                placeholder="Search by activity or attraction"
                style={style["input-mobile"]}
              />
              <Text style={style["cancel"]}>Cancel</Text>
              <Panel isMobile={true} searchTerm={searchTerm} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

AppRegistry.registerComponent("ReactNativeWeb", () => App);
AppRegistry.runApplication("ReactNativeWeb", {
  rootTag: document.getElementById("app")
});
