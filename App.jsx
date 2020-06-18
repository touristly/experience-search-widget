import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Dimensions
} from "react-native";

import { Chip, Card, Tile, List } from "./components";
import style from "./style";

const Panel = ({ data = null, isMobile = false, searchTerm = "" }) => {
  const contentStyle = isMobile ? style["content-mobile"] : style["content"];
  const cardContStyle = isMobile
    ? style["card-cont-mobile"]
    : style["card-cont"];
  // console.log("contentStyle : ", isMobile);

  const categories =
    (data && data.currentActivities && data.currentActivities.categories) || [];

  const locations =
    (data && data.currentActivities && data.currentActivities.destinations) ||
    [];

  const activities =
    (data && data.currentActivities && data.currentActivities.activities) || [];

  const searchResults = (data && data.results) || [];

  return (
    <View style={style["dropdown-cont"]}>
      <View style={contentStyle}>
        {searchTerm ? (
          <List
            activities={searchResults.map(d => ({
              title: d.title,
              city: d.destination_name
            }))}
          />
        ) : (
          <>
            <Text style={style["title"]}>All Activities</Text>
            <Text style={style["subtitle"]}>
              Browse all activities and experiences
            </Text>
            <View style={style["chip-cont"]}>
              {categories.map((d, index) => (
                <Chip key={`category_${index}`} title={d.name} slug={d.slug} />
              ))}
            </View>

            <Text style={style["title"]}>Explore more location</Text>
            <Text style={style["subtitle"]}>
              Check out the best locations for your next vacation
            </Text>
            <View style={style["tile-cont"]}>
              {locations.map((d, index) => (
                <Tile
                  key={`location_${index}`}
                  city={d.name}
                  image={d.image_link}
                />
              ))}
            </View>

            <Text style={style["title"]}>Best Activities near you</Text>
            <Text style={style["subtitle"]}>
              Most popular activities booked by travelers
            </Text>
            <View style={cardContStyle}>
              {activities.map((d, index) => (
                <Card
                  key={`activity_${index}`}
                  title={d.title}
                  image={d.image_link}
                  isMobile={isMobile}
                />
              ))}
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const App = () => {
  const [data, setData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const callApi = async (search = "") => {
    const activitiesUrl = `https://api.vidi.cc/search-widget/searchActivities?query=${search}&destination=kualaLumpur`;
    const res = await fetch(activitiesUrl);
    if (res.status === 200) {
      const data = await res.json();
      if (data) {
        setData(data);
      }
    }
  };

  useEffect(() => {
    const screenWidth = Math.round(Dimensions.get("window").width);
    console.log("screenWidth : ", screenWidth);
    if (screenWidth <= 768) setIsMobile(true);
    callApi();
  }, []);

  const searchQueryEntered = value => {
    console.log("Value : ", value);
    setSearchTerm(value);
    if (value) callApi(value);
  };

  const onLayout = v => {
    const { width } = v.nativeEvent.layout;
    console.log("On layout : ", width);

    setIsMobile(width <= "768" ? true : false);
  };
  console.log("Mobile or not : ", isMobile, data);

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
                onChangeText={searchQueryEntered}
                type="search"
                placeholder="Search by activity or attraction"
                style={style["input"]}
              />
              <Panel data={data} isMobile={false} searchTerm={searchTerm} />
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
                onChangeText={searchQueryEntered}
                type="search"
                placeholder="Search by activity or attraction"
                style={style["input-mobile"]}
              />
              <Text style={style["cancel"]}>Cancel</Text>
              <Panel data={data} isMobile={true} searchTerm={searchTerm} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default App;
