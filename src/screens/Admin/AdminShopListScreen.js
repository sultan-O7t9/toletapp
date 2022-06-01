// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import HeaderFireOne from "../../components/HeaderFireOne";
import ShopName from "../../components/ShopName";
// import { useDispatch } from "react-redux";
// import { setisAdminVerifiedR } from "../store/reducers/authSlice";
// import URL from "../URL";

const AdminShopListScreen = () => {
  const [shops, setShops] = useState([]);
  //   const dispatch = useDispatch();
  //   const [refreshing, setRefreshing] = useState(false);
  const SHOPS = [
    { name: "Shop1", id: 1 },
    { name: "Shop2", id: 2 },
    { name: "Shop3", id: 3 },
    { name: "Shop4", id: 4 },
    { name: "Shop5", id: 5 },
    { name: "Shop6", id: 6 },
    { name: "Shop7", id: 7 },
    { name: "Shop8", id: 8 },
    { name: "Shop9", id: 9 },
    { name: "Shop10", id: 10 },
    { name: "Shop11", id: 11 },
    { name: "Shop12", id: 12 },
    { name: "Shop13", id: 13 },
    { name: "Shop14", id: 14 },
    { name: "Shop15", id: 15 },
  ];
  //   const handleRefresh = async () => {
  //     const token = await AsyncStorage.getItem("_TOKEN");
  //     if (token)
  //       axios
  //         .get(`${URL}/api/shop/gsn`, {
  //           headers: {
  //             Authorization: token,
  //           },
  //         })
  //         .then((r) => {
  //           console.log("TOP SHOPS___________", r.data);
  //           if (r.data.includes("please authenticate")) {
  //             Alert.alert("Session Expired");
  //             throw new Error("login");
  //           } else {
  //             console.log(r.data);
  //             setShops(r.data);
  //           }
  //         })
  //         .catch(async (e) => {
  //           console.log(e.message);
  //           if (e.message.includes("login")) {
  //             await AsyncStorage.setItem("isAdminVerified", "false");
  //             dispatch(setisAdminVerifiedR(false));
  //           }
  //         });
  //     else {
  //       await AsyncStorage.setItem("isAdminVerified", "false");
  //       dispatch(setisAdminVerifiedR(false));
  //     }
  //   };

  //   useEffect(() => {
  //     // setShops(SHOPS);
  //     console.log(`${URL}/api/shop/gsn`);
  //     handleRefresh();
  //   }, []);

  const renderShops = ({ item }) => (
    <ShopName name={item.name} id={item.id} status="Details" />
  );

  return (
    <View
      style={{
        height: "100%",
        // backgroundColor:'red'
      }}
    >
      <HeaderFireOne text="Shops" />
      <View style={{ top: "20%", height: "80%" }}>
        {SHOPS.length == 0 ? (
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#777",
              alignSelf: "center",
            }}
          >
            No Shops Registered
          </Text>
        ) : (
          <FlatList
            data={SHOPS}
            renderItem={renderShops}
            keyExtractor={item => item.name}
            ListFooterComponent={
              <View style={{ width: "100%", height: 100 }} />
            }
            // refreshing={refreshing}
            // onRefresh={() => {
            //   setRefreshing(true);
            //   handleRefresh();
            //   setRefreshing(false);
            // }}
          />
        )}
      </View>
    </View>
  );
};

export default AdminShopListScreen;
