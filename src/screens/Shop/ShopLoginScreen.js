import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import HeaderFireOne from "../../components/HeaderFireOne";
import InputField from "../../components/InputField";
import SmallButton from "../../components/SmallButton";
import { useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useDispatch } from "react-redux";
// import {
//   setIsRegisteredR,
//   setisAdminVerifiedR,
// } from "../store/reducers/authSlice";
// import axios from "axios";
// import URL from "../URL";
const ShopLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [password, setPassword] = useState("");
  //   const dispatch = useDispatch();

  //   const StoreData = async id => {
  //     try {
  //       await AsyncStorage.setItem("isAdminVerified", "true");
  //       await AsyncStorage.setItem("shopID", id);
  //       dispatch(setisAdminVerifiedR(true));
  //       dispatch(setIsRegisteredR(true));
  //       console.warn("Data Stored Successfully");
  //     } catch (error) {
  //       dispatch(setisAdminVerifiedR(false));
  //       console.log(error.message);
  //       console.warn("Cant Store Date");
  //     }
  //   };

  return (
    <View style={styles.container}>
      <HeaderFireOne text="SHOP MANAGER" />
      <Image
        style={styles.image}
        source={require("../../assets/images/profile.png")}
      />
      <View
        style={{
          alignItems: "center",
        }}
      >
        <InputField placeholder="Email" value={email} setValue={setEmail} />

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
              navigation.navigate("ShopDashboardScreen");
              //   //   setIsDisabled(true);
              //   console.log("object");
              //   //   console.log(URL);
              //   const shop = { email, passwd: password };
              //   console.log(shop);

              //   axios
              //     .post(`${URL}/api/shop/login`, shop)
              //     .then(r => {
              //       setIsDisabled(false);
              //       console.log(r.data);
              //       if (r.data.err) throw new Error(r.data.err);
              //       else StoreData(r.data.user.uname);
              //     })
              //     .catch(e => {
              //       setIsDisabled(false);
              //       console.log(e.message);
              //     });
            }}
            title="LOG IN"
          />
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

export default ShopLoginScreen;
