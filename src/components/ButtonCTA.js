import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
// import { NeomorphBlur, Neomorph } from "react-native-neomorph-shadows";
import colorsStyles from "../styles/colors.styles";
// import dimensions from "../styles/dimensions";

import { useWindowDimensions } from "react-native";
const ButtonCTA = ({ title, icon, onPress }) => {
  const dimensions = {
    width: useWindowDimensions().width,
    height: useWindowDimensions().height,
  };
  const input = {
    width: dimensions.width * 0.85,
    height: 56,
  };
  return (
    <TouchableOpacity onPress={onPress}>
      {/* <Neomorph
        darkShadowColor={colorsStyles.CLR_BLACK} // <- set this
        lightShadowColor="white"
        // useArt
        // swapShadows
        // inner
        style={{
          paddingHorizontal: 50,
          shadowRadius: 2,
          borderRadius: 150 / 2,
          marginTop: 20,
          width: input.width,
          height: input.height,
          backgroundColor: colorsStyles.CLR_ORANGE_LIGHT,
          //   flexDirection: "row",
          //   justifyContent: "space-between",
          //   alignItems: "center",
          shadowOpacity: 1,
          shadowOffset: {
            width: -3,
            height: -3,
          },
        }}
      >
        <Neomorph
          darkShadowColor={colorsStyles.CLR_ORANGE_LIGHT} // <- set this
          lightShadowColor={colorsStyles.CLR_WHITE}
          // useArt
          // swapShadows
          // inner
          style={{
            position: "absolute",
            top: -16,
            left: "1%",
            paddingHorizontal: 50,
            shadowRadius: 3,
            borderRadius: 150 / 2,
            marginTop: 20,
            width: input.width,
            height: input.height,
            backgroundColor: colorsStyles.CLR_PRIMARY,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            shadowOpacity: 1,
            shadowOffset: {
              width: -3,
              height: -3,
            },
          }}
        > */}
      <View
        style={{
          width: input.width,
          height: input.height,
          backgroundColor: colorsStyles.CLR_PRIMARY,
          justifyContent: "center",
          borderRadius: 150 / 2,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: colorsStyles.CLR_WHITE,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </View>
      {/* </Neomorph>
      </Neomorph> */}
    </TouchableOpacity>
  );
};

export default ButtonCTA;
