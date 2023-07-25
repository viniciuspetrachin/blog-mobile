import React from "react";

import { Container } from "./styles";

import { RFValue } from "react-native-responsive-fontsize";
import { ActivityIndicator } from "react-native";

const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator size={RFValue(50)} color="#000" />
    </Container>
  );
};

export default Loading;
