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
// import PhoneInput from "react-native-phone-input";
// import InputPhone from "./InputPhone";
// import { isValidNumber } from "react-native-phone-number-input";

const NeuInput = props => {
  return (
    <View>
      <View
        style={{
          shadowOffset: { width: 10, height: 10 },
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 10,
          shadowOpacity: 1,
          shadowColor: "#e1e2e7",
          shadowRadius: 7,
          backgroundColor: "white",
          width: 280,
          height: 45,
          // ...include most of View/Layout styles
          justifyContent: "center",
          //alignItems: "center",
          //marginHorizontal: 7,
        }}
      >
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
              paddingLeft: 12,
              color: "#000",
            }}
          >
            {props.title}
          </TextInput>
        }
      </View>
    </View>
  );
};
export default NeuInput;
