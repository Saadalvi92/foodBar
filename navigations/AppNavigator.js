import * as React from 'react';
// navigations
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//screens
import splash from "../screens/Splash";
import signin from "../screens/Login";
import signUp from "../screens/Register";
import landing from "../screens/LandingScreen";
import home from "../screens/HomeScreen";
import indian from "../screens/IndianCuisine";
import appitizer from "../screens/Appitizer";
import recipe from "../screens/RecipieScreen";
const Stack = createStackNavigator();

function AppNavigator(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" headerMode="none">
            <Stack.Screen name="Splash" component={splash} />
            <Stack.Screen name="SignIn" component={signin} />
            <Stack.Screen name="signUp" component={signUp} />
            <Stack.Screen name="landingPage" component={landing} />
            <Stack.Screen name="homePage" component={home} />
            <Stack.Screen name="indianCusines" component={indian} />
            <Stack.Screen name="appitizerScreen" component={appitizer} />

            <Stack.Screen name="recipeScreen" component={recipe} />




            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default AppNavigator;