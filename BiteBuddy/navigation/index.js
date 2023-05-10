import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();

export default function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ResultScreen"
                    component={ResultScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    }
})