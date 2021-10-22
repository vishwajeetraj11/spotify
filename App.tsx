import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // let [fontsLoaded] = useFonts({
  //   // "Circular-Bold": require("./assets/fonts/Circular-Bold.woff2"),
  //   // "Circular-Book": require("./assets/fonts/CircularSpUIv3T-Book.3÷66e0ec.woff2"),
  //   // "Circular-Light": require("./assets/fonts/CircularSpUIv3T-Light.afd9ab26.woff2"),
  // });

  if (!isLoadingComplete) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
