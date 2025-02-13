import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LaunchScreen from "./src/screens/LaunchScreen";
import SignUpScreen from "./src/screens/SignUpScreen"; // 

export type RootStackParamList = {
    Launch: undefined;
    SignUp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Launch">
                <Stack.Screen 
                    name="Launch" 
                    component={LaunchScreen} 
                    options={{ headerShown: false }} // Hide default header
                />
                <Stack.Screen 
                    name="SignUp" 
                    component={SignUpScreen} 
                    options={{ headerShown: false }} // Hide default header
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
