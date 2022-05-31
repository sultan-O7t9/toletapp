import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import colorsStyles from "../styles/colors.styles";

const HeaderFireTwo = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.textstylingView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ position: "absolute", left: 20 }}
        >
          <View
            style={{
              width: 44,
              height: 37,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colorsStyles.CLR_WHITE,
              borderRadius: 10,
            }}
          >
            <Image source={require("../assets/images/backArrow.png")} />
          </View>
        </TouchableOpacity>

        <View style={{ alignSelf: "center" }}>
          <Text
            style={{
              fontSize: 30,
              color: "white",
              fontWeight: "700",
            }}
          >
            {props.title}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textstylingView: {
    //borderRadius:15,
    minHeight: 78,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colorsStyles.CLR_PRIMARY,
    // borderRadius:15,
    borderWidth: 1,
    // marginHorizontal:'5.5%',
    backgroundColor: colorsStyles.CLR_PRIMARY,
    //marginTop: '100%',
  },
  textstyling: {
    color: "white",
    fontWeight: "bold",
  },
});

export default HeaderFireTwo;
