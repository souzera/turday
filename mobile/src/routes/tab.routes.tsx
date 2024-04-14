import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeView from "../screen/HomeView";
import ListView from "../screen/ListView";
import MapView from "../screen/MapView";
import CategoryView from "../screen/CategoryView";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <NavigationContainer  independent={true}>
      <Navigator initialRouteName="Home">
        <Screen options={{headerShown:false}} name="Home" component={HomeView} />
        <Screen options={{headerShown:false}} name="List" component={ListView} />
        <Screen options={{headerShown:false}} name="Map" component={MapView} />
        <Screen options={{headerShown:false}} name="Category" component={CategoryView} />
      </Navigator>
    </NavigationContainer>
  );
}
