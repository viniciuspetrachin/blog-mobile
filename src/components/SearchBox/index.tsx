import React from "react";

import { Container, StyledButton, StyledInput } from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "~/hooks/useNavigation";

interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = () => {
  const [search, setSearch] = React.useState<string>("");
  const navigation = useNavigation();

  const handleSearch = () => {
    if (!search) return;
    if (search.length < 3) return;
    navigation.navigate("Posts", {
      search,
    });
  };

  return (
    <Container>
      <StyledInput
        placeholder="Pesquisar..."
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
      />
      <StyledButton testID="search" onPress={handleSearch}>
        <Ionicons name="ios-search" size={24} color="white" />
      </StyledButton>
    </Container>
  );
};

export default SearchBox;
