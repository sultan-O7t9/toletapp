import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import colorsStyles from "../styles/colors.styles";
// import dimensions from "../styles/dimensions";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NeuView = props => {
  const { title, onPress, navigateTo } = props;
  const dimensions = {
    width: useWindowDimensions().width * 0.8,
    height: 40,
  };
  const navigation = useNavigation();
  const navigationHandler = () => {
    if (navigateTo) navigation.navigate(navigateTo);
  };
  return (
    <>
      {/* <Neomorph
        useArt
        inner // <- enable shadow inside of neomorph
        swapShadows // <- change zIndex of each shadow color
        darkShadowColor={colorsStyles.LIGHT_SHADOW}
        lightShadowColor={colorsStyles.DARK_SHADOW}
        style={{
          borderRadius: 150 / 2,
          shadowRadius: 2,
          //   marginTop: 20,
          shadowOpacity: 1,
          alignItems: "center",
          justifyContent: "center",
          shadowOffset: {
            width: 3,
            height: 3,
          },
          backgroundColor: colorsStyles.CLR_PRIMARY,
          width: dimensions.windowWidth * 0.28,
          height: dimensions.windowWidth * 0.28,
        }}
      > */}
      <View
        // darkShadowColor="#F35B19"
        style={{
          shadowRadius: 3,
          borderRadius: 12,
          backgroundColor: colorsStyles.CLR_PRIMARY,
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        <View
          style={{
            marginLeft: "10%",
            width: "100%",
            height: "100%",
            // backgroundColor: colorsStyles.CLR_BG_LIGHT,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 150 / 2,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 21,
              fontFamily: "Poppins-Medium",
              fontWeight: "bold",
              textAlign: "center",
              textDecorationLine: "underline",
            }}
          >
            {title}
          </Text>
        </View>
      </View>
    </>
  );
};

export default NeuView;
