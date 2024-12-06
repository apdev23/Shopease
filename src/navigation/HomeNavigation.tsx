import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigation } from './TabNavigation';

const Stack = createNativeStackNavigator();

const HomeNavigation = (props: any) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'TabNavigation'} component={TabNavigation} />
        </Stack.Navigator>
    )
}

export default HomeNavigation