import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "~/@types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

import Home from "~/screens/Home";
import Post from "~/screens/Post";
import Posts from "~/screens/Posts";

const StackRoute: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Posts" component={Posts} />
    </Stack.Navigator>
  );
};

export default StackRoute;
