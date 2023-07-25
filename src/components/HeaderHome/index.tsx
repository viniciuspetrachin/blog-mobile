import React from "react";
import {
  Container,
  HeaderContent,
  Image,
  TextGreeting,
  TextName,
} from "./styles";

const HeaderHome: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <TextName>Vinicius Petrachin</TextName>
        <TextGreeting>Bom dia!</TextGreeting>
      </HeaderContent>
      <Image source={{ uri: "https://github.com/viniciuspetrachin.png" }} />
    </Container>
  );
};

export default HeaderHome;
