// import axios from "axios";
import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CircularProgressBar from "../../components/CircularProgressBar";
import HeaderFireOne from "../../components/HeaderFireOne";
import ProfitView from "../../components/ProfitView";
import UserSummaryDetailsComponent from "../../components/UserSummaryDetailsComponent";
// import URL from "../URL";
// import { NeomorphBlur } from "react-native-neomorph-shadows";
import colorsStyles from "../../styles/colors.styles";
import { useWindowDimensions } from "react-native";
// import Icon from "react-native-vector-icons/dist/FontAwesome";
import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const AdminShopDetailScreen = ({ route }) => {
  // console.log(route.params.id);
  // const { id } = route.params;
  const id = 10;
  //   const [render, setRender] = useState(<PreLoader />);
  const [shopDetails, setShopDetails] = useState({});
  //   useEffect(async () => {
  //     const token = await AsyncStorage.getItem("_TOKEN");
  //     console.log(token);
  //     axios
  //       .post(
  //         `${URL}/api/shop/gsbi`,
  //         { id },
  //         {
  //           headers: {
  //             Authorization: token,
  //           },
  //         }
  //       )
  //       .then((r) => {
  //         console.log(r.data);
  //         setShopDetails(r.data);
  //       })
  //       .catch((e) => {
  //         console.log(e.message);
  //       });
  //   }, []);
  const dimensions = {
    width: useWindowDimensions().width * 0.5,
    height: 50,
  };
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        // alignItems:'center',
        //justifyContent:'center',
      }}
    >
      <HeaderFireOne text={"Shops"} />

      <View
        style={{
          height: "14%",
        }}
      ></View>
      {/* <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UpdateShopManager", id);
          }}
        >
          <View
            style={{
              shadowRadius: 3,
              backgroundColor: colorsStyles.CLR_PRIMARY,
              width: dimensions.width,
              height: dimensions.height,
              left: "10%",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Icon name="edit" size={30} color="#fff" /> 
          </View>
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          top: "10%",
        }}
      >
        <UserSummaryDetailsComponent
          title={shopDetails.users || 10}
          text="Registered Users"
        />
      </View>
      <View
        style={{
          top: "-14%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#707585",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Profit Summary
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          top: "-13%",
        }}
      >
        <ProfitView />
      </View>

      <View
        style={{
          alignItems: "center",
          // top: "2%",
          top: "-10%",
        }}
      >
        <CircularProgressBar />
      </View>
    </View>
  );
};

export default AdminShopDetailScreen;
