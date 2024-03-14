import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "../screen/HomeView";
import SplashView from "../screen/SplashView";
import { NavigationContainer } from "@react-navigation/native";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeView} />
        <Screen name="Home" component={SplashView} />
      </Navigator>
    </NavigationContainer>
  );
}
