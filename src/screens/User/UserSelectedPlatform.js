import React from "react";
import { View, SafeAreaView } from "react-native";

// import ImageSlider from "../components/ImageSlider";
// import PlatformListItem from "../components/PlatformListItem";
// import MrGreenModal from "../components/MrGreenModal";
import PlatformModal from "../../components/PlatformModal";
import AppFooter from "../../components/AppFooter";
import colorsStyles from "../../styles/colors.styles";
import { ImageBackground } from "react-native";
import HeaderFireOne from "../../components/HeaderFireOne";
const UserSelectedPlatform = ({ navigation, route }) => {
  const { name, img, url } = route.params;
  console.log(route.params);

  return (
    <SafeAreaView style={{ backgroundColor: "#E5E5E5" }}>
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
            // top: "55%",
            bottom: 10,
            height: "50%",
            width: "100%",
          }}
        >
          {/* <FlatList
            style={{ width: "100%" }}
            contentContainerStyle={{ alignItems: "center" }}
            data={PlatformList}
            renderItem={renderPlatformItem}
            keyExtractor={item => item.platformName}
          /> */}
          <PlatformModal
            name={name}
            img={img}
            url={url}
            backgroundcolor="#8DAAE2"
            titlecolor={colorsStyles.CLR_PRIMARY}
            subtitlecolor="#808080"
          />
        </View>
        <AppFooter />
      </View>
    </SafeAreaView>
  );
};

export default UserSelectedPlatform;
{
  /* <PlatformModal
        name={name}
        img={img}
        url={url}
        backgroundcolor="#ffffff"
        titlecolor={colorsStyles.CLR_PRIMARY}
        subtitlecolor="#808080"
      />
      <AppFooter /> */
}
