import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import colorsStyles from "../styles/colors.styles";
// import dimensions from "../styles/dimensions";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Alert } from "react-native";

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
          justifyContent: "space-between",
          borderRadius: 150 / 2,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "10%",
          paddingRight: "2%",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            // fontWeight: "bold",
            // textAlign: "center",
            // left: "100%",
          }}
        >
          {props.id}
        </Text>

        {/* <Icon name="edit" size={10} color="white" /> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "45%",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              // fontWeight: "bold",
              // textAlign: "center",
              // right: "12%",
              // position: "absolute",
            }}
          >
            {props.status}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ShopEditAdScreen", "Edit AD");
            }}
          >
            <Icon name="edit" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Are you Sure?",
                "Are you sure, you want to delte this Ad?",
                [
                  {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel",
                  },
                  {
                    text: "Yes",
                    onPress: () => {},
                    style: "submit",
                  },
                ]
              );
            }}
          >
            <Icon name="delete" size={36} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserListItem;
