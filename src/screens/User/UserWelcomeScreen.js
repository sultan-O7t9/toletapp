// import OTPInputView from "@twotalltotems/react-native-otp-input";
import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ButtonCTA from "../../components/ButtonCTA";
// import CircularProgressBar from "../../components/CircularProgressBar";
// import PlatformListItem from "../../components/PlatformListItem";
// import PreLoader from "../../components/PreLoader";
import colorsStyles from "../../styles/colors.styles";

const UserWelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ backgroundColor: colorsStyles.CLR_WHITE, height: "100%" }}
    >
      <View style={{ top: "5%" }}>
        <View style={{ left: "11%", marginBottom: 10 }}>
          <Text style={[styles.text, styles.welcomeText]}>Welcome!</Text>
        </View>
        <View style={{ maxWidth: 334, left: "11%", marginBottom: 20 }}>
          <Text style={styles.text}>
            Start Betting on Games, have fun & Enjoy
          </Text>
        </View>
        <View
          style={{
            height: "60%",
            width: "100%",
            alignSelf: "center",
          }}
        >
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../../assets/images/welcomeScreen.png")}
          />
        </View>
      </View>
      <View style={{ position: "absolute", top: "80%", alignSelf: "center" }}>
        <ButtonCTA
          title={"Get Started"}
          onPress={() => {
            navigation.navigate("UserWelcomeScreenTwo");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Acme-Regular",
    fontSize: 21,
    color: colorsStyles.CLR_PRIMARY,
  },
  welcomeText: {
    fontSize: 45,
    color: colorsStyles.CLR_PRIMARY,
  },
});

export default UserWelcomeScreen;
