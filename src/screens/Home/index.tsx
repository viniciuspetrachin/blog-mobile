import React from "react";
import { SafeAreaView } from "react-native";
import ArticleThumb from "~/components/ArticleThumb";
import Divider from "~/components/Divider";
import FeaturedArticle from "~/components/FeaturedArticle";
import Header from "~/components/Header";
import RecentArticles from "~/components/RecentArticles";
import SearchBox from "~/components/SearchBox";

import { Container, Content } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchBox />
      <Content>
        <FeaturedArticle />
        <Divider />
        <RecentArticles />
      </Content>
    </Container>
  );
};

export default Home;
