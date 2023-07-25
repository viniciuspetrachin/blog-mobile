import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components/native";
import theme from "~/global/theme";

import HomeHeader from ".";

describe("<HomeHeader />", () => {
  it("Contains the name", () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <HomeHeader />
      </ThemeProvider>
    );

    const instance = component.root;
    const textElements = instance.findAllByType("Text");

    const hasName = textElements.some((element) =>
      element.children.includes("Vinicius Petrachin")
    );

    const hasGreeting = textElements.some((element) =>
      element.children.includes("Bom dia!")
    );

    expect(hasName).toBeTruthy();

    expect(hasGreeting).toBeTruthy();
  });
});
