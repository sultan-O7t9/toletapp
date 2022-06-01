import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
import colorsStyles from "../styles/colors.styles";
import AdminUserSummaryScreen from "../screens/Admin/AdminUserSummaryScreen";
import AdminRegisterShopScreen from "../screens/Admin/AdminRegisterShopScreen";
import AdminShopListScreen from "../screens/Admin/AdminShopListScreen";
import AdminDashboardScreen from "../screens/Admin/AdminDashboardScreen";
// import MrGreenModal from "./MrGreenModal";
// import HeaderBet365 from "./HeaderBet365";

import Icon from "react-native-vector-icons/MaterialIcons";
import AdminShopDetailScreen from "../screens/Admin/AdminShopDetailScreen";
// import AdminDashboardScreen from "../screens/AdminDashboardScreen";
// import AdminShopListScreen from "../screens/AdminShopListScreen";
// import AdminRegisterShopScreen from "../screens/AdminRegisterShopScreen";
// import AdminUserSummaryScreen from "../screens/AdminUserSummaryScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: "-8%",
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
    >
      <View
        style={{
          width: 70,
          height: 70,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 35,
        }}
      >
        {/* <View
          style={{
            position: "absolute",
            width: 70,
            top: "44%",
            // top: "-2%",
            alignSelf: "center",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            // borderRadius: 35,
            borderBottomLeftRadius: 150 / 2,
            borderBottomRightRadius: 150 / 2,
            backgroundColor: "white",
          }}
        ></View> */}
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: colorsStyles.CLR_PRIMARY,
            borderWidth: 4,
            borderColor: colorsStyles.CLR_WHITE,
          }}
        >
          {children}
        </View>
      </View>
    </TouchableOpacity>
  </>
);

const Screen5 = () => {
  return <View></View>;
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 70,

          backgroundColor: "#313033",
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="AdminDashboardScreen"
        component={AdminDashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Icon
                name="home"
                size={30}
                color="#900"
                style={{
                  //alignSelf:'center',
                  //justifyContent:'center',
                  // width: "100%",
                  //height: "100%",
                  color: focused ? "orange" : "white",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AdminShopListScreen"
        component={AdminShopListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Icon
                name="store"
                size={30}
                color="#900"
                style={{
                  //alignSelf:'center',
                  //justifyContent:'center',
                  // width: "100%",
                  //height: "100%",
                  color: focused ? "orange" : "white",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AdminRegisterShopScreen"
        component={AdminRegisterShopScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/images/plus.png")}
              style={{
                width: 30,
                height: 30,

                //backgroundColor:"white"
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="AdminUserSummaryScreen"
        component={AdminUserSummaryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Icon
                name="person"
                size={30}
                color="#900"
                style={{
                  //alignSelf:'center',
                  //justifyContent:'center',
                  // width: "100%",
                  //height: "100%",
                  color: focused ? "orange" : "white",
                }}
              />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Screen5"
        component={Screen5}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../assets/images/icon4.png")}
                style={{
                  //alignSelf:'center',
                  //justifyContent:'center',
                  // width: "100%",
                  //height: "100%",
                  tintColor: focused ? "orange" : "white",
                }}
              />
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name="AdminShopDetailScreen"
        component={AdminShopDetailScreen}
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <View style={{ justifyContent: "center", alignItems: "center" }}>
        //       <Icon
        //         name="home"
        //         size={30}
        //         color="#900"
        //         style={{
        //           //alignSelf:'center',
        //           //justifyContent:'center',
        //           // width: "100%",
        //           //height: "100%",
        //           color: focused ? "orange" : "white",
        //         }}
        //       />
        //     </View>
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

const AdminBottomNavigation = () => {
  return <MyTabs />;
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});

export default AdminBottomNavigation;
