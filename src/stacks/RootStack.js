import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import UserWelcomeScreen from "../screens/User/UserWelcomeScreen";
// import UserWelcomeScreenTwo from "../screens/User/UserWelcomeScreenTwo";
// import UserRegisterScreen from "../screens/User/UserRegisterScreen";
// import UserOTPVerifyScreen from "../screens/User/UserOTPVerifyScreen";
// import UserAllPlatformsScreen from "../screens/User/User/UserAllPlatformsScreen";
// import UserWebViewScreen from "../screens/User/UserWebViewScreen";
// import UserScanCodeIntro from "../screens/User/UserScanCodeIntro";
// import UserQrScanScreen from "../screens/User/UserQrScanScreen";
// import FirebetLoadingScreen from "../components/FirebetLoadingScreen";
// import Login from "../screens/Login";
// import AdminRegisterShop from "../screens/AdminRegisterShop";
// import AdminLogin from "../screens/AdminLogin";
// import DashBoard from "../screens/DashBoard";
// import AdminShopList from "../screens/AdminShopList";
// import AdminDashboard from "../screens/AdminDashboard";
// import RegisteredShopsView from "../components/RegisteredShopsView";
// import ShopView from "../components/ShopView";
// import RegisterShop from "../screens/RegisterShop";
// import SpecificShop from "../screens/SpecificShop";
// import AllUsers from "../screens/AllUsers";
// import NavigationFooter from "../components/NavigationFooter";
// import Init from "../screens/Init";

// ------------------User Screens------------------
import UserSelectedPlatform from "../screens/User/UserSelectedPlatform";
import UserWelcomeScreen from "../screens/User/UserWelcomeScreen";
import UserWelcomeScreenTwo from "../screens/User/UserWelcomeScreenTwo";
import UserOTPVerifyScreen from "../screens/User/UserOTPVerifyScreen";
import UserAllPlatformsScreen from "../screens/User/UserAllPlatformsScreen";
import UserRegisterScreen from "../screens/User/UserRegisterScreen";
import UserWebViewScreen from "../screens/User/UserWebViewScreen";

// ------------------Admin Screens------------------
import AdminLoginScreen from "../screens/Admin/AdminLoginScreen";
import AdminDashboardScreen from "../screens/Admin/AdminDashboardScreen";
import AdminShopListScreen from "../screens/Admin/AdminShopListScreen";
import AdminRegisterShopScreen from "../screens/Admin/AdminRegisterShopScreen";
import AdminUserSummaryScreen from "../screens/Admin/AdminUserSummaryScreen";
import AdminBottomNavigation from "../navigations/AdminBottomNavigation";

// const Register = createStackNavigator();
// const RegisterStack = () => {
//   return (
//     <Register.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="UserWelcomeScreen" component={UserWelcomeScreen} />
//       <Stack.Screen
//         name="UserWelcomeScreenTwo"
//         component={UserWelcomeScreenTwo}
//       />
//       <Stack.Screen name="UserScanCodeIntro" component={UserScanCodeIntro} />
//       <Stack.Screen name="UserRegisterScreen" component={UserRegisterScreen} />
//       <Stack.Screen
//         name="UserOTPVerifyScreen"
//         component={UserOTPVerifyScreen}
//       />
//     </Register.Navigator>
//   );
// };

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* ------------------User Screens------------------ */}
      {/* <Stack.Screen name="UserWelcomeScreen" component={UserWelcomeScreen} />
      <Stack.Screen
        name="UserWelcomeScreenTwo"
        component={UserWelcomeScreenTwo}
      />
      <Stack.Screen name="UserRegisterScreen" component={UserRegisterScreen} />
      <Stack.Screen
        name="UserOTPVerifyScreen"
        component={UserOTPVerifyScreen}
      />
      <Stack.Screen
        name="UserAllPlatformsScreen"
        component={UserAllPlatformsScreen}
      />
      <Stack.Screen
        name="UserSelectedPlatform"
        component={UserSelectedPlatform}
      />
      <Stack.Screen name="UserWebViewScreen" component={UserWebViewScreen} /> */}
      {/* <Stack.Screen name="UserScanCodeIntro" component={UserScanCodeIntro} />
       */}
      {/* ------------------Shop Screens------------------ */}
      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DashBoard" component={DashBoard} /> */}
      {/* ------------------Admin Screens------------------ */}
      <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
      <Stack.Screen
        name="AdminDashboardScreen"
        component={AdminBottomNavigation}
      />
      <Stack.Screen
        name="AdminShopListScreen"
        component={AdminShopListScreen}
      />
      <Stack.Screen
        name="AdminRegisterShopScreen"
        component={AdminRegisterShopScreen}
      />
      <Stack.Screen
        name="AdminUserSummaryScreen"
        component={AdminUserSummaryScreen}
      />

      {/* <Stack.Screen name="AdminLogin" component={AdminLogin} />
      <Stack.Screen name="AdminDashboard" component={NavigationFooter} />
      <Stack.Screen name="SpecificShop" component={SpecificShop} /> */}
    </Stack.Navigator>
  );
};

export default RootStack;
