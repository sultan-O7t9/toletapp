import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import colorsStyles from "../styles/colors.styles";
// import dimensions from "../styles/dimensions";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserListItem = props => {
  const { title, onPress, navigateTo } = props;
  const dimensions = {
    width: useWindowDimensions().width * 0.94,
    height: 50,
  };
  const navigation = useNavigation();
  return (
    <View
      style={{
        shadowRadius: 3,
        borderRadius: 10,
        backgroundColor: colorsStyles.CLR_PRIMARY,
        width: dimensions.width,
        height: dimensions.height,
        left: "-5%",
        marginBottom: "3%",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          // backgroundColor: colorsStyles.CLR_BG_LIGHT,
          //   alignItems: "center",
          justifyContent: "center",
          borderRadius: 150 / 2,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            // fontWeight: "bold",
            // textAlign: "center",
            left: "12%",
          }}
        >
          {props.id}
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            // fontWeight: "bold",
            // textAlign: "center",
            right: "12%",
            position: "absolute",
          }}
        >
          {props.status}
        </Text>
      </View>
    </View>
  );
};

export default UserListItem;
