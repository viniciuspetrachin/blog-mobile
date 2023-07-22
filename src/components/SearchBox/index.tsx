import React from "react";

import { Container, StyledButton, StyledInput } from "./styles";

import { Ionicons } from "@expo/vector-icons";

interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = () => {
  return (
    <Container>
      <StyledInput placeholder="Search..." />
      <StyledButton>
        <Ionicons name="ios-search" size={24} color="white" />
      </StyledButton>
    </Container>
  );
};

export default SearchBox;
