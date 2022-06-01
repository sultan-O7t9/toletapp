import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import colorsStyles from "../../styles/colors.styles";
import HeaderFireOne from "../../components/HeaderFireOne";
import { useState } from "react";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { OtpAnimation } from "../../components/Animations";
// import OTPInputView from "@twotalltotems/react-native-otp-input";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useDispatch } from "react-redux";
// import {
//   setIsRegisteredR,
//   setisShopVerifiedR,
// } from "../store/reducers/authSlice";
import axios from "axios";

const OTPVerifyScreen = ({ navigation, route }) => {
  const { ph, otp } = route.params;
  console.log(ph, otp);
  const [pinCode, setPinCode] = useState("");
  const isFocused = useIsFocused();
  const [timer, setTimer] = useState(3);
  //   const dispatch = useDispatch();
  //   const StoreData = async () => {
  //     try {
  //       await AsyncStorage.setItem("isShopVerified", "true");
  //       dispatch(setisShopVerifiedR(true));
  //       dispatch(setIsRegisteredR(true));
  //       console.warn("Data Stored Successfully");
  //     } catch (error) {
  //       dispatch(setisShopVerifiedR(false));
  //       console.log(error.message);
  //       console.warn("Cant Store Date");
  //     }
  //   };
  //   const isRegistered = false;
  //   useEffect(() => {
  //     let otpCountDown = setTimeout(() => {
  //       if (isRegistered) StoreData();
  //       else {
  //         // navigation.navigate("UserScanCodeIntro");
  //       }
  //       // axios
  //       //   .post("http://172.20.10.2:3000/api/noti/votp", { ph, otp })
  //       //   .then((response) => {
  //       //     console.log(response.data);
  //       //     if (response.data.isRegisterd && response.data.isShopVerified)
  //       //       StoreData();
  //       //   });
  //       if (timer > 0) {
  //         setTimer(timer - 1);
  //       } else if (timer == 0) {
  //         // if (isRegistered) StoreData();
  //         // else if (!isRegistered) navigation.navigate("UserScanCodeIntro");
  //       }
  //     }, 1000);
  //     if (!isFocused) {
  //       clearTimeout(otpCountDown);
  //       console.log("object");
  //     }
  //   }, []);
  useEffect(() => {
    let otpCountDown = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else if (timer == 0) {
        console.log("object");
        navigation.navigate("UserRegisterDetailsScreen");
      }
    }, 1000);
  }, [timer]);

  return (
    <>
      <SafeAreaView
        style={{ backgroundColor: colorsStyles.CLR_WHITE, height: "100%" }}
      >
        {/* <View
          style={{
            height: "60%",
            width: "100%",
            backgroundColor: colorsStyles.CLR_BG_LIGHT_GREY,
            position: "absolute",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            elevation: 5,
          }}
        > */}
        <HeaderFireOne text={"OTP Verification"} showBack={true} />
        {/* </View> */}
        <View style={{ top: "15%" }}>
          <View
            style={{
              height: "90%",
              // left: "15%",
              width: "100%",
              alignSelf: "center",
            }}
          >
            {/* <Image
              style={{ height: "100%", width: "100%" }}
              source={require("../assets/images/otpVerify.gif")}
            /> */}
            <OtpAnimation />
          </View>
          {/* <HeaderBackButton /> */}
          <View
            style={{
              maxWidth: 335,
              alignSelf: "center",
              top: "45%",
              position: "absolute",
            }}
          >
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <View
                style={{
                  borderRadius: 20,
                  width: 58,
                  height: 58,
                  borderColor: colorsStyles.CLR_PRIMARY,
                  borderWidth: 6,
                  marginRight: 16,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 26,
                    fontFamily: "serif",
                  }}
                >
                  0
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 20,
                  width: 58,
                  height: 58,
                  borderColor: colorsStyles.CLR_PRIMARY,
                  borderWidth: 6,
                  marginRight: 16,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 26,
                    fontFamily: "serif",
                  }}
                >
                  2
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 20,
                  width: 58,
                  height: 58,
                  borderColor: colorsStyles.CLR_PRIMARY,
                  borderWidth: 6,
                  marginRight: 16,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 26,
                    fontFamily: "serif",
                  }}
                >
                  4
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 20,
                  width: 58,
                  height: 58,
                  borderColor: colorsStyles.CLR_PRIMARY,
                  borderWidth: 6,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 26,
                    fontFamily: "serif",
                  }}
                >
                  8
                </Text>
              </View>
            </View>

            {/* <OTPInputView
              style={{
                width: "100%",
                height: 60,
                color: "black",
                alignSelf: "center",
                //   backgroundColor: "red",
              }}
              editable={false}
              codeInputFieldStyle={{
                borderRadius: 20,
                width: 58,
                height: 58,
                borderColor: colorsStyles.CLR_PRIMARY,
                borderWidth: 6,
                marginRight: 16,
              }}
              onCodeChanged={code => setPinCode(code)}
              pinCount={4}
              code={pinCode}
            /> */}
            <View style={{ top: "50%" }}>
              <Text
                style={{
                  fontFamily: "Adamina-Regular",
                  textAlign: "center",
                  textAlignVertical: "top",
                  fontSize: 24,
                }}
              >
                We are verifying OTP
              </Text>
            </View>
            <View style={{ top: "70%" }}>
              <Text>Code was sent to +923160000000</Text>
              <Text style={{ marginTop: 5 }}>
                This code will expire in{" "}
                <Text
                  style={{
                    color: colorsStyles.CLR_PRIMARY,
                    fontFamily: "Adamina-Regular",
                  }}
                >
                  00:{timer < 10 ? "0" + timer : timer}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default OTPVerifyScreen;
