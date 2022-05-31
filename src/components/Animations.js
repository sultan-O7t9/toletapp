import React from "react";
import LottieView from "lottie-react-native";

export const LoadingAnimation = () => {
  return (
    <LottieView
      source={require("../assets/animations/Loading circle.json")}
      style={{
        alignSelf: "center",
        height: "100%",
        backgroundColor: "transparent",
      }}
      autoPlay
      loop
    />
  );
};
export const OtpAnimation = () => {
  return (
    <LottieView
      source={require("../assets/animations/OTP Verification.json")}
      style={{
        alignSelf: "center",
        height: "65%",
        backgroundColor: "transparent",
      }}
      autoPlay
      loop
    />
  );
};
export const SecurityAnimation = () => {
  return (
    <LottieView
      source={require("../assets/animations/Password unlock, security.json")}
      style={{
        alignSelf: "center",
        height: "100%",
        backgroundColor: "transparent",
      }}
      autoPlay
      loop
    />
  );
};
export const QrAnimation = () => {
  return (
    <LottieView
      source={require("../assets/animations/QR scanner.json")}
      style={{
        alignSelf: "center",
        height: "100%",
        backgroundColor: "transparent",
      }}
      autoPlay
      loop
    />
  );
};
