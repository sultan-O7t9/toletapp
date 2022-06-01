import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Keyboard,
} from "react-native";
// import ButtonCTA from "../components/ButtonCTA";
// import colorsStyles from "../styles/colors.styles";
// import HeaderFireOne from "../components/HeaderFireOne";
// import InputField from "../components/InputField";
// import SmallButton from "../components/SmallButton";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setAuthToken, setisAdminVerifiedR } from "../store/reducers/authSlice";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import HeaderFireOne from "../../components/HeaderFireOne";
import InputField from "../../components/InputField";
import SmallButton from "../../components/SmallButton";
import colorsStyles from "../../styles/colors.styles";
// import URL from "../URL";
const UserLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [password, setPassword] = useState("");
  //   const dispatch = useDispatch();
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  }, []);
  //   const StoreData = async token => {
  //     try {
  //       await AsyncStorage.setItem("isAdminVerified", "true");
  //       await AsyncStorage.setItem("_TOKEN", token);
  //       // await AsyncStorage.setItem("shopID", id);
  //       dispatch(setAuthToken(token));
  //       dispatch(setisAdminVerifiedR(true));
  //       // dispatch(setIsRegisteredR(true));
  //       console.warn("Data Stored Successfully");
  //     } catch (error) {
  //       dispatch(setisAdminVerifiedR(false));
  //       dispatch(setAuthToken(""));
  //       console.log(error.message);
  //       console.warn("Cant Store Date");
  //     }
  //   };

  return (
    <View style={styles.container}>
      <HeaderFireOne text="LOGIN" />
      {!keyboardStatus ? (
        <>
          <Image
            style={styles.image}
            source={require("../../assets/images/profile.png")}
          />
        </>
      ) : null}
      <View
        style={{
          alignItems: "center",
          position: keyboardStatus ? "absolute" : "relative",
          alignSelf: "center",
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <InputField placeholder="Email" value={email} setValue={setEmail} />
        </View>
        <InputField
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
        <View style={{ marginTop: "10%" }}>
          <SmallButton
            // isDisabled={!email || !password || isDisabled}
            onPress={() => {
              // StoreData();
              // return true;
              navigation.navigate("UserAllPlatformsScreen");
              //   setIsDisabled(true);
              //   console.log("object");
              //   console.log(URL);
              //   const admin = { email: email.trim(), passwd: password };
              //   console.log(admin);
              //   console.log(`${URL}/api/admin/login`);
              //   axios
              //     .post(`${URL}/api/admin/login`, admin)
              //     .then(r => {
              //       setIsDisabled(false);
              //       console.log(r.data);
              //       if (r.data == "err") throw new Error(r.data.err);
              //       else {
              //         console.log(r.data.token);
              //         StoreData(r.data.token);
              //       }
              //     })
              //     .catch(e => {
              //       setIsDisabled(false);
              //       console.log(e.message);
              //     });
            }}
            title="LOG IN"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UserRegisterScreen");
            }}
          >
            <View
              style={{
                marginTop: 30,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: colorsStyles.CLR_PRIMARY,
                }}
              >
                Dont have an Account? Register
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  image: {
    alignSelf: "center",
    marginTop: "30%",
  },
});

export default UserLoginScreen;
