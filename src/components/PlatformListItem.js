import React from "react";
import { Text, View, Image } from "react-native";
import colorsStyles from "../styles/colors.styles";
// import mrGreen from "./mrgreen.png";
// import dimensions from "../styles/dimensions";

import { useWindowDimensions } from "react-native";
const PlatformListItem = ({ name, img }) => {
  const dimensions = {
    width: useWindowDimensions().width,
    height: useWindowDimensions().height,
  };
  const input = {
    width: dimensions.width * 0.9,
    height: dimensions.height * 0.09 < 72 ? 72 : dimensions.height * 0.09,
  };
  return (
    <View
      style={{
        paddingHorizontal: 50,
        shadowRadius: 4,
        borderRadius: 20,
        marginTop: 20,
        width: input.width,
        height: input.height,
        backgroundColor: "#EBECF0",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowOpacity: 0.7,
        shadowOffset: {
          width: -2,
          height: -3,
        },
      }}
    >
      <Text
        style={{
          fontSize: 26,
          color: "#00A754",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {name}
      </Text>
      <Image source={img} />
    </View>
  );
};

export default PlatformListItem;
