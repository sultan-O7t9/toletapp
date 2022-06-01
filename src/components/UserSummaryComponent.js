import React from "react";
import { View, Text } from "react-native";
import HeaderFireOne from "./HeaderFireOne";

const UserSummaryComponent = () => {
  return (
    <View
      style={{
        height: "70%",
        backgroundColor: "#EEF0F6",
        //  borderBottomLeftRadius:'10%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      }}
    >
      <View
        style={{
          top: "-27%",
        }}
      >
        <HeaderFireOne text={"Users"} />
      </View>
    </View>
  );
};

export default UserSummaryComponent;
