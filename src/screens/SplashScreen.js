import React from "react";
import { useEffect } from "react";
import { Image, SafeAreaView, View } from "react-native";
import colorsStyles from "../styles/colors.styles";
import { LoadingAnimation } from "../components/Animations";

const FirebetLoadingScreen = ({ loadingApp }) => {
  useEffect(() => {
    setTimeout(() => {
      loadingApp();
    }, 3000);
  }, []);
  return (
    <SafeAreaView
      style={{ height: "100%", backgroundColor: colorsStyles.CLR_WHITE }}
    >
      <View style={{ top: "14.5%", alignSelf: "center" }}>
        <Image source={require("../assets/images/toletLogo.png")} />
      </View>
      <View
        style={{
          position: "absolute",
          top: "60%",
          alignSelf: "center",
          height: "40%",
        }}
      >
        {/* <Image source={require("../assets/images/Loading.png")} /> */}
        <LoadingAnimation />
      </View>
    </SafeAreaView>
  );
};

export default FirebetLoadingScreen;
