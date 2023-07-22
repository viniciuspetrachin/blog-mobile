import React from "react";
import Header from "~/components/Header";
import SearchBox from "~/components/SearchBox";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchBox />
    </Container>
  );
};

export default Home;
