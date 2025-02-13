import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LaunchScreen from "./src/screens/LaunchScreen";


export type RootStackParamList = {
    Launch: undefined;
    SignUp: undefined;
    Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Launch">
                <Stack.Screen 
                    name="Launch" 
                    component={LaunchScreen} 
                    options={{ headerShown: false }} // Hide the header
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

