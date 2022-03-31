import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
      <Tab.Navigator>
         
  
          
        <Tab.Navigator>
         
         <Tab.Screen name="Transaction" component={RideScreen} />
         <Tab.Screen name="Search" component={RideHistoryScreen} />
       </Tab.Navigator>

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
