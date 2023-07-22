import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from "~/screens/Home";
import Post from "~/screens/Post";

const StackRoute: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
};

export default StackRoute;
