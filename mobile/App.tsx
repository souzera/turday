import * as SplashScreen from "expo-splash-screen";

import HomeView from "./src/screen/HomeView";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import { Routes } from "./src/routes";
import Loading from "./src/components/Loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import Carousel from "./src/components/Carousel";


SplashScreen.preventAutoHideAsync();

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_900Black,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Carousel />
    </SafeAreaView>
  );
}
