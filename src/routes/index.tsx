import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackRoute from "./stack.route";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  );
};

export default Routes;
