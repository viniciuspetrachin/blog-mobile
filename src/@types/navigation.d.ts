import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined;
  Post: {
    id: number;
  };
  Posts: {
    search: string;
  } | undefined;
};

export type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export type PostNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Post'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { } // Use RootStackParamList
  }
}
