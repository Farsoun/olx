import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabBar from './TabBar';
import CarsScreen from '../screens/CarsScreen';

export type RootStackParamList = {
  MainTabs: undefined;
  Cars: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="MainTabs"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}>
            <Stack.Screen
                name="MainTabs"
                component={TabBar}
            />
            <Stack.Screen
                name="Cars"
                component={CarsScreen}
            />
        </Stack.Navigator>
    );
};

export default AppStack;