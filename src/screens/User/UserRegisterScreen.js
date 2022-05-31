import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Keyboard,
} from "react-native";
import SmallButton from "../../components/SmallButton";
import colorsStyles from "../../styles/colors.styles";
import HeaderFireOne from "../../components/HeaderFireOne";
import NeuInput from "../../components/NeuInput";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const UserRegisterScreen = ({ navigation }) => {
  // const [render, setRender] = useState(<PreLoader />);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // setRender(
    //   <SafeAreaView
    //     style={{ backgroundColor: colorsStyles.CLR_WHITE, height: "100%" }}
    //   >
    //     <View
    //       style={{
    //         height: "60%",
    //         width: "100%",
    //         backgroundColor: colorsStyles.CLR_BG_LIGHT_GREY,
    //         position: "absolute",
    //         borderBottomLeftRadius: 20,
    //         borderBottomRightRadius: 20,
    //         elevation: 5,
    //       }}
    //     >
    //       {/* {keyboardStatus ? (
    //         <View
    //           style={{ top: "-27%", height: "100%", backgroundColor: "red" }}
    //         >
    //           <HeaderFireOne text="REGISTER" />
    //         </View>
    //       ) : null} */}
    //       <View
    //         style={{
    //           top: "-27%",
    //           opacity: keyboardStatus ? 0 : 1,
    //         }}
    //       >
    //         <HeaderFireOne text="REGISTER" />
    //       </View>
    //       <View
    //         style={{
    //           height: "30%",
    //           top: "26%",
    //           width: "42%",
    //           alignSelf: "center",
    //         }}
    //       >
    //         <Image
    //           style={{ alignSelf: "center", height: "100%", width: "90%" }}
    //           source={require("../assets/images/registerPhone.png")}
    //         />
    //       </View>
    //       <View style={{ top: "28%", alignSelf: "center" }}>
    //         <Text
    //           style={{
    //             textAlign: "center",
    //             fontFamily: "Inter-Regular",
    //             color: colorsStyles.CLR_PRIMARY,
    //           }}
    //         >
    //           Enter Phone Number to get OTP {keyboardStatus.toString()}
    //         </Text>
    //       </View>
    //       <View style={{ top: "30%", alignItems: "center" }}>
    //         <NeuInput placeholder="Enter Phone" />
    //       </View>
    //     </View>
    //     <View style={{ position: "absolute", top: "80%", alignSelf: "center" }}>
    //       <SmallButton
    //         title="LOG IN"
    //         onPress={() => {
    //           navigation.navigate("UserOTPVerifyScreen");
    //         }}
    //       />
    //     </View>
    //   </SafeAreaView>
    // );
  }, []);

  // return render;
  return (
    <SafeAreaView
      style={{ backgroundColor: colorsStyles.CLR_WHITE, height: "100%" }}
    >
      <View
        style={{
          height: "60%",
          width: "100%",
          backgroundColor: colorsStyles.CLR_BG_LIGHT_GREY,
          position: "absolute",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          elevation: 5,
        }}
      >
        {/* {keyboardStatus ? (
      <View
        style={{ top: "-27%", height: "100%", backgroundColor: "red" }}
      >
        <HeaderFireOne text="REGISTER" />
      </View>
    ) : null} */}
        <View
          style={{
            top: "-27%",
            opacity: keyboardStatus ? 0 : 1,
          }}
        >
          <HeaderFireOne text="REGISTER" />
        </View>
        <View
          style={{
            height: "30%",
            top: "26%",
            width: keyboardStatus ? "32%" : "42%",
            alignSelf: "center",
          }}
        >
          <Image
            style={{ alignSelf: "center", height: "100%", width: "90%" }}
            source={require("../../assets/images/registerPhone.png")}
          />
        </View>
        <View style={{ top: "28%", alignSelf: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Inter-Regular",
              color: colorsStyles.CLR_PRIMARY,
            }}
          >
            Enter Phone Number to get OTP
          </Text>
        </View>
        <View style={{ top: "30%", alignItems: "center" }}>
          <NeuInput
            placeholder="Enter Phone"
            isph={true}
            value={phoneNumber}
            setValue={setPhoneNumber}
            setIsDisabled={setIsDisabled}
          />
        </View>
        <Text>{phoneNumber}</Text>
      </View>
      <View style={{ position: "absolute", top: "80%", alignSelf: "center" }}>
        <SmallButton
          title="LOG IN"
          //   isDisabled={isDisabled || isLoading}
          onPress={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              navigation.navigate("UserOTPVerifyScreen", {
                ph: "090078601",
                otp: "123456",
              });
            }, 1000);
            // axios
            //   .post("http://172.20.10.2:3000/api/noti/sotp", {
            //     ph: "090078601",
            //   })
            //   .then((response) => {
            //     setIsLoading(false);
            //     console.log(response.data);
            //     navigation.navigate("UserOTPVerifyScreen", {
            //       ph: "090078601",
            //       otp: response.data.otp,
            //     });
            //   })
            //   .catch((error) => {
            //     setIsLoading(false);
            //     navigation.navigate("UserOTPVerifyScreen", {
            //       ph: "090078601",
            //       otp: "123456",
            //     });
            //   });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Acme-Regular",
    fontSize: 21,
    color: colorsStyles.CLR_PRIMARY,
  },
  welcomeText: {
    fontSize: 45,
    color: colorsStyles.CLR_PRIMARY,
  },
});

export default UserRegisterScreen;
