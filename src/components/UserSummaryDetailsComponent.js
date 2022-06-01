import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import colorsStyles from "../styles/colors.styles";
const UserSummaryDetailsComponent = props => {
  const [state, setState] = React.useState(false);

  return (
    <View
      style={{
        // justifyContent:"center",
        alignItems: "center",
        // backgroundColor:'red'
      }}
    >
      <View>
        <View
          style={{
            shadowOffset: { width: 2, height: 2 },
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 10,

            backgroundColor: colorsStyles.CLR_BoX,
            width: 248,
            height: 105,
            justifyContent: "center",
            alignItems: "center",
            //  marginHorizontal: 7,
          }}
        >
          <Text style={{ fontSize: 48, fontWeight: "bold" }}>
            {props.title}
          </Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "25%",
          width: 247,
          borderRadius: 10,
          backgroundColor: colorsStyles.CLR_PRIMARY,
          bottom: "76.5%",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "white",
            fontWeight: "700",
          }}
        >
          {props.text}
        </Text>
      </View>
    </View>
  );
};
export default UserSummaryDetailsComponent;
