import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { View, Text } from "react-native";
import SplashView from "./src/screen/SplashView";
import HomeView from "./src/screen/HomeView";

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [appIsReady, setAppIsReady] = useState(true);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady){
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (<SplashView/>);
  }

  return (
    <HomeView />
  );
}
