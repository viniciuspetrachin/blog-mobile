import React from "react";
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
  return (
    <Container>
      <Title>More Articles</Title>
      {data?.map((item) => (
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
