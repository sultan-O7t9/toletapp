import React, { useState } from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
import { Text, View, FlatList, Alert, Keyboard } from "react-native";
// import HeaderFireOne from "../components/HeaderFireOne";
// import ProfitView from "../components/ProfitView";
// import UserListItem from "../components/UserListItem";
import colorsStyles from "../../styles/colors.styles";
// import CircularProgressBar from "../components/CircularProgressBar";
// import QrCodeButton from "../components/QrCodeButton";
// import ShadowView from "../components/ShadowView";
// import HeaderFireTwo from "../components/HeaderFireTwo";
// import ButtonCTA from "../components/ButtonCTA";
// import AppFooter from "../components/AppFooter";
// import PlatformListItem from "../components/PlatformListItem";
// import ShopName from "../components/ShopName";
// import UserStatInfoButton from "../components/UserStatInfoButton";
// import NeuView from "../components/NeuView";
// import RegisteredShopsView from "../components/RegisteredShopsView";
// import NeumorphicButton from "../components/NeumorphicButton";
// import PreLoader from "../components/PreLoader";
import { useEffect } from "react";
import InputField from "../../components/InputField";
import NeuView from "../../components/NeuView";
import HeaderFireOne from "../../components/HeaderFireOne";
import SmallButton from "../../components/SmallButton";
// import axios from "axios";
// import URL from "../URL";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { setisAdminVerifiedR } from "../store/reducers/authSlice";
// import { useDispatch } from "react-redux";
const AdminRegisterShopScreen = () => {
  const [Name, setName] = React.useState("");
  const [VID, setVID] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [AccountNo, setAccountNo] = React.useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  //   const dispatch = useDispatch();
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  }, []);

  const clearInputs = () => {
    setName("");
    setVID("");
    setEmail("");
    setAccountNo("");
  };

  const registerShop = async () => {
    const shop = {
      name: Name,
      email: Email,
      vid_no: VID,
      bank_acc: AccountNo,
    };
    // console.log(shop);
    // setIsDisabled(true);
    // const token = await AsyncStorage.getItem("_TOKEN");
    // console.log("REGISTER  SHOP", token);
    // if (token)
    //   axios
    //     .post(`${URL}/api/shop/c`, shop, {
    //       headers: {
    //         Authorization: "GANDU",
    //       },
    //     })
    //     .then((r) => {
    //       if (
    //         r.data.typeof == "string" &&
    //         r.data.includes("please authenticate")
    //       ) {
    //         Alert.alert("Session Expired");
    //         throw new Error("login");
    //       } else {
    //         console.log(r.data);
    //         if (r.data) {
    //           setIsDisabled(false);
    //           clearInputs();
    //           Alert.alert("User Created Successfully");
    //         } else {
    //           setIsDisabled(false);
    //           throw new Error("Not created");
    //         }
    //       }
    //     })
    //     .catch(async (e) => {
    //       if (e.message.includes("login")) {
    //         await AsyncStorage.setItem("isAdminVerified", "false");
    //         dispatch(setisAdminVerifiedR(false));
    //       }
    //       setIsDisabled(false);
    //       Alert.alert("Something Went Wrong");
    //       console.log(e.message);
    //     });
    // else {
    //   await AsyncStorage.setItem("isAdminVerified", "false");
    //   dispatch(setisAdminVerifiedR(false));
    // }
  };

  // useEffect(() => {
  //   setRender(
  //     <View style={{ height: "100%", backgroundColor: "#fff" }}>
  //       <HeaderFireOne text="Register Shop" />
  //       <View
  //         style={{
  //           top: "18%",
  //           // marginTop: "30%",
  //           backgroundColor: colorsStyles.CLR_BG,
  //           height: 610,
  //           // flexDirection: "row",
  //           // borderBottomWidth: 3,
  //           // borderBottomRightRadius: 30,
  //           // borderBottomLeftRadius: 30,
  //           //   borderRadius: 30,
  //           borderTopLeftRadius: 20,
  //           borderTopRightRadius: 20,
  //           // borderBottomWidth: 2,
  //           // justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <View style={{ left: "-25%", top: "5%" }}>
  //           <NeuView title="Shop Manager Details" />
  //         </View>
  //         <View style={{ top: "8%" }}>
  //           <InputField
  //             placeholder="Name"
  //             tile="Name"
  //             value={Name}
  //             setValue={setName}
  //           />
  //         </View>
  //         <View style={{ top: "12%" }}>
  //           <InputField
  //             placeholder="VID Number"
  //             tile="VID Number"
  //             keyboardType="numeric"
  //             value={VID}
  //             setValue={setVID}
  //           />
  //         </View>
  //         <View style={{ top: "16%" }}>
  //           <InputField
  //             placeholder="Email"
  //             tile="Email"
  //             value={Email}
  //             setValue={setEmail}
  //           />
  //         </View>
  //         <View style={{ top: "20%" }}>
  //           <InputField
  //             placeholder="Bank Account Number"
  //             tile="Bank Account Number"
  //             keyboardType="numeric"
  //             value={AccountNo}
  //             setValue={setAccountNo}
  //           />
  //         </View>
  //         <View style={{ top: "22%" }}>
  //           <NeumorphicButton
  //             title="Register"
  //             underline="underline"
  //             onPress={() => {
  //               console.log(Name, VID, Email, AccountNo);
  //               registerShop();
  //             }}
  //           />
  //         </View>
  //       </View>
  //     </View>
  //   );
  // }, []);

  return (
    <View style={{ height: "100%", backgroundColor: "#fff" }}>
      <HeaderFireOne text="Register Shop" />

      <View
        style={{
          top: keyboardStatus ? "0%" : "18%",
          // marginTop: "30%",
          backgroundColor: colorsStyles.CLR_BG,
          height: 610,
          // flexDirection: "row",
          // borderBottomWidth: 3,
          // borderBottomRightRadius: 30,
          // borderBottomLeftRadius: 30,
          //   borderRadius: 30,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // borderBottomWidth: 2,
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!keyboardStatus ? (
          <View style={{ left: "-25%", top: "5%" }}>
            <NeuView title="Shop Manager Details" />
          </View>
        ) : null}
        <View style={{ top: keyboardStatus ? "2%" : "8%" }}>
          <InputField
            placeholder="Name"
            tile="Name"
            value={Name}
            setValue={setName}
          />
        </View>
        <View style={{ top: keyboardStatus ? "4%" : "12%" }}>
          <InputField
            placeholder="Email"
            tile="Email"
            value={Email}
            setValue={setEmail}
          />
        </View>
        <View style={{ top: keyboardStatus ? "6%" : "16%" }}>
          <InputField
            placeholder="Password"
            tile="Password"
            // keyboardType="numeric"
            value={VID}
            setValue={setVID}
          />
        </View>
        <View style={{ top: keyboardStatus ? "8%" : "20%" }}>
          <InputField
            placeholder="Title"
            tile="Title"
            value={AccountNo}
            setValue={setAccountNo}
          />
        </View>
        <View style={{ top: keyboardStatus ? "10%" : "24%" }}>
          <SmallButton
            title="Register Shop"
            // isDisabled={!Name || !VID || !Email || !AccountNo || isDisabled}
            onPress={() => {
              console.log(Name, VID, Email, AccountNo);
              //   registerShop();
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default AdminRegisterShopScreen;
