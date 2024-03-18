import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeView from "../screen/HomeView";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
