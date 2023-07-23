import React from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "~/hooks/useNavigation";
import ArticleThumb from "../ArticleThumb";

import { Container, Header, SeeAllButton, SeeAllText, Title } from "./styles";

interface RecentArticlesProps {
  title?: string;
  data: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
  showAll?: boolean;
}

const RecentArticles: React.FC<RecentArticlesProps> = ({
  data,
  showAll,
  title = "Mais artigos",
}) => {
  const posts = showAll ? data : data.slice(1, 6);

  const navigation = useNavigation();

  const handleSeeAll = () => navigation.navigate("Posts");

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {!showAll && (
          <SeeAllButton onPress={handleSeeAll}>
            <SeeAllText>Ver todos</SeeAllText>
          </SeeAllButton>
        )}
      </Header>
      {posts?.map((item) => (
        <ArticleThumb
          key={item.id}
          id={item.id}
          userId={item.userId}
          title={item.title}
          info={item.body}
        />
      ))}
    </Container>
  );
};

export default RecentArticles;
