import React from "react";
import FeaturedArticle from "~/components/FeaturedArticle";
import Header from "~/components/Header";
import SearchBox from "~/components/SearchBox";

import { Container, Content } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchBox />
      <Content>
        <FeaturedArticle />
      </Content>
    </Container>
  );
};

export default Home;
