import React, { useState } from "react";

import { Container, FavoritesContainer } from "./styles";

import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [selected, setSelected] = useState(false);

  const toggleBookmark = () => setSelected((p) => !p);

  const theme = useTheme();
  return (
    <Container>
      <Feather
        name="chevron-left"
        size={RFValue(32)}
        color={theme.colors.primary}
        style={{
          marginLeft: RFValue(-8),
        }}
      />
      <FavoritesContainer onPress={toggleBookmark}>
        <MaterialIcons
          name={selected ? "bookmark" : "bookmark-border"}
          size={RFValue(14)}
          color={theme.colors.background}
        />
      </FavoritesContainer>
    </Container>
  );
};

export default Header;
