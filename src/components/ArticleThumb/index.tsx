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
          uri: "https://picsum.photos/200/300",
        }}
      />
      <Content>
        <Title numberOfLines={2}>{title}</Title>
        <TextInfo numberOfLines={3}>{info}</TextInfo>
      </Content>
    </Container>
  );
};

export default ArticleThumb;
