import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LaunchScreen from "../screens/LaunchScreen";


// Define navigation types
export type RootStackParamList = {
    Launch: undefined;
    SignUp: undefined;
    Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Launch" component={LaunchScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
