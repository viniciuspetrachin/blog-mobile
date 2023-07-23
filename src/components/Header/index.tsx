import React, { useState } from "react";

import { Container, FavoritesContainer, Title } from "./styles";

import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "~/hooks/useNavigation";
import { TouchableOpacity } from "react-native";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showBookmark?: boolean;
  paddingBottom?: number;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  showBookmark = true,
  paddingBottom = 0,
}) => {
  const [selected, setSelected] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme();
  const toggleBookmark = () => setSelected((p) => !p);
  const handleBack = () =>
    navigation.canGoBack() ? navigation.goBack() : navigation.navigate("Home");
  return (
    <Container paddingBottom={paddingBottom} showBookmark={showBookmark}>
      {showBack && (
        <TouchableOpacity onPress={handleBack}>
          <Feather
            name="chevron-left"
            size={RFValue(32)}
            color={theme.colors.primary}
            style={{
              marginLeft: RFValue(-8),
              marginRight: RFValue(8),
            }}
          />
        </TouchableOpacity>
      )}
      {title && (
        <Title>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</Title>
      )}
      {showBookmark && (
        <FavoritesContainer onPress={toggleBookmark}>
          <MaterialIcons
            name={selected ? "bookmark" : "bookmark-border"}
            size={RFValue(14)}
            color={theme.colors.background}
          />
        </FavoritesContainer>
      )}
    </Container>
  );
};

export default Header;
