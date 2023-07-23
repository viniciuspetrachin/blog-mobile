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

type RouteProps = RouteProp<RootStackParamList, "Post">;

const Post: React.FC = () => {
  const { data, isLoading } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  const { params } = useRoute<RouteProps>();

  useEffect(() => {
    dispatch(fetchPost(params?.id));
  }, []);

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
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
        </Content>
      )}
    </Container>
  );
};

export default Post;
