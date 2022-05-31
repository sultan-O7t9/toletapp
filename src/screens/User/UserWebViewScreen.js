import React from "react";
import WebViewComponent from "../../components/WebViewComponent";
import HeaderFireTwo from "../../components/HeaderFireTwo";

const UserWebViewScreen = ({ route }) => {
  const { url, name } = route.params;
  return (
    <>
      {/* <HeaderBet365 /> */}
      <HeaderFireTwo title={name} />
      <WebViewComponent url={url} />
    </>
  );
};

export default UserWebViewScreen;
