import React from "react";
import { useNavigation } from "~/hooks/useNavigation";

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
  const navigation = useNavigation();

  const handleArticle = () => navigation.navigate("Post", { id });

  return (
    <Container onPress={handleArticle}>
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
