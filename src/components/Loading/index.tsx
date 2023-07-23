import React from "react";

import { Container } from "./styles";

import LottieView from "lottie-react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Loading: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={require("~/assets/lotties/loading.json")}
        autoPlay
        loop
        style={{
          width: RFValue(36),
          height: RFValue(36),
        }}
      />
    </Container>
  );
};

export default Loading;
