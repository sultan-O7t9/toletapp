import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import colorsStyles from "../styles/colors.styles";
// import dimensions from "../styles/dimensions";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NeuButtonOrange = props => {
  const { title, onPress, navigateTo, isDisabled } = props;
  const dimensions = {
    width: useWindowDimensions().width * 0.8,
    height: 55,
  };
  const navigation = useNavigation();
  const navigationHandler = () => {
    if (navigateTo) navigation.navigate(navigateTo);
    else console.log("Chutti Kar");
  };
  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress}>
      <View
        style={{
          shadowRadius: 3,
          borderRadius: 10,
          backgroundColor: isDisabled ? "#ccc" : colorsStyles.CLR_PRIMARY,
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        <View
          style={{
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
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NeuButtonOrange;
