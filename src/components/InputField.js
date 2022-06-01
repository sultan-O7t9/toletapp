// import { Shadow } from "react-native-neomorph-shadows";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import React from "react";
import colorsStyles from "../styles/colors.styles";
import { useWindowDimensions } from "react-native";
// import PhoneInput from "react-native-phone-input";
// import InputPhone from "./InputPhone";
// import { isValidNumber } from "react-native-phone-number-input";

const InputField = props => {
  const dimensions = {
    width: useWindowDimensions().width,
    height: useWindowDimensions().height,
  };
  const input = {
    width: dimensions.width * 0.81,
    height: 56,
  };
  return (
    <View>
      {
        // props.isph ? (
        //   <PhoneInput
        //     initialCountry="us"
        //     onChangePhoneNumber={(value, iso2) => {
        //       const newState = {
        //         phoneInputValue: value,
        //       };

        //       if (iso2) {
        //         newState.countryCode = iso2?.toUpperCase();
        //         console.log(iso2);
        //         console.log(value);
        //       }
        //       if (isValidNumber(value)) {
        //         props.setIsDisabled(false);
        //         props.setValue(value);
        //       } else {
        //         props.setIsDisabled(true);
        //         props.setValue("");
        //       }
        //     }}
        //     style={{ color: "#000" }}
        //     textStyle={{ color: "#000" }}
        //     textProps={{
        //       placeholder: "Please Select a Country...",
        //       placeholderTextColor: "#000",
        //     }}
        //     // pickerButtonColor={"#007AFF"}
        //     // pickerBackgroundColor="white"
        //   />
        // )
        // :
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor="#000"
          keyboardType={props.keyboardType}
          value={props.value}
          onChangeText={txt => {
            props.setValue(txt);
          }}
          style={{
            width: input.width,
            padding: 12,
            backgroundColor: colorsStyles.CLR_WHITE,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: colorsStyles.CLR_PRIMARY,
            color: "#000",
          }}
        >
          {props.title}
        </TextInput>
      }
    </View>
  );
};
export default InputField;
