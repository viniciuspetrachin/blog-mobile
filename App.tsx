import Home from "./src/screens/Home";

import { useFonts } from "expo-font";

import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { ThemeProvider } from "styled-components";
import theme from "~/global/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
