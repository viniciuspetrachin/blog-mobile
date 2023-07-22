import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import theme from "~/global/theme";
import Home from "~/screens/Home";
import store from "~/store";

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import Post from "~/screens/Post";

const App: React.FC = () => {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontLoaded) return null;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Post />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
