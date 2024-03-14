import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { View, Text } from "react-native";
import SplashView from "./src/screen/SplashView";
import HomeView from "./src/screen/HomeView";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./src/screen/HomeView/styles";

import { Routes } from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_900Black,
  });

  return (
    <Routes/>
  );
}
