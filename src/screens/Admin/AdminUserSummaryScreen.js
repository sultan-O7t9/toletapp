// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
// import { useDispatch } from "react-redux";
import UserSummaryComponent from "../../components/UserSummaryComponent";
import UserSummaryDetailsComponent from "../../components/UserSummaryDetailsComponent";
// import PreLoader from "../components/PreLoader";
// import URL from "../URL";

const AdminUserSummaryScreen = () => {
  //   const [render, setRender] = useState(<PreLoader />);
  const [userSummary, setUserSummary] = useState({});
  //   const dispatch = useDispatch();
  //   useEffect(async () => {
  //     const token = AsyncStorage.getItem("_TOKEN");
  //     if (token)
  //       axios
  //         .get(`${URL}/api/user/fos`)
  //         .then(r => {
  //           console.log(r.data);
  //           if (
  //             r.data.typeof == "string" &&
  //             r.data.includes("please authenticate")
  //           ) {
  //             Alert.alert("Session Expired");
  //             throw new Error("login");
  //           } else {
  //             setUserSummary(r.data);
  //           }
  //         })
  //         .catch(async e => {
  //           if (e.message.includes("login")) {
  //             await AsyncStorage.setItem("isAdminVerified", "false");
  //             dispatch(setisAdminVerifiedR(false));
  //           }
  //         });
  //     else {
  //       await AsyncStorage.setItem("isAdminVerified", "false");
  //       dispatch(setisAdminVerifiedR(false));
  //     }
  //   }, []);

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <UserSummaryComponent />

      <View
        style={{
          top: "-46%",
        }}
      >
        <View
          style={{
            width: "100%",
          }}
        >
          <UserSummaryDetailsComponent
            text={"Active"}
            title={userSummary.online || 0}
          />
        </View>

        <View
          style={{
            top: "-16%",
          }}
        >
          <UserSummaryDetailsComponent
            text={"Registered"}
            title={userSummary.totalUser || 0}
          />
        </View>
      </View>
    </View>
  );
};

export default AdminUserSummaryScreen;
