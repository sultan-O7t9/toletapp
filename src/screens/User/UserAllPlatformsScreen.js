import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
// import ImageSlider from "../components/ImageSlider";
import PlatformListItem from "../../components/PlatformListItem";
import colorsStyles from "../../styles/colors.styles";
import AppFooter from "../../components/AppFooter";
import HeaderFireOne from "../../components/HeaderFireOne";
import { ImageBackground } from "react-native";
// import { useSelector } from "react-redux";
// import LogoutBtn from "../components/LogoutBtn";

const UserAllPlatformsScreen = ({ navigation }) => {
  //   const isAdminVerified = useSelector((state) => state.auth.isAdminVerified);

  const PlatformList = [
    {
      platformName: "MrGreen",
      platformURL: "https://www.mrgreen.com/",
      platformImg: require("../../assets/images/logoMrGreen.png"),
    },
    {
      platformName: "MrGreen2",
      platformURL: "https://www.mrgreen.com/",
      platformImg: require("../../assets/images/logoMrGreen.png"),
    },
    {
      platformName: "MrGreen3",
      platformURL: "https://www.mrgreen.com/",
      platformImg: require("../../assets/images/logoMrGreen.png"),
    },
    {
      platformName: "MrGreen4",
      platformURL: "https://www.mrgreen.com/",
      platformImg: require("../../assets/images/logoMrGreen.png"),
    },
  ];

  const renderPlatformItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("UserSelectedPlatform", {
            name: item.platformName,
            img: item.platformImg,
            url: item.platformURL,
          });
        }}
      >
        <PlatformListItem name={item.platformName} img={item.platformImg} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: colorsStyles.CLR_WHITE }}>
      <View style={{ height: "100%" }}>
        <HeaderFireOne text={"All Platforms"} />
        <View style={{ position: "absolute", right: 0 }}>
          {/* <LogoutBtn /> */}
        </View>
        {/* <ImageSlider /> */}
        <View
          style={{
            alignSelf: "center",
            top: "18%",
            width: "100%",
            height: "25.2%",
          }}
        >
          {/* <Image
            source={require("../assets/images/imageslider1.png")}
            style={{
              //   height: 12,
              //   width: 30,
              marginLeft: "2%",
            }}
          /> */}
          <ImageBackground
            style={{ height: "100%", width: "100%" }}
            source={require("../../assets/images/imageslider1.png")}
            resizeMode="cover"
          ></ImageBackground>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "55%",
            height: "40%",
            width: "100%",
          }}
        >
          <FlatList
            style={{ width: "100%" }}
            contentContainerStyle={{ alignItems: "center" }}
            data={PlatformList}
            renderItem={renderPlatformItem}
            keyExtractor={item => item.platformName}
          />
        </View>
        <AppFooter />
      </View>
    </SafeAreaView>
  );
};

export default UserAllPlatformsScreen;
