import React from "react";
import ArticleThumb from "~/components/ArticleThumb";

import useAppSelector from "~/hooks/useAppSelector";
import { FlashList } from "@shopify/flash-list";
import { Container, ContentThumb } from "./styles";
import Header from "~/components/Header";
import { RootStackParamList } from "~/@types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";

type RouteProps = RouteProp<RootStackParamList, "Posts">;

const Posts: React.FC = () => {
  const { params } = useRoute<RouteProps>();
  const posts = useAppSelector((state) => state.posts.data);

  const filteredPosts = React.useMemo(() => {
    if (!params?.search) return posts;
    return posts.filter((post) =>
      post.title.toLowerCase().includes(params.search.toLowerCase())
    );
  }, [params?.search, posts]);

  return (
    <Container>
      <FlashList
        ListHeaderComponent={
          <Header title="Posts" paddingBottom={10} showBookmark={false} />
        }
        data={filteredPosts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ContentThumb>
            <ArticleThumb
              key={item.id}
              id={item.id}
              userId={item.userId}
              title={item.title}
              info={item.body}
            />
          </ContentThumb>
        )}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={100}
      />
    </Container>
  );
};

export default Posts;
