import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import theme from "~/global/theme";
import Home from "~/screens/Home";
import store from "~/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
