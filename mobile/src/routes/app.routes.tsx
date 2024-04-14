import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeView from "../screen/HomeView";
import ListView from "../screen/ListView";
import MapView from "../screen/MapView";
import CategoryView from "../screen/CategoryView";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="List"
          component={ListView}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Map"
          component={MapView}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Category"
          component={CategoryView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
