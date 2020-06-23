import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  "widget-cont": {
    width: wp("96%"),
    margin: "auto",
    marginTop: hp("2%")
  },
  "search-box-cont": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  "input-box": {
    position: "relative",
    width: "80%"
  },
  "input-box-mobile": {
    // position: relative;
    width: "100%",
    // padding-right: 35px;
    // display: flex;
    // flex-direction: row;
    // align-items: center;
    // justify-content: space-between;
    // padding: 10px;
    // padding-right: 10px;
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    height: hp("7%"),
    backgroundColor: "#ffffff;",
    border: "1px solid #d9dbe0",
    borderRadius: "4px",
    paddingLeft: "15px",
    fontSize: hp("2%"),
    lineHeight: "20px",
    color: "black"
  },
  "input-mobile": {
    width: "100%",
    height: hp("7%"),
    backgroundColor: "#ffffff;",
    border: "1px solid #d9dbe0",
    borderRadius: "4px",
    paddingLeft: "15px",
    fontSize: hp("2%"),
    lineHeight: "20px",
    color: "black"
  },
  cancel: {
    paddingLeft: "10px",
    color: "#4b4fa6",
    fontSize: hp("1.8")
  },
  button: {
    height: hp("7%"),
    backgroundColor: "#e10000",
    borderRadius: "4px",
    width: "18%",
    fontSize: hp("2%"),
    textAlign: "center",
    color: "#ffffff"
  },
  "button-text": {
    height: hp("7%"),
    display: "flex",
    alignItems: "center",
    fontSize: hp("2%"),
    color: "white",
    fontWeight: "bold",
    margin: "auto"
  },
  "dropdown-cont": {
    position: "absolute",
    left: "0",
    right: "0",
    top: hp("7%")
  },
  content: {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "0px 0px 4px 4px",
    paddingTop: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    maxHeight: hp("65%"),
    overflow: "scroll"
  },
  "content-mobile": {
    maxHeight: hp("90%"),
    paddingTop: "50px",
    paddingRight: "0px",
    paddingBottom: "20px",
    paddingLeft: "5px",
    overflow: "scroll"
    // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
  },
  title: {
    fontWeight: 400,
    fontSize: hp("2.4"),
    lineHeight: hp("3.0"),
    marginTop: hp("1.0")
  },
  subtitle: {
    fontSize: hp("1.6"),
    lineHeight: hp("2.5"),
    color: "#72777e"
  },
  "chip-cont": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: hp("2.0"),
    marginBottom: hp("3.0")
  },
  "tile-cont": {
    display: "flex",
    flexDirection: "row",
    marginTop: hp("2.0"),
    marginBottom: hp("3.5"),
    overflow: "auto"
  },
  "card-cont": {
    display: "flex",
    flexDirection: "row",
    marginTop: hp("2.0"),
    marginRight: wp("2"),
    marginBottom: hp("3.5"),
    overflow: "auto"
  },
  "card-cont-mobile": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: hp("2.0"),
    marginRight: wp("2"),
    marginBottom: hp("3.5")
  },
  "location-cont": {
    display: "flex",
    flexDirection: "row",
    marginBottom: hp("2.0"),
    position: "relative",
    zIndex: 9
  },
  "location-cont-mobile": {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    marginBottom: hp("2.0"),
    zIndex: 9,
    top: hp("7%"),
    height: hp("5.0%"),
    backgroundColor: "#F8F8F8",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center"
  },
  "location-input-cont-mob": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  "loc-icon-mobile": {
    height: hp("1.8"),
    width: hp("1.8"),
    marginRight: 10
  },
  "location-find-label": {
    fontWeight: "500"
  },
  "loc-suggestions-cont": {
    position: "relative",
    zIndex: 9
  },
  "location-input": {
    marginLeft: 5,
    color: "#e10000",
    borderBotton: "1px solid #e10000",
    width: "100px",
    paddingBottom: "2px",
    borderBottomColor: "red",
    borderBottomWidth: 1,
    textAlign: "center",
    fontWeight: 500
  },
  "location-input-mobile": {
    fontSize: hp("2.2")
  },
  "loc-suggestions-dropdown": {
    position: "absolute",
    top: "20px",
    backgroundColor: "white",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: 4,
    maxHeight: "200px",
    width: "250px"
  },
  "loc-suggestions-dropdown-mobile": {
    position: "absolute",
    top: hp("5"),
    width: "100%",
    maxHeight: hp("90%"),
    overflow: "scroll"
  },
  "loc-row": {
    height: "40px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    cursor: "pointer"
  },
  "loc-row-mobile": {
    height: hp("7.0%"),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    cursor: "pointer"
  },
  "loc-name": {
    paddingLeft: 7,
    paddingRight: 5,
    fontSize: hp("1.5")
  },
  "loc-name-mobile": {
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: hp("2.4")
  },
  "loc-icon": {
    height: hp("1.6"),
    width: hp("1.2")
  },
  "loc-clear": {
    color: "#75767A",
    fontSize: hp("1.4"),
    paddingLeft: "4px",
    cursor: "pointer"
  },
  "loc-iata-code": {
    color: "#72777E"
  }
});

export default styles;
