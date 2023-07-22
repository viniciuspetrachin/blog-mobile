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
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title = "Today's Article",
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <FeaturedImage
        source={{
          uri: "https://cdn.pixabay.com/photo/2023/06/27/10/51/man-8091933_1280.jpg",
        }}
        resizeMode="cover"
      />
      <BadgesContainer>
        <BadgeCategory text="Lorem ipsum" />
      </BadgesContainer>
      <ArticleTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      </ArticleTitle>
      <ArticleInfo>By John Doe | 10/10/2021 | 10 min read</ArticleInfo>
    </Container>
  );
};

export default FeaturedArticle;
