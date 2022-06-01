import React from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import HeaderFireOne from "../../components/HeaderFireOne";
import ProfitView from "../../components/ProfitView";
import UserListItem from "../../components/UserListItem";
import colorsStyles from "../../styles/colors.styles";
import CircularProgressBar from "../../components/CircularProgressBar";
// import QrCodeButton from "../components/QrCodeButton";
// import Modal from "../components/Modal";
import { useState } from "react";
import { useEffect } from "react";
// import PreLoader from "../components/PreLoader";
// import LogoutBtn from "../components/LogoutBtn";
// import axios from "axios";
// import URL from "../URL";
// import AsyncStorage from "@react-native-async-storage/async-storage";
const ShopDashboardScreen = () => {
  const [qrModal, setQrModal] = useState(false);
  const [shopID, setShopID] = useState("");
  //   const getData = async () => {
  //     try {
  //       const shopID = await AsyncStorage.getItem("shopID");

  //       console.log(shopID);
  //       setShopID(shopID);
  //     } catch (error) {
  //       console.log("Can not get data");
  //     }
  //   };

  //   const [users, setUsers] = useState([]);
  const users = [
    { uname: "user_id 1", is_online: 1 },
    { uname: "user_id 2", is_online: 1 },
    { uname: "user_id 3", is_online: 1 },
    { uname: "user_id 4", is_online: 1 },
    { uname: "user_id 5", is_online: 1 },
  ];
  const [render, setRender] = useState("");

  const screen = (
    <>
      <View style={{ height: "100%", backgroundColor: "#fff" }}>
        <View
          style={{
            backgroundColor: colorsStyles.CLR_BG,
            height: "60%",
            // flexDirection: "row",
            // borderBottomWidth: 3,
            // borderBottomRightRadius: 30,
            // borderBottomLeftRadius: 30,
            borderRadius: 30,
            // borderBottomWidth: 2,
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ top: "-27%", left: "-50%" }}>
            <HeaderFireOne text="Dashboard" />
          </View>
          {/* <View style={{ left: "42%", top: "2%" }}>
            <LogoutBtn />
          </View> */}
          {/* <View
            style={{
              position: "absolute",
              right: "3%",
              top: "86%",
              zIndex: 10,
            }}
          >
            <QrCodeButton shopID={shopID} setQrModal={setQrModal} />
          </View> */}
          <Text
            style={{
              fontSize: 36,
              fontWeight: "600",
              fontFamily: "Poppins-Medium",
              marginTop: "10%",
              top: "12%",
              color: colorsStyles.CLR_PROFIT,
            }}
          >
            Profit
          </Text>
          <View style={{ top: "10%" }}>
            <ProfitView />
          </View>
          <View
            style={{
              top: "15%",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <CircularProgressBar />
          </View>
        </View>

        <View style={{ height: "35%", top: "3%" }}>
          <FlatList
            // horizontal
            data={users}
            renderItem={({ item }) => (
              <UserListItem
                id={item.uname}
                status={item.is_online == 1 ? "Online" : "Offline"}
              />
            )}
            keyExtractor={item => item.uname}
          />
        </View>
      </View>
    </>
  );

  //   useEffect(() => {
  //     getData();
  //     const shop = { id: 1 };
  //     axios
  //       .post(`${URL}/api/shop/gsu`, shop)
  //       .then((r) => {
  //         console.log(r.data);
  //         setUsers(r.data);
  //       })
  //       .catch((r) => {
  //         console.log(r.message);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     setRender(screen);
  //   }, [users, shopID]);

  //   return (
  //     <>
  //       {qrModal ? (
  //         <View
  //           style={{
  //             position: "absolute",
  //             height: "100%",
  //             zIndex: 10,
  //             width: "100%",
  //             backgroundColor: "#000",
  //             opacity: 0.5,
  //           }}
  //         ></View>
  //       ) : null}
  //       <View
  //         style={{
  //           position: "absolute",
  //         }}
  //       >
  //         <Modal visible={qrModal} setVisible={setQrModal} shopID={shopID} />
  //       </View>
  //       {render}
  //     </>
  //   );
  return screen;
};
export default ShopDashboardScreen;
