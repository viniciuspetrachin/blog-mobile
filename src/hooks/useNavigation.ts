import { useNavigation as originalUseNavigation } from '@react-navigation/native';
import { RootStackParamList } from '~/@types/navigation';
import { NavigationProp } from '@react-navigation/native';

export function useNavigation<T extends keyof RootStackParamList>() {
  return originalUseNavigation<NavigationProp<RootStackParamList, T>>();
}
