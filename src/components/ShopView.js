import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import colorsStyles from "../styles/colors.styles";
const ShopView = props => {
  const [state, setState] = React.useState(false);
  //   console.log(props);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <View
          style={{
            shadowOffset: { width: 2, height: 2 },
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 10,
            shadowOpacity: 0.6,
            shadowColor: "#42536B",

            shadowRadius: 7,
            backgroundColor: colorsStyles.CLR_BoX,
            width: 140,
            height: 90,
            // ...include most of View/Layout styles
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: "1%",
            //  marginHorizontal: 7,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              top: "15%",
            }}
          >
            {props.usd}
          </Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          height: "25%",
          width: 140,
          borderRadius: 10,
          backgroundColor: colorsStyles.CLR_PRIMARY,
          bottom: "62%",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "white",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {props.title}
        </Text>
      </View>
    </View>
  );
};
export default ShopView;
