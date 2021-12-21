import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home.screen";
import { History } from "./History.screen";
import Analytics from "./Analytics.screen";


const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="Home" component={Home} />
            <BottomTabs.Screen name="History " component={History} />
            <BottomTabs.Screen name="Analytics" component={Analytics} />
            <BottomTabs.Screen name="Analytics1" component={Analytics} />
            <BottomTabs.Screen name="Analytics2" component={Analytics} />
            <BottomTabs.Screen name="Analytics3" component={Analytics} />
            <BottomTabs.Screen name="Analytics4" component={Analytics} />



            
        </BottomTabs.Navigator>
    )
}