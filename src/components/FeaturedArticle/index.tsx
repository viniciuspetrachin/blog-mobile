import React from "react";
import { Title } from "~/screens/Home/styles";
import BadgeCategory from "../BadgeCategory";

import {
  ArticleInfo,
  ArticleTitle,
  BadgesContainer,
  Container,
  FeaturedImage,
} from "./styles";

interface FeaturedArticleProps {
  title?: string;
  info?: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title = "",
  info = "",
}) => {
  return (
    <Container>
      <Title>Today's Article</Title>
      <FeaturedImage
        source={{
          uri: "https://picsum.photos/200/300",
        }}
        resizeMode="cover"
      />
      <BadgesContainer>
        <BadgeCategory text="Lorem ipsum" />
      </BadgesContainer>
      <ArticleTitle numberOfLines={2}>{title}</ArticleTitle>
      <ArticleInfo numberOfLines={1}>{info}</ArticleInfo>
    </Container>
  );
};

export default FeaturedArticle;
