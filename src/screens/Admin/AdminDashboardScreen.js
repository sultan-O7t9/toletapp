import React from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
import { Text, View, FlatList, Alert } from "react-native";
import ProfitView from "../../components/ProfitView";
// import UserListItem from "../components/UserListItem";
import colorsStyles from "../../styles/colors.styles";
import CircularProgressBar from "../../components/CircularProgressBar";
// import QrCodeButton from "../components/QrCodeButton";
// import ShadowView from "../components/ShadowView";
import HeaderFireOne from "../../components/HeaderFireOne";
// import ButtonCTA from "../components/ButtonCTA";
// import AppFooter from "../components/AppFooter";
// import NeuButtonOrange from "../components/NeuButtonOrange";
// import PlatformListItem from "../components/PlatformListItem";
// import ShopName from "../components/ShopName";
// import UserStatInfoButton from "../components/UserStatInfoButton";
import NeuView from "../../components/NeuView";
import RegisteredShopsView from "../../components/RegisteredShopsView";
import { useState } from "react";
// import { useEffect } from "react";
// import dimensions from "../styles/dimensions";
// import PreLoader from "../components/PreLoader";
// import LogoutBtn from "../components/LogoutBtn";
// import URL from "../URL";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useDispatch } from "react-redux";
// import { setisAdminVerifiedR } from "../store/reducers/authSlice";
const SHOPS = [
  { id: 1, name: "shop1", profit: 640 },
  { id: 2, name: "shop2", profit: 512 },
  { id: 3, name: "shop3", profit: 493 },
  { id: 4, name: "shop4", profit: 469 },
  { id: 5, name: "shop5", profit: 227 },
  { id: 6, name: "shop6", profit: 221 },
];
const AdminDashboardScreen = ({ navigation }) => {
  const [topShops, setTopShops] = useState(SHOPS);
  // const dispatch = useDispatch();
  // useEffect(async () => {
  //   const token = await AsyncStorage.getItem("_TOKEN");
  //   console.log("TOKEN________________________", token);
  //   if (token)
  //     axios
  //       .get(`${URL}/api/shop/gts`, {
  //         headers: {
  //           Authorization: token,
  //         },
  //       })
  //       .then(r => {
  //         console.log("TOP SHOPS___________", r.data);
  //         if (r.data.includes("please authenticate")) {
  //           Alert.alert("Session Expired");
  //           throw new Error("login");
  //         } else {
  //           setTopShops(r.data);
  //         }
  //       })
  //       .catch(async e => {
  //         if (e.message.includes("login")) {
  //           await AsyncStorage.setItem("isAdminVerified", "false");
  //           dispatch(setisAdminVerifiedR(false));
  //         }
  //         console.log(e.message);
  //       });
  //   else {
  //     await AsyncStorage.setItem("isAdminVerified", "false");
  //     dispatch(setisAdminVerifiedR(false));
  //   }
  // }, []);

  return (
    <View style={{ height: "90%", backgroundColor: "#fff" }}>
      <View style={{ top: "-20%" }}>
        <HeaderFireOne text="DASHBOARD" />
      </View>
      {/* <View style={{ zIndex: 20, position: "absolute", right: 0, top: 0 }}>
        <LogoutBtn />
      </View> */}
      <View
        style={{
          //   top: "20%",
          top: "20%",
          backgroundColor: colorsStyles.CLR_BG,
          height: 610,
          // flexDirection: "row",
          // borderBottomWidth: 3,
          // borderBottomRightRadius: 30,
          // borderBottomLeftRadius: 30,
          //   borderRadius: 30,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // borderBottomWidth: 2,
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ left: "-34%", top: "5%" }}>
          <NeuView title="Profit Summary" />
        </View>

        <View
          style={{
            top: "5%",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <ProfitView />
        </View>
        <View style={{ top: "8%" }}>
          <CircularProgressBar />
        </View>
        <View style={{ left: "-32%", top: "10%" }}>
          <NeuView title="Registered Shops" />
        </View>
        <View style={{ top: "10%" }}>
          {SHOPS.length != 0 ? (
            <RegisteredShopsView
              topShops={SHOPS.length < 5 ? SHOPS : SHOPS.slice(0, 5)}
            />
          ) : (
            <Text
              style={{
                alignSelf: "center",
                margin: 20,
                fontSize: 20,
                color: "#777",
                fontWeight: "bold",
              }}
            >
              No Shops Registered
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};
export default AdminDashboardScreen;
