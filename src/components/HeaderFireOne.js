import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, Image, Keyboard } from "react-native";
// import { NeomorphBlur, Neomorph } from "react-native-neomorph-shadows";

import { useWindowDimensions } from "react-native";
import colorsStyles from "../styles/colors.styles";
// import { HeaderBackButton } from "./HeaderBackButton";
import { useNavigation } from "@react-navigation/native";
const HeaderFireOne = ({ text, showBack }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  }, []);
  const dimensions = {
    width: useWindowDimensions().width,
    height: useWindowDimensions().height,
  };
  const navigation = useNavigation();
  const input = {
    width: dimensions.width * 1.5,
    height: 200,
  };
  return (
    <View
      // darkShadowColor="#000" // <- set this
      lightShadowColor="#000"
      // useArt
      // swapShadows
      // inner
      style={{
        position: "absolute",
        top: 0,
        shadowRadius: 2.5,
        borderRadius: 85,
        backgroundColor: colorsStyles.CLR_PRIMARY,
        opacity: keyboardStatus ? 0 : null,
        width: input.width,
        height: input.height,
        left: "-65%",
        top: "-17%",
        backgroundColor: colorsStyles.CLR_PRIMARY,
        justifyContent: "center",
        alignItems: "center",
        shadowOpacity: 0.7,
        shadowOffset: {
          width: -2,
          height: -3,
        },
      }}
    >
      {/* <View
        style={{
          width: "10%",
          height: "50%",
          backgroundColor: colorsStyles.CLR_PRIMARY,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      ></View> */}
      {/* <View
        style={{
          width: "50%",
          height: "100%",
          // backgroundColor: colorsStyles.CLR_PRIMARY,
          position: "absolute",
          left: 0,
          bottom: 0,
        }}
      ></View> */}
      <View
        style={{
          width: dimensions.width * 0.86,
          // backgroundColor: "red",
          height: 82,
          position: "absolute",
          right: 0,
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showBack ? (
          <TouchableOpacity
            style={{ position: "absolute", left: 20 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View
              style={{
                width: 44,
                height: 37,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colorsStyles.CLR_WHITE,
                borderRadius: 10,
              }}
            >
              <Image source={require("../assets/images/backArrow.png")} />
            </View>
          </TouchableOpacity>
        ) : null}
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
          }}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

export default HeaderFireOne;
