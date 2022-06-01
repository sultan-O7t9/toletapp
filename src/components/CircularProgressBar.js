import React from "react";
import { View, Text } from "react-native";

import { AnimatedCircularProgress } from "react-native-circular-progress";
import colorsStyles from "../styles/colors.styles";

const CircularProgressBar = () => {
  return (
    <View
    // style={{ width: 200, height: 200, backgroundColor: "#000" }}
    >
      <AnimatedCircularProgress
        size={120}
        width={6}
        fill={75}
        tintColor={colorsStyles.CLR_PRIMARY}
        backgroundColor="#E8E8E8"
      >
        {fill => (
          <View
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Inter-Regular",
                textAlign: "center",
                color: "#F3722C",
              }}
            >
              $ 342
            </Text>
            <Text
              style={{
                color: "#BDBDBD",
                fontSize: 10,
                textAlign: "center",
                fontFamily: "Inter-Regular",
              }}
            >
              {"70% this\nweek"}
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default CircularProgressBar;
