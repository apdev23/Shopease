import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigation from './HomeNavigation';

const Stack = createNativeStackNavigator();

const MainNvigation = (props: any) => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='HomeNavigation' screenOptions={{ headerShown: false }} >
                    <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default MainNvigation