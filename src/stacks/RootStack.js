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
import UserSelectedPlatform from "../screens/User/UserSelectedPlatform";
import UserWelcomeScreen from "../screens/User/UserWelcomeScreen";
import UserWelcomeScreenTwo from "../screens/User/UserWelcomeScreenTwo";
import UserOTPVerifyScreen from "../screens/User/UserOTPVerifyScreen";
import UserAllPlatformsScreen from "../screens/User/UserAllPlatformsScreen";
import UserRegisterScreen from "../screens/User/UserRegisterScreen";
import UserWebViewScreen from "../screens/User/UserWebViewScreen";

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
      {/*
        /* <Stack.Screen name="UserQrScanScreen" component={UserQrScanScreen} /> 
        <Stack.Screen
          name="UserRegisterScreen"
          component={UserRegisterScreen}
        />
      */}
      {/* <Stack.Screen name="Init" component={Init} /> */}
      {/* <Stack.Screen
        name="FirebetLoadingScreen"
        component={FirebetLoadingScreen}
      /> */}
      {/* ------------------User Screens------------------ */}

      <Stack.Screen name="UserWelcomeScreen" component={UserWelcomeScreen} />
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
      <Stack.Screen name="UserWebViewScreen" component={UserWebViewScreen} />
      {/* <Stack.Screen name="UserScanCodeIntro" component={UserScanCodeIntro} />
      
      <Stack.Screen
        name="UserAllPlatformsScreen"
        component={UserAllPlatformsScreen}
      />
      */}
      {/* Platform Screeen Here  */}
      {/* <Stack.Screen name="UserWebViewScreen" component={UserWebViewScreen} /> */}
      {/* ------------------Shop Screens------------------ */}
      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DashBoard" component={DashBoard} /> */}
      {/* ------------------Admin Screens------------------ */}
      {/* <Stack.Screen name="AdminLogin" component={AdminLogin} />
      <Stack.Screen name="AdminDashboard" component={NavigationFooter} />
      <Stack.Screen name="SpecificShop" component={SpecificShop} /> */}
    </Stack.Navigator>
  );
};

export default RootStack;
