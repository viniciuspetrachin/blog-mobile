import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import ArticleThumb from "~/components/ArticleThumb";
import Divider from "~/components/Divider";
import FeaturedArticle from "~/components/FeaturedArticle";
import Header from "~/components/Header";
import RecentArticles from "~/components/RecentArticles";
import SearchBox from "~/components/SearchBox";
import api from "~/services/api";

import { Container, Content } from "./styles";

const Home: React.FC = () => {
  useEffect(() => {
    api
      .get("/posts")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
