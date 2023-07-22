import React from "react";
import { FeaturedImage } from "~/components/FeaturedArticle/styles";
import Header from "~/components/Header";

import { Container, InfoText, TextBody, Title } from "./styles";

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
      <InfoText numberOfLines={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </InfoText>
      <Title numberOfLines={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </Title>
      <TextBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </TextBody>
    </Container>
  );
};

export default Post;
