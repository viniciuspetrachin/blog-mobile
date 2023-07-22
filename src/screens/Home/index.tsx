import React, { useEffect, useState } from "react";
import Divider from "~/components/Divider";
import FeaturedArticle from "~/components/FeaturedArticle";
import Header from "~/components/Header";
import RecentArticles from "~/components/RecentArticles";
import SearchBox from "~/components/SearchBox";
import api from "~/services/api";

import { Container, Content } from "./styles";

const Home: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get("/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Container>
        <Header />
        <SearchBox />
        <Content>
          <FeaturedArticle title={posts[0]?.title} info={posts[0]?.body} />
          <Divider />
          <RecentArticles data={posts} />
        </Content>
      </Container>
    </>
  );
};

export default Home;
