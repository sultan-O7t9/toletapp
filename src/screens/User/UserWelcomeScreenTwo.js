import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import ButtonCTA from "../../components/ButtonCTA";
import colorsStyles from "../../styles/colors.styles";
import { SecurityAnimation } from "../../components/Animations";

const UserWelcomeScreenTwo = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ backgroundColor: colorsStyles.CLR_WHITE, height: "100%" }}
    >
      <View style={{}}>
        <View style={{ width: "100%", left: "10%", height: 380 }}>
          {/* <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../assets/images/a.gif")}
          /> */}
          <SecurityAnimation />
        </View>
        <View
          style={{
            maxWidth: 335,
            alignSelf: "center",
            top: "90%",
            position: "absolute",
          }}
        >
          <Text style={styles.text}>Easy & Secure Access to Platforms</Text>
        </View>
      </View>

      <View style={{ position: "absolute", top: "80%", alignSelf: "center" }}>
        <ButtonCTA
          title={"Continue"}
          onPress={() => {
            navigation.navigate("UserRegisterScreen");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Acme-Regular",
    fontSize: 36,
    textAlign: "center",
    color: colorsStyles.CLR_PRIMARY,
  },
});

export default UserWelcomeScreenTwo;
