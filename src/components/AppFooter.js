import React from "react";
import { Text, View, Image } from "react-native";
import colorsStyles from "../styles/colors.styles";
import dimensions from "../styles/dimensions";

const AppFooter = () => {
  const input = {
    width: dimensions.windowWidth * 1,
    height: dimensions.windowHeight * 0.04,
  };
  return (
    <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
      <View
        style={{
          shadowRadius: 2,
          marginTop: 20,
          //borderRadius: 15,
          shadowOpacity: 0.5,
          // alignItems: "center",
          justifyContent: "center",

          // position:'absolute',
          //top:190,
          shadowOffset: {
            width: 3,
            height: 3,
          },
          backgroundColor: colorsStyles.CLR_PRIMARY,
          width: input.width,
          height: input.height,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 12, color: "white", fontWeight: "700" }}>
            18+ | Spil med omtanke | Udeluk dig via ROFUS |
          </Text>

          <Image
            source={require("../assets/images/image1.png")}
            style={{
              height: 12,
              width: 30,
              marginLeft: "2%",
            }}
          />

          <Text
            style={{
              marginLeft: "2%",
              color: "white",
            }}
          >
            |
          </Text>

          <Image
            source={require("../assets/images/image2.png")}
            style={{
              marginLeft: "2%",
              height: 18,
              width: 18,
              //borderRadius:12
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AppFooter;
