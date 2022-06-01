import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import colorsStyles from "../styles/colors.styles";
// import dimensions from "../styles/dimensions";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ShopName = props => {
  const { title, onPress, navigateTo } = props;
  const dimensions = {
    width: useWindowDimensions().width * 1,
    height: 50,
  };
  const navigation = useNavigation();
  //   const navigationHandler = () => {
  //     if (navigateTo) navigation.navigate(navigateTo);
  //     else console.log("Chutti Kar");
  //   };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("AdminShopDetailScreen", { id: props.id });
      }}
    >
      <View
        style={{
          backgroundColor: colorsStyles.CLR_PRIMARY,
          width: dimensions.width,
          height: dimensions.height,
          top: "20%",
          marginBottom: "3%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            borderRadius: 150 / 2,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter-Regular",
              color: "#fff",
              fontSize: 15,
              left: "12%",
            }}
          >
            {props.name}
          </Text>

          <Text
            style={{
              color: "white",
              fontFamily: "Inter-Regular",
              fontSize: 14,
              right: "12%",
              position: "absolute",
              textDecorationLine: "underline",
              textDecorationColor: "white",
            }}
          >
            {props.status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShopName;
