import { AppRegistry } from "react-native";
import App from "./app";

AppRegistry.registerComponent("ReactNativeWeb", () => App);
AppRegistry.runApplication("ReactNativeWeb", {
  rootTag: document.getElementById("app")
});
