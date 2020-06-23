import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  TextInput,
  Dimensions
} from "react-native";

import { Chip, Card, Tile, List } from "./components";
import location from "../static/images/location.svg";
import nearMe from "../static/images/near_me.svg";
import style from "../style";

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
            {categories.length ? (
              <>
                <Text style={style["title"]}>All Activities</Text>
                <Text style={style["subtitle"]}>
                  Browse all activities and experiences
                </Text>
                <View style={style["chip-cont"]}>
                  {categories.map((d, index) => (
                    <Chip
                      key={`category_${index}`}
                      title={d.name}
                      slug={d.slug}
                    />
                  ))}
                </View>
              </>
            ) : null}
            {locations.length ? (
              <>
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
              </>
            ) : null}

            {activities.length ? (
              <>
                <Text style={style["title"]}>Best Activities near you</Text>
                <Text style={style["subtitle"]}>
                  Most popular activities booked by travelers
                </Text>
                <View style={cardContStyle}>
                  {activities.map((d, index) => (
                    <Card
                      key={`activity_${index}`}
                      isMobile={isMobile}
                      title={d.title}
                      image={d.image_link}
                      price={
                        d.cheapest_price_cents || d.cheapest_value_price_cents
                      }
                    />
                  ))}
                </View>
              </>
            ) : null}
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
  const [allLocations, setAllLocations] = useState([]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [searchLocation, setSearchLocation] = useState("Kuala Lumpur");

  const callApi = async (search = "", destination) => {
    const activitiesUrl = `https://api.vidi.cc/search-widget/searchActivities?query=${
      search || searchTerm
    }&destination=${(destination || searchLocation).toLowerCase()}`;
    const res = await fetch(activitiesUrl);
    if (res.status === 200) {
      const data = await res.json();
      if (data) {
        setData(data);
      }
    }
  };

  const getLocations = async () => {
    const res = await fetch("https://api.vidi.cc/api/v2/widgets/destinations/");
    if (res.status === 200) {
      const data = await res.json();
      if (data && data.data && data.data.length) {
        setAllLocations(data.data);
      }
    }
  };

  useEffect(() => {
    const screenWidth = Math.round(Dimensions.get("window").width);
    console.log("screenWidth : ", screenWidth);
    if (screenWidth <= 768) setIsMobile(true);
    callApi();
    getLocations();
  }, []);

  const searchQueryEntered = value => {
    console.log("Value : ", value);
    setSearchTerm(value);
    if (value) callApi(value);
  };

  const locationEntered = value => {
    console.log("Entered user location : ", value);
    setSearchLocation(value);
    if (!showLocationDropdown) setShowLocationDropdown(true);
  };

  const locationList = () => {
    return allLocations.filter(
      d =>
        d.attributes.name.toLowerCase().indexOf(searchLocation.toLowerCase()) >=
          0 ||
        d.attributes.country_name
          .toLowerCase()
          .indexOf(searchLocation.toLowerCase()) >= 0
    );
  };

  const handleLocationChange = loc => {
    setSearchLocation(loc);
    setShowLocationDropdown(false);
    callApi(searchTerm, loc);
  };

  const clearLocation = () => {
    setSearchLocation("");
    setShowLocationDropdown(true);
  };

  const DestinationsInput = ({ searchLocation, locationEntered, isMobile }) => {
    const classname = isMobile ? "location-input-mobile" : "location-input";
    return (
      <TextInput
        placeholderTextColor="#747474"
        spellcheck
        value={searchLocation}
        onChangeText={locationEntered}
        type="text"
        placeholder="Search destination"
        style={style[classname]}
      />
    );
  };

  const DestinationsList = ({ isMobile }) => {
    const classnameCont = isMobile
      ? "loc-suggestions-dropdown-mobile"
      : "loc-suggestions-dropdown";
    const locNameClass = isMobile ? "loc-name-mobile" : "loc-name";
    const locRowClass = isMobile ? "loc-row-mobile" : "loc-row";

    return (
      <View style={style[classnameCont]}>
        <FlatList
          data={locationList()}
          renderItem={({ item }) => (
            <View
              style={style[locRowClass]}
              onClick={handleLocationChange.bind(this, item.attributes.name)}
            >
              <Image style={style["loc-icon"]} source={location} />
              <Text style={style[locNameClass]}>{item.attributes.name}</Text>
              <Text style={style["loc-iata-code"]}>
                {item.attributes.iata_code}
              </Text>
            </View>
          )}
        />
      </View>
    );
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
          <View style={style["location-cont"]}>
            <Text style={style["location-find-label"]}>
              Discover exciting things to do in
            </Text>
            <View style={style["loc-suggestions-cont"]}>
              <TextInput
                placeholderTextColor="#747474"
                spellcheck
                value={searchLocation}
                onChangeText={locationEntered}
                type="text"
                placeholder="Search destination"
                style={style["location-input"]}
              />
              {showLocationDropdown && <DestinationsList isMobile={false} />}
            </View>
            <Text style={style["loc-clear"]} onClick={clearLocation}>
              clear
            </Text>
          </View>
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
              <View style={style["location-cont-mobile"]}>
                <View style={style["location-input-cont-mob"]}>
                  <Image style={style["loc-icon-mobile"]} source={nearMe} />
                  <TextInput
                    placeholderTextColor="#747474"
                    spellcheck
                    value={searchLocation}
                    onChangeText={locationEntered}
                    type="text"
                    placeholder="Search destination"
                    style={style["location-input-mobile"]}
                  />
                </View>
                <Text style={style["loc-clear"]} onClick={clearLocation}>
                  clear
                </Text>
                {showLocationDropdown && <DestinationsList isMobile={true} />}
              </View>
              {!showLocationDropdown && (
                <Panel data={data} isMobile={true} searchTerm={searchTerm} />
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default App;
