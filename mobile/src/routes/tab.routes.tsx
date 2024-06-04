import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeView from "../screen/HomeView";
import ListView from "../screen/ListView";
import MapView from "../screen/MapView";
import CategoryView from "../screen/CategoryView";
import React, { useEffect } from "react";

import { FontAwesome } from '@expo/vector-icons'
import { THEME } from "../theme";
import EventsView from "../screen/EventsView";
import useLocation from "../context/location";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {

  return (
    <NavigationContainer  independent={true}>
      <Navigator initialRouteName="Home" screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "key";

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Lista") {
              iconName = "list-ul";
            } else if (route.name === "Mapa") {
              iconName = "map-marker";
            } else if (route.name === "Eventos") {
              iconName = "calendar-o";
            } else if (route.name === "Buscar") {
              iconName = "search";
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarLabel: () => {return null},
          tabBarActiveTintColor: THEME.COLORS.DARKGRAY,
          tabBarInactiveTintColor: THEME.COLORS.LIGTHGRAY,
          tabBarStyle: {
            height: 80,
            backgroundColor: THEME.COLORS.LIGHT,
          }
        })
      }>
        <Screen options={{headerShown:false}} name="Home" component={HomeView} />
        <Screen options={{headerShown:false}} name="Lista" component={ListView} />
        <Screen options={{headerShown:false}} name="Mapa" component={MapView} />
        <Screen options={{headerShown:false}} name="Eventos" component={EventsView} />
        <Screen options={{headerShown:false}} name="Buscar" component={CategoryView} />
      </Navigator>
    </NavigationContainer>
  );
}
