import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import HomeIcon from '../assets/svg/homeicon.svg';
import DeviceIcon from '../assets/svg/infoicon.svg';
import AccountIcon from '../assets/svg/accounticon.svg';
import CartIcon from '../assets/svg/carticon.svg';
import DeviceDetails from '../screens/DeviceDetails';
import Account from '../screens/Account';
import { Color } from '../utils';
import { Platform } from 'react-native';
import Cart from '../screens/Cart';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: { paddingBottom: 5, fontSize: 12, fontWeight: "700" },
                tabBarStyle: { height: Platform.OS === 'ios' ? 60 : 60, backgroundColor: "#ffffff" },
                tabBarActiveTintColor: Color.primaryColor,
                tabBarHideOnKeyboard: true
            }}
            initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <>
                                {focused ? (
                                    <HomeIcon width={28} height={41} />
                                ) : (
                                    <HomeIcon width={24} height={41} />
                                )}
                            </>
                        );
                    },
                }}
            />

            <Tab.Screen
                name="DeviceDetails"
                component={DeviceDetails}
                options={{
                    tabBarLabel: 'Device Details',
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <>
                                {focused ? (
                                    <DeviceIcon width={28} height={41} />
                                ) : (
                                    <DeviceIcon width={24} height={41} />
                                )}
                            </>
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <>
                                {focused ? (
                                    <CartIcon width={28} height={41} />
                                ) : (
                                    <CartIcon width={24} height={41} />
                                )}
                            </>
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <>
                                {focused ? (
                                    <AccountIcon width={28} height={41} />
                                ) : (
                                    <AccountIcon width={24} height={41} />
                                )}
                            </>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export { TabNavigation };
