import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { RootStackParamList } from "~/@types/navigation";
import { FeaturedImage } from "~/components/FeaturedArticle/styles";
import Header from "~/components/Header";
import useAppDispatch from "~/hooks/useAppDispatch";
import useAppSelector from "~/hooks/useAppSelector";
import { fetchPost } from "~/store/slices/postSlice";
import { Container, Content, InfoText, TextBody, Title } from "./styles";

import Loading from "~/components/Loading";
import Comment from "~/components/Comment";
import { FlashList } from "@shopify/flash-list";
import { fetchComments } from "~/store/slices/commentsSlice";

type RouteProps = RouteProp<RootStackParamList, "Post">;

const Post: React.FC = () => {
  const { params } = useRoute<RouteProps>();

  const { data, isLoading } = useAppSelector((state) => state.post);

  const dispatch = useAppDispatch();

  const { isLoading: isLoadingComments, data: commentsData } = useAppSelector(
    (state) => state.comments
  );

  useEffect(() => {
    if (!params?.id) return;
    dispatch(fetchPost(params?.id));
    dispatch(fetchComments(params?.id));
  }, [params?.id]);

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <FlashList
          data={commentsData ?? []}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Comment data={item} />}
          estimatedItemSize={10}
          ListHeaderComponent={() => (
            <Content>
              <FeaturedImage
                source={{
                  uri: "https://picsum.photos/200/300",
                }}
                resizeMode="cover"
              />
              <InfoText numberOfLines={1}>{data?.body.slice(0, 100)}</InfoText>
              <Title numberOfLines={4}>{data?.title}</Title>
              <TextBody>{data?.body}</TextBody>
              {commentsData && <Title>Comentários</Title>}
            </Content>
          )}
          ListEmptyComponent={() =>
            isLoadingComments ? (
              <Loading />
            ) : (
              <InfoText>Sem comentários</InfoText>
            )
          }
        />
      )}
    </Container>
  );
};
export default Post;
