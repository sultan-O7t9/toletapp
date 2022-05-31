import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

// ...
const WebViewComponent = ({ url }) => {
  return <WebView startInLoadingState={true} source={{ uri: url }} />;
};
export default WebViewComponent;
