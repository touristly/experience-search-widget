import { StyleSheet } from "react-native";

const container = {
  display: "flex",
  flexDirection: "row",
  marginTop: "10px",
  marginRight: "10px",
  marginBottom: "20px"
};

const styles = StyleSheet.create({
  deskPanel: {
    width: "80%",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
  },
  panel: {
    backgroundColor: "#FFFFFF",
    borderRadius: "0px 0px 4px 4px",
    padding: "10px"
  },
  chipCont: {
    ...container,
    flexWrap: "wrap"
  },
  panelCont: {
    ...container,
    overflow: "auto"
  },
  panelTitle: {
    paddingTop: "10px",
    fontWeight: "500",
    color: "#000000",
    fontFamily: "DM Sans",
    fontSize: "24px",
    lineHeight: "36px"
  },
  panelTitle: {
    margin: "0",
    paddingTop: "10px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1.3em",
    lineHeight: "30px",
    color: "#000000"
  },
  panelDesc: {
    paddingBottom: "10px",
    fontDamily: "DM Sans",
    fontSize: "14px",
    lineHeight: "22px",
    color: "#72777E",
    fontWeight: 300
  },
  searchBox: {
    backgroundColor: "#FFFFFF",
    padding: "20px"
  },
  inputBox: {
    backgroundColor: "#FFFFFF",
    padding: "10px",
    height: "56px",
    width: "80%",
    fontSize: "1em",
    border: "1px solid #D9DBE0",
    borderRadius: "4px"
  },
  inputSearchWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  searchText: {
    color: "white",
    textAlign: "center",
    fontSize: "1em",
    paddingTop: "17px",
    fontWeight: "bold"
  },
  searchBtn: {
    backgroundColor: "#E10000",
    borderRadius: "4px",
    marginLeft: "10px",
    height: "56px",
    width: "182px"
  }
});

export default styles;
