import React from "react";
import { IComment } from "~/store/slices/commentsSlice";

import { BodyText, Bold, ByText, Container, Title } from "./styles";

interface CommentProps {
  data: IComment;
}

const Comment: React.FC<CommentProps> = ({ data: { name, body, email } }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <BodyText>{body}</BodyText>
      <ByText>
        <Bold>Publicado por:</Bold> {name}
      </ByText>
    </Container>
  );
};

export default Comment;
