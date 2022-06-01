import React from "react";
import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import colorsStyles from "../styles/colors.styles";
// import { Shadow } from "react-native-neomorph-shadows";
import ShadowView from "./ShadowView";
import { useWindowDimensions } from "react-native";
import { useState } from "react";

const ProfitView = props => {
  const [selected, setSelected] = useState("Daily");
  const dimensions = {
    width: useWindowDimensions().width,
    height: useWindowDimensions().height,
  };
  const input = {
    width: dimensions.width * 0.6,
    height: dimensions.height * 0.1,
  };
  const ShadowData = ["Daily", "Weekly", "Monthly"];
  return (
    <View
      style={{
        borderColor: colorsStyles.CLR_PRIMARY,
        borderWidth: 1,
        marginTop: "5%",
        borderRadius: 20,
        backgroundColor: colorsStyles.CLR_BoX,
        width: input.width,
        height: input.height,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "70%",
          // backgroundColor: "red",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <FlatList
          horizontal
          data={ShadowData}
          contentContainerStyle={{ justifyContent: "space-around" }}
          renderItem={({ item }) => (
            <ShadowView
              selected={selected}
              setSelected={setSelected}
              title={item}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
export default ProfitView;
