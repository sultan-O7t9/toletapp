import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { color } from 'react-native-reanimated'
import PlatformListItem from "./PlatformListItem";
const PlatformModal = props => {
  const { backgroundcolor, titlecolor, subtitlecolor, firstText, secondText } =
    props;
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: backgroundcolor }]}>
      <View
        style={{
          marginLeft: "10%",
          // top: "7%",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 23,
              marginTop: 20,
              color: titlecolor,
            }}
          >
            {props.name}
          </Text>

          <Text
            style={{
              fontSize: 23,
              color: titlecolor,
              shadowOffset: {
                height: 3,
                width: 3,
              },
              elevation: 10,
            }}
          >
            {secondText}
          </Text>
        </View>

        <View style={{ top: "10%" }}>
          <View style={{ marginRight: 20 }}>
            <Text
              style={{
                color: subtitlecolor,
              }}
            >
              {
                "Mr Green Ltd. is an online advertisemant comapnay that book to-let boards online."
              }
            </Text>
          </View>
        </View>
      </View>

      <View style={{ top: "25%", alignSelf: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UserWebViewScreen", {
              url: props.url,
              name: props.name,
            });
          }}
        >
          <PlatformListItem name={props.name} img={props.img} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: "2%",
    height: "100%",
    width: "100%",

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
});
export default PlatformModal;
