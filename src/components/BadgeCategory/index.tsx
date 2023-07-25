import React from "react";

import { Container, Text } from "./styles";

interface BadgeCategoryProps {
  text: string;
}

const BadgeCategory: React.FC<BadgeCategoryProps> = ({ text = "" }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default BadgeCategory;
