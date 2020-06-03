import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("ReactNativeWeb", () => App);
AppRegistry.runApplication("ReactNativeWeb", {
  rootTag: document.getElementById("app")
});
