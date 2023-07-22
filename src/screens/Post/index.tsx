import React from "react";
import { FeaturedImage } from "~/components/FeaturedArticle/styles";
import Header from "~/components/Header";

import { Container } from "./styles";

interface PostProps {}

const Post: React.FC<PostProps> = () => {
  return (
    <Container>
      <Header />
      <FeaturedImage
        source={{
          uri: "https://picsum.photos/200/300",
        }}
        resizeMode="cover"
      />
    </Container>
  );
};

export default Post;
