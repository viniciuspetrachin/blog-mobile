import React from "react";
import ArticleThumb from "~/components/ArticleThumb";

import useAppSelector from "~/hooks/useAppSelector";
import { FlashList } from "@shopify/flash-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, ContentThumb } from "./styles";
import Header from "~/components/Header";

const Posts: React.FC = () => {
  const posts = useAppSelector((state) => state.posts.data);
  return (
    <Container>
      <FlashList
        ListHeaderComponent={
          <Header title="Posts" paddingBottom={10} showBookmark={false} />
        }
        data={posts}
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
        style={{ flex: 1 }}
        estimatedItemSize={100}
      />
    </Container>
  );
};

export default Posts;
