import React from "react";
import { FlatList, View } from "react-native";
import ArticleThumb from "../ArticleThumb";

import { Container, Title } from "./styles";

interface RecentArticlesProps {
  data: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}

const RecentArticles: React.FC<RecentArticlesProps> = ({ data }) => {
  const posts = data.slice(1, 6);

  return (
    <Container>
      <Title>More Articles</Title>
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
