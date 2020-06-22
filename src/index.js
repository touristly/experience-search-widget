import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("ActivitySearchWidget", () => App);
AppRegistry.runApplication("ActivitySearchWidget", {
  rootTag: document.getElementById("app")
});
