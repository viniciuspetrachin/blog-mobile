import React, { useEffect } from "react";
import Divider from "~/components/Divider";
import FeaturedArticle from "~/components/FeaturedArticle";
import HeaderHome from "~/components/HeaderHome";
import RecentArticles from "~/components/RecentArticles";
import SearchBox from "~/components/SearchBox";
import useAppDispatch from "~/hooks/useAppDispatch";
import useAppSelector from "~/hooks/useAppSelector";

import { fetchPosts } from "~/store/slices/postsSlice";

import { Container, Content } from "./styles";

const Home: React.FC = () => {
  const posts = useAppSelector((state) => state.posts.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Container>
      <HeaderHome />
      <SearchBox />
      <Content>
        <FeaturedArticle data={posts[0]} />
        <Divider />
        <RecentArticles data={posts} />
      </Content>
    </Container>
  );
};

export default Home;
