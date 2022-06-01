import { View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/stacks/RootStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Acme-Regular": require("./src/assets/fonts/Acme-Regular.ttf"),
    "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
    "Adamina-Regular": require("./src/assets/fonts/Adamina-Regular.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
