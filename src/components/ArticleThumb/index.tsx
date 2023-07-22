import React from "react";

import { Container, Content, TextInfo, Thumbnail, Title } from "./styles";

interface ArticleThumbProps {
  id: number;
  userId: number;
  title: string;
  info: string;
}

const ArticleThumb: React.FC<ArticleThumbProps> = ({
  id,
  userId,
  title,
  info,
}) => {
  return (
    <Container>
      <Thumbnail
        source={{
          uri: "https://cdn.pixabay.com/photo/2023/07/03/08/05/turkey-8103602_1280.jpg",
        }}
      />
      <Content>
        <Title>{title}</Title>
        <TextInfo>{info}</TextInfo>
      </Content>
    </Container>
  );
};

export default ArticleThumb;
