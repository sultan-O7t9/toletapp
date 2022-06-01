import React from "react";
import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import colorsStyles from "../styles/colors.styles";
import { useWindowDimensions } from "react-native";
import ShopView from "./ShopView";
import { useNavigation } from "@react-navigation/native";

const RegisteredShopsView = props => {
  const navigation = useNavigation();
  const dimensions = {
    width: useWindowDimensions().width,
    height: useWindowDimensions().height,
  };
  const input = {
    width: dimensions.width * 1,
    height: dimensions.height * 0.2,
  };
  const ShadowData = props.topShops;
  return (
    <View
      // inner // <- enable shadow inside of neomorph
      // swapShadows // <- change zIndex of each shadow color
      lightShadowColor="#e1e2e7"
      darkShadowColor="#f8f9fb" // <- set this
      style={{
        marginTop: "5%",
        shadowRadius: 1.5,
        borderRadius: 20,
        // borderTopLeftRadius: 20,

        // borderTopRightRadius: 30,
        // borderBottomLeftRadius: 30,
        shadowColor: "#aea1aa",
        backgroundColor: colorsStyles.CLR_BoX,
        width: input.width,
        height: input.height,
        shadowOpacity: 2,
        shadowOffset: {
          width: -4,
          height: -4,
        },
        flexDirection: "row",

        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 15,
          top: "4%",
          flexDirection: "row",
        }}
        onPress={() => {
          navigation.navigate("AdminShopListScreen");
        }}
      >
        <Text
          style={{
            textDecorationLine: "underline",
            color: colorsStyles.CLR_PRIMARY,
          }}
        >
          {"All Shops >"}
        </Text>
        {/* <Icon name="chevron-right" size={10} color={colorsStyles.CLR_PRIMARY} /> */}
      </TouchableOpacity>
      <View style={{ top: "6%", width: "100%" }}>
        <FlatList
          ListFooterComponent={
            <View
              style={{
                height: "10%",
                width: useWindowDimensions().width * 0.3,
              }}
            />
          }
          horizontal
          data={ShadowData}
          renderItem={({ item }) => (
            <ShopView title={item.name} usd={item.profit || 0} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
export default RegisteredShopsView;
