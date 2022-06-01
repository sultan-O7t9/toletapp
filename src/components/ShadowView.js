import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import colorsStyles from "../styles/colors.styles";
const ShadowView = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.setSelected(props.title);
      }}
    >
      {props.selected == props.title ? (
        <View
          inner // <- enable inner shadow
          useArt // <- set this prop to use non-native shadow on ios
          //   lightShadowColor="#e1e2e7"
          //   darkShadowColor="grey" // <- set this
          style={{
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 10,

            backgroundColor: colorsStyles.CLR_PRIMARY,
            width: 60,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 7,
          }}
        >
          <Text style={{ color: colorsStyles.CLR_WHITE }}>{props.title}</Text>
        </View>
      ) : (
        <View
          style={{
            borderWidth: 2,
            borderColor: "rgba(0,0,0,0)",
            borderRadius: 10,
            width: 60,
            height: 45,
            // ...include most of View/Layout styles
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: colorsStyles.CLR_PRIMARY }}>{props.title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
export default ShadowView;
