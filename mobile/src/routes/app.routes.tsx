import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeView from "../screen/HomeView";
import ListView from "../screen/ListView";
import MapView from "../screen/MapView";
import { CategoryView } from "../screen/CategoryView";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen
          name="HomeView"
          component={HomeView}
          options={{ headerShown: false }}
        />
        <Screen
          name="ListView"
          component={ListView}
          options={{ headerShown: false }}
        />
        <Screen 
          name="MapPage"
          component={MapView}
          options={{ headerShown: false }}
        />
        <Screen 
          name="CategoryView"
          component={CategoryView}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
