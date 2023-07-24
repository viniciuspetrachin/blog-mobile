import React from "react";
import { TouchableOpacity } from "react-native";
import { HomeNavigationProp } from "~/@types/navigation";
import { useNavigation } from "~/hooks/useNavigation";
import { Title } from "~/screens/Home/styles";
import { IPost } from "~/store/slices/postsSlice";
import BadgeCategory from "../BadgeCategory";

import {
  ArticleContent,
  ArticleInfo,
  ArticleTitle,
  BadgesContainer,
  Container,
  FeaturedImage,
} from "./styles";

interface FeaturedArticleProps {
  data: IPost | undefined;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ data }) => {
  const navigation = useNavigation();

  const handleNavigateToPost = () =>
    data?.id
      ? navigation.navigate("Post", {
          id: data.id,
        })
      : null;

  return (
    <Container>
      <Title>
        <Title>Destaque</Title>
      </Title>
      <TouchableOpacity onPress={handleNavigateToPost}>
        <FeaturedImage
          source={{
            uri: "https://picsum.photos/200/300",
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <BadgesContainer>
        <BadgeCategory text="Lorem ipsum" />
      </BadgesContainer>
      <ArticleContent onPress={handleNavigateToPost}>
        <ArticleTitle numberOfLines={2}>{data?.title}</ArticleTitle>
        <ArticleInfo numberOfLines={2}>{data?.body}</ArticleInfo>
      </ArticleContent>
    </Container>
  );
};

export default FeaturedArticle;
